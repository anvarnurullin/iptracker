import L from 'leaflet';

export function addTileLayer(map){
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYW52YXJudXJ1bGxpbiIsImEiOiJja3h5dHVtbnEyZmRpMnZwYzVuZXR0ZTZtIn0.Ir6NBDDzX20fkvdMLws1UQ', {
    attribution: 'Coded by <a href="https://github.com/anvarnurullin">Anvar Nurullin</a>.',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
}).addTo(map);
}