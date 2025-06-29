import { LACountyWildfireData } from '../data/wildfireData.js';

export function addCommunityMarkers(map, communityLayerGroup) {
    LACountyWildfireData.highRiskCommunities.forEach((community) => {
        const icon = L.divIcon({
            className: 'custom-community-marker',
            html: `<div style="background: #ff6600; border-radius: 50%; width: 26px; height: 26px; display: flex; align-items: center; justify-content: center; font-weight: bold; color: white; box-shadow: 0 2px 5px rgba(0,0,0,0.3);">🔥</div>`,
            iconSize: [26, 26]
        });

        const marker = L.marker(community.location, { icon })
            .bindPopup(LACountyWildfireData.utils.formatCommunityPopup(community));

        communityLayerGroup.addLayer(marker);
    });

   
}