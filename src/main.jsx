import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "leaflet/dist/leaflet.css"
import * as L from 'leaflet';
import "leaflet.markercluster";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// initialize the map
const map = L.map('map').setView([12.8797, 121.7740], 5); // Centered on the Philippines

// add a tile layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const luzonIcon = L.divIcon({
  className: "custom-marker luzon-marker",
  html: "●",
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30]
});

const visayasIcon = L.divIcon({
  className: "custom-marker visayas-marker",
  html: "●",
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30]
});

const mindanaoIcon = L.divIcon({
  className: "custom-marker mindanao-marker",
  html: "●",
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30]
});

// add a marker to the map
// =========================
// LUZON MARKERS
// =========================


const luzonCluster = L.markerClusterGroup({
  iconCreateFunction: createColoredCluster("green")
});

luzonCluster.addLayer(
  L.marker([17.4739, 121.3542], { icon: luzonIcon })
    .bindPopup("<b>Kalinga</b><br>Luzon")
);

luzonCluster.addLayer(
  L.marker([16.8331, 121.1710], { icon: luzonIcon })
    .bindPopup("<b>Ifugao</b><br>Luzon")
);

luzonCluster.addLayer(
  L.marker([17.3513, 121.1719], { icon: luzonIcon })
    .bindPopup("<b>Cordillera Administrative Region</b><br>Luzon")
);


// =========================
// VISAYAS CLUSTER
// =========================

const visayasCluster = L.markerClusterGroup({
  iconCreateFunction: createColoredCluster("blue")
});

visayasCluster.addLayer(
  L.marker([10.3157, 123.8854], { icon: visayasIcon })
    .bindPopup("<b>Cebu</b><br>Visayas")
);

visayasCluster.addLayer(
  L.marker([11.8166, 122.0942], { icon: visayasIcon })
    .bindPopup("<b>Aklan</b><br>Visayas")
);

visayasCluster.addLayer(
  L.marker([10.7202, 122.5621], { icon: visayasIcon })
    .bindPopup("<b>Iloilo</b><br>Visayas")
);


// =========================
// MINDANAO CLUSTER
// =========================

const mindanaoCluster = L.markerClusterGroup({
  iconCreateFunction: createColoredCluster("orange")
});

mindanaoCluster.addLayer(
  L.marker([6.9214, 122.0790], { icon: mindanaoIcon })
    .bindPopup("<b>Zamboanga</b><br>Mindanao")
);

mindanaoCluster.addLayer(
  L.marker([5.9749, 120.9970], { icon: mindanaoIcon })
    .bindPopup("<b>Sulu</b><br>Mindanao")
);

mindanaoCluster.addLayer(
  L.marker([7.8232, 124.4198], { icon: mindanaoIcon })
    .bindPopup("<b>Lanao del Sur</b><br>Mindanao")
);


// =========================
// ADD ALL 3 CLUSTERS TO MAP
// =========================

map.addLayer(luzonCluster);
map.addLayer(visayasCluster);
map.addLayer(mindanaoCluster);

function createColoredCluster(color) {
  return function (cluster) {
    return L.divIcon({
      html: `<div class="cluster-marker" style="background-color: ${color};">
               ${cluster.getChildCount()}
             </div>`,
      className: "custom-cluster",
      iconSize: L.point(40, 40)
    });
  };
}