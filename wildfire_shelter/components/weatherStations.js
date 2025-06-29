import { LACountyWildfireData } from '../data/wildfireData.js';

export function addWeatherStationMarkers(map, weatherStationLayerGroup) {
    LACountyWildfireData.weatherStations.forEach((station) => {
        const icon = L.divIcon({
            html: `<div style="background: #6f42c1; border-radius: 50%; width: 26px; height: 26px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">⛅</div>`,
            iconSize: [26, 26]
        });

        const popup = `
            <strong>${station.name}</strong><br>
            Elevation: ${station.elevation} ft<br>
            Parameters: ${station.parameters.join(', ')}
        `;

        const marker = L.marker(station.location, { icon }).bindPopup(popup);
        weatherStationLayerGroup.addLayer(marker);
    });

  
}