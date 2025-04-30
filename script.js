window.addEventListener('load', () => {
    const mapElement = document.getElementById("map");
    if (mapElement) {
        if (typeof google !== 'undefined' && google.maps) {
            initMap();
        } else {
            console.error("Google Maps API is not available.");
        }
    }
});

// script.js - Handles registration, login, and Google Maps integration

document.addEventListener('DOMContentLoaded', () => {
    // Registration button event
    const registerBtn = document.getElementById('registerBtn');
    if (registerBtn) {
        registerBtn.addEventListener('click', () => {
            try {
                const emailOrPhone = prompt("Please enter your email or mobile number to register:");
                if (emailOrPhone) {
                    alert(`Registration successful for: ${emailOrPhone}`);
                    // TODO: Add real registration logic here
                }
            } catch (error) {
                console.error('Error during registration:', error);
            }
        });
    }

    // Login button event
    const loginBtn = document.getElementById('loginBtn');
    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            try {
                const emailOrPhone = prompt("Please enter your email or mobile number to login:");
                if (emailOrPhone) {
                    alert(`Login successful for: ${emailOrPhone}`);
                    // TODO: Add real login logic here
                }
            } catch (error) {
                console.error('Error during login:', error);
            }
        });
    }
});

// Initialize Google Map
function initMap() {
    const mapElement = document.getElementById("map");
    if (!mapElement) {
        console.error("Map element not found");
        return;
    }

    const map = new google.maps.Map(mapElement, {
        center: { lat: 41.88956955945126, lng: 2.8747263304806423 },
        zoom: 14.25,
    });

    const locations = [
        { lat: 41.89221238560305, lng: 2.8925268418008314, title: "Tomba del soldat desconegut" },
        { lat: 41.896029071868085, lng: 2.897797447850419, title: "Mas Casablanca" },
        { lat: 41.900321394648145, lng: 2.8894787408666844, title: "Hort de la Clara" }
    ];

    locations.forEach(location => {
        const marker = new google.maps.Marker({
            position: { lat: location.lat, lng: location.lng },
            map: map,
            title: location.title
        });
    });
}
