import { LACountyWildfireData } from '../data/wildfireData.js';

export function addEvacuationCenterMarkers(map, evacuationCenterLayerGroup) {
    LACountyWildfireData.evacuationCenters.forEach(center => {
        const icon = L.divIcon({
            html: `<div style="background: #fd7e14; border-radius: 50%; width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">🚪</div>`,
            iconSize: [28, 28]
        });

        const popup = `
            <strong>${center.name}</strong><br>
            Address: ${center.address}<br>
            Capacity: ${center.capacity}<br>
            Type: ${center.type}
        `;

        const marker = L.marker(center.location, { icon }).bindPopup(popup);
        evacuationCenterLayerGroup.addLayer(marker);
    });

}