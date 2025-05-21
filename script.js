// script.js - Handles registration, login, and OpenStreetMap integration

document.addEventListener('DOMContentLoaded', () => {
    // Initialize map if element exists
    const mapElement = document.getElementById("map");
    if (mapElement) {
        initMap();
    }

    // No need for button event listeners as they are now regular links in the HTML
});

// Initialize OpenStreetMap
function initMap() {
    try {
        const mapElement = document.getElementById("map");
        if (!mapElement) {
            console.error("Map element not found");
            return;
        }

        // Initialize the map
        const map = L.map('map').setView([41.88956955945126, 2.8747263304806423], 14.25);

        // Add OpenStreetMap tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        // Define locations
        const locations = [
            { lat: 41.89221238560305, lng: 2.8925268418008314, title: "Tomba del soldat desconegut" },
            { lat: 41.896029071868085, lng: 2.897797447850419, title: "Mas Casablanca" },
            { lat: 41.900321394648145, lng: 2.8894787408666844, title: "Hort de la Clara" }
        ];

        // Add markers
        locations.forEach(location => {
            L.marker([location.lat, location.lng])
                .bindPopup(location.title)
                .addTo(map);
        });
    } catch (error) {
        console.error("Error initializing map:", error);
        const mapElement = document.getElementById("map");
        if (mapElement) {
            mapElement.innerHTML = '<div class="map-error">Unable to load map. Please try again later.</div>';
        }
    }
}
