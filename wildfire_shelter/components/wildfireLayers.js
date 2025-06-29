import { LACountyWildfireData } from '../data/wildfireData.js';

export function addWildfireLayers(map, wildfireLayers) {
    wildfireLayers.hazardZones = L.layerGroup();
    wildfireLayers.historicalFires = L.layerGroup();

    // Add hazard zones
    LACountyWildfireData.hazardZones.forEach(zone => {
        const color = LACountyWildfireData.utils.getHazardColor(zone.severity);
        const polygon = L.polygon(zone.coordinates, {
            color,
            fillColor: color,
            fillOpacity: 0.3,
            weight: 2
        }).bindPopup(`<b>${zone.name}</b><br>${zone.description}`);

        polygon.addTo(wildfireLayers.hazardZones);
    });

    // Add historical fires
    LACountyWildfireData.historicalFires.forEach(fire => {
        const fireIcon = L.divIcon({
            className: 'fire-marker',
            html: `<div style="background:#ff0000;border-radius:50%;width:20px;height:20px;display:flex;align-items:center;justify-content:center;color:white;font-weight:bold;">F</div>`,
            iconSize: [20, 20]
        });

        const marker = L.marker(fire.location, { icon: fireIcon })
            .bindPopup(LACountyWildfireData.utils.formatFirePopup(fire));

        marker.addTo(wildfireLayers.historicalFires);
    });

}