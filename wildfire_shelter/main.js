
import { LACountyWildfireData } from './data/wildfireData.js';
import { shelters } from './data/shelters.js';
import { hospitals } from './data/hospitals.js';

import { getStatusType } from './utils/statusUtils.js';
import { createShelterMarkers } from './components/sheltersLayer.js';
import { createHospitalMarkers } from './components/hospitalLayer.js';
import { addWildfireLayers } from './components/wildfireLayers.js';
import { addCommunityMarkers } from './components/communityLayer.js';
import { addWeatherStationMarkers } from './components/weatherStations.js';
import { addEvacuationCenterMarkers } from './components/evacuationCenters.js';

let map;
const allMarkers = [];
const activeFilters = new Set(['available', 'limited', 'full']);

const wildfireLayers = {};  // holds hazard and historical fires
const hospitalLayerGroup = L.layerGroup();
const communityLayerGroup = L.layerGroup();           // 🔥
const weatherStationLayerGroup = L.layerGroup();      // ⛅
const evacuationCenterLayerGroup = L.layerGroup();    // 🚪

function initializeMap() {
    map = L.map('map').setView([34.05, -118.25], 10);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
}

function filterMarkers() {
    allMarkers.forEach(marker => {
        const statusType = marker.shelterData?.statusType;
        if (statusType && activeFilters.has(statusType)) {
            if (!map.hasLayer(marker)) {
                marker.addTo(map);
            }
        } else {
            if (map.hasLayer(marker)) {
                map.removeLayer(marker);
            }
        }
    });
}

function toggleFilter(status) {
    if (activeFilters.has(status)) {
        activeFilters.delete(status);
    } else {
        activeFilters.add(status);
    }
    filterMarkers();
    updateLegendDisplay();
}

function updateLegendDisplay() {
    const items = document.querySelectorAll('.legend-item');
    items.forEach(item => {
        const status = item.dataset.status;
        item.classList.toggle('active', activeFilters.has(status));
        item.classList.toggle('inactive', !activeFilters.has(status));
    });
}

function addLegend() {
    const legend = L.control({ position: 'topright' });
    legend.onAdd = function () {
        const div = L.DomUtil.create('div', 'legend-control');
        div.innerHTML = `
            <h4>Shelter Availability</h4>
            <div class="legend-item" data-status="available"><div class="legend-color" style="background: #28a745;"></div>Available</div>
            <div class="legend-item" data-status="limited"><div class="legend-color" style="background: #ffc107;"></div>Limited</div>
            <div class="legend-item" data-status="full"><div class="legend-color" style="background: #dc3545;"></div>Full</div>
            <div class="legend-item" data-status="unknown"><div class="legend-color" style="background: #6c757d;"></div>Unknown</div>
            <button id="show-all" class="filter-button">Show All</button>
            <button id="hide-all" class="filter-button">Hide All</button>
        `;
        return div;
    };
    legend.addTo(map);

    setTimeout(() => {
        document.querySelectorAll('.legend-item').forEach(item => {
            item.addEventListener('click', () => toggleFilter(item.dataset.status));
        });
        document.getElementById('show-all').addEventListener('click', () => {
            activeFilters.clear();
            ['available', 'limited', 'full'].forEach(f => activeFilters.add(f));
            filterMarkers();
            updateLegendDisplay();
        });
        document.getElementById('hide-all').addEventListener('click', () => {
            activeFilters.clear();
            filterMarkers();
            updateLegendDisplay();
        });
        updateLegendDisplay();
    }, 500);
}

function addSearchControl() {
    const search = L.control({ position: 'topleft' });
    search.onAdd = function () {
        const div = L.DomUtil.create('div', 'search-control');
        div.innerHTML = '<input type="text" id="shelter-search" placeholder="Search shelters..." style="padding: 6px; width: 200px;">';
        return div;
    };
    search.addTo(map);

    setTimeout(() => {
        const input = document.getElementById('shelter-search');
        input.addEventListener('input', e => {
            const query = e.target.value.toLowerCase();
            allMarkers.forEach(marker => {
                const data = marker.shelterData;
                if (!data) return;
                const matches = data.name.toLowerCase().includes(query) ||
                    data.address.toLowerCase().includes(query) ||
                    data.services.some(s => s.toLowerCase().includes(query));
                const show = matches && activeFilters.has(data.statusType);
                if (show) {
                    marker.addTo(map);
                } else {
                    map.removeLayer(marker);
                }
            });
        });
    }, 500);
}

function addUserLocation() {
    map.locate({ setView: false, maxZoom: 14, timeout: 10000 });
    map.on('locationfound', e => {
        const userIcon = L.divIcon({
            html: '<div style="background: #007bff; border: 3px solid #fff; border-radius: 50%; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center;">📍</div>',
            iconSize: [30, 30],
            iconAnchor: [15, 15]
        });
        L.marker(e.latlng, { icon: userIcon }).addTo(map).bindPopup('<strong>Your Location</strong>').openPopup();
    });
    map.on('locationerror', e => {
        console.warn('Location access denied or unavailable:', e.message);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initializeMap();
    addWildfireLayers(map, wildfireLayers);
    createShelterMarkers(map, shelters, allMarkers, activeFilters);
    createHospitalMarkers(map, hospitals, hospitalLayerGroup);
    addCommunityMarkers(map, communityLayerGroup); 
    addWeatherStationMarkers(map, weatherStationLayerGroup); 
    addEvacuationCenterMarkers(map, evacuationCenterLayerGroup); 

    L.control.layers(null, {
        "Fire Hazard Zones": wildfireLayers.hazardZones,
        "Historical Fires": wildfireLayers.historicalFires,
        "Hospitals": hospitalLayerGroup,
        "High-Risk Communities": communityLayerGroup,
        "Weather Stations": weatherStationLayerGroup,
        "Evacuation Centers": evacuationCenterLayerGroup
    }).addTo(map);

    addLegend();
    addSearchControl();
    addUserLocation();
});