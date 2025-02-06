export function createElements(containerId) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Container #${containerId} not found`);
        return;
    }

    const mapContainer = document.createElement('div');
    mapContainer.id = 'map';
    mapContainer.style.height = '400px';
    mapContainer.style.width = '100%';
    container.appendChild(mapContainer);

    const locationInput = document.createElement('input');
    locationInput.type = 'text';
    locationInput.id = 'locationSearch';
    locationInput.placeholder = 'Enter a city';
    container.appendChild(locationInput);

    const serviceSelect = document.createElement('select');
    serviceSelect.id = 'serviceSelect';
    const services = ["Recycling Center", "Eco Store", "Electric Charging Station"];
    services.forEach(service => {
        let option = document.createElement('option');
        option.value = service;
        option.textContent = service;
        serviceSelect.appendChild(option);
    });
    container.appendChild(serviceSelect);

    const searchButton = document.createElement('button');
    searchButton.id = 'searchButton';
    searchButton.textContent = 'Search';
    container.appendChild(searchButton);

    searchButton.addEventListener('click', searchServices);
    locationInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            searchServices();
        }
    });

    loadGoogleMapsAPI();
}

// Load GoogleMapsAPI // 
function loadGoogleMapsAPI() {
    if (window.google && window.google.maps) {
        initMap();
        return;
    }

    
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBaFprz1OQIV2kjp-bj-DISe-fTn4ZEdIg&libraries=places&callback=initMap&loading=async`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
    }


// Ensure `initMap` is globally accessible
window.initMap = function () {
    const mapElement = document.getElementById('map');
    if (!mapElement) {
        console.error("Map element not found!");
        return;
    }

    map = new google.maps.Map(mapElement, {
        center: { lat: 37.7749, lng: -122.4194 },
        zoom: 12
    });

    service = new google.maps.places.PlacesService(map);
    infowindow = new google.maps.InfoWindow();
};

let map, service, infowindow;

function searchServices() {
    const locationInput = document.getElementById('locationSearch').value;
    const selectedService = document.getElementById('serviceSelect').value;

    if (!locationInput) {
        alert("Please enter a location.");
        return;
    }

    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: locationInput }, (results, status) => {
        if (status === 'OK') {
            const location = results[0].geometry.location;
            if (map) {
                map.setCenter(location);
                findPlaces(location, selectedService);
            } else {
                console.error("Map is not initialized yet.");
            }
        } else {
            alert('Geocode failed: ' + status);
        }
    });
}

function findPlaces(location, query) {
    if (!map || !service) {
        console.error("Google Maps service not initialized.");
        return;
    }

    const request = {
        location: location,
        radius: 5000,
        keyword: query
    };

    service.nearbySearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            results.forEach(place => {
                createMarker(place);
            });
        } else {
            alert("No results found.");
        }
    });
}

function createMarker(place) {
    if (!map) {
        console.error("Map is not initialized.");
        return;
    }

    const marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
    });

    const placeUrl = `https://www.google.com/maps/place/?q=place_id:${place.place_id}`;
    const infoContent = `
        <div style="font-size: 14px;">
            <strong>${place.name}</strong><br>
            ${place.vicinity ? place.vicinity + '<br>' : ''}
            <a href="${placeUrl}" target="_blank" style="color: #007bff; text-decoration: none;">
                View on Google Maps
            </a>
        </div>
    `;

    google.maps.event.addListener(marker, 'click', () => {
        infowindow.setContent(infoContent);
        infowindow.open(map, marker);
    });
}

// Load Google Maps
loadGoogleMapsAPI();
