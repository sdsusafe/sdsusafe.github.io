import {
    getMarkerColor,
    getStatusText,
    getStatusClass,
    getStatusType
} from '../utils/statusUtils.js';

export function createShelterMarkers(map, shelters, allMarkers, activeFilters) {
    shelters.forEach((shelter) => {
        const available = (typeof shelter.available === 'number') ? shelter.available : 0;
        const capacity = shelter.capacity || 'Unknown';
        const phone = shelter.phone || 'Not available';
        const services = shelter.services || ['Contact for details'];

        const markerColor = getMarkerColor(available);
        const statusText = getStatusText(available);
        const statusClass = getStatusClass(available);
        const statusType = getStatusType(available);

        const customIcon = L.divIcon({
            className: 'custom-shelter-marker',
            html: `<div style="
                background: ${markerColor};
                border: 3px solid #fff;
                border-radius: 50%;
                width: 30px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 16px;
                box-shadow: 0 2px 5px rgba(0,0,0,0.3);
                cursor: pointer;
            ">🏠</div>`,
            iconSize: [30, 30],
            iconAnchor: [15, 15],
            popupAnchor: [0, -15]
        });

        const marker = L.marker(shelter.coords, { icon: customIcon });

        marker.shelterData = {
            ...shelter,
            available,
            capacity,
            phone,
            services,
            statusText,
            statusType,
            statusClass
        };

        const popupContent = `
            <div class="popup-content">
                <strong>${shelter.name}</strong><br><br>
                <strong>Address:</strong> ${shelter.address}<br>
                <strong>Phone:</strong> <a href="tel:${phone}">${phone}</a><br>
                <strong>Capacity:</strong> ${capacity} beds<br>
                <strong>Available Beds:</strong> <span class="${statusClass}">${available} (${statusText})</span><br>
                <strong>Services:</strong> ${services.join(', ')}
            </div>
        `;

        marker.bindPopup(popupContent);

        if (activeFilters.has(statusType)) {
            marker.addTo(map);
        }

        allMarkers.push(marker);
    });
}