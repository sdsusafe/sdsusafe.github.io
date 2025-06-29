export function createHospitalMarkers(map, hospitals, hospitalLayerGroup) {
    hospitals.forEach((hospital) => {
        const customIcon = L.divIcon({
            className: 'custom-hospital-marker',
            html: `<div style="background: #17a2b8; border: 3px solid #fff; border-radius: 50%; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; font-size: 16px; box-shadow: 0 2px 5px rgba(0,0,0,0.3); cursor: pointer;">🏥</div>`,
            iconSize: [30, 30],
            iconAnchor: [15, 15],
            popupAnchor: [0, -15]
        });

        const marker = L.marker(hospital.coords, { icon: customIcon });

        const popupContent = `
            <div class="popup-content">
                <strong>${hospital.name}</strong><br><br>
                <strong>Address:</strong> ${hospital.address}<br>
                <strong>Phone:</strong> <a href="tel:${hospital.phone}">${hospital.phone}</a><br>
                <strong>Capacity:</strong> ${hospital.capacity} beds<br>
                <strong>Status:</strong> ${hospital.available}<br>
                <strong>Services:</strong> ${hospital.services.join(', ')}
            </div>
        `;

        marker.bindPopup(popupContent);
        hospitalLayerGroup.addLayer(marker);
    });


}
