var map;
var marker;
var latSpan = document.getElementById("lat");
var lngSpan = document.getElementById("lng");
var infoWindow;
var markers = [];

async function initAutocomplete() {
    try{
        const { Map, InfoWindow } = await google.maps.importLibrary("maps");

    let pos = {
        lat: 24.0923346,
        lng: 32.9001062,
    };

    map = new Map(document.getElementById("map"), {
        zoom: 12,
        mapTypeId: "hybrid",
        center: pos,
        mapId: "أسوان",
        streetViewControl: false,
    });

    const input = document.getElementById("pac-input");
    const searchBox = new google.maps.places.SearchBox(input);

    searchBox.addListener("places_changed", () => {
        const places = searchBox.getPlaces();

        if (places.length === 0) {
            return;
        }

        // Clear old markers
        clearMarkers();

        const bounds = new google.maps.LatLngBounds();

        places.forEach((place) => {
            if (!place.geometry || !place.geometry.location) {
                console.log("Returned place contains no geometry");
                return;
            }

            // Create a marker for each place.
            const newMarker = new google.maps.Marker({
                map: map,
                title: place.name,
                position: place.geometry.location,
                draggable: true,
            });
            newMarker.addListener("dragend", (event) => {
                updateLatAndLng(event.latLng.lat(), event.latLng.lng());
            });
            newMarker.addListener("click", ()=>zoomIn(newMarker,map));

            markers.push(newMarker);

            updateLatAndLng(place.geometry.location.lat(), place.geometry.location.lng());

            if (place.geometry.viewport) {
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
        });

        map.fitBounds(bounds);
    });

    // Get Current Location Button
    const locationButton = document.getElementById("gps-button");

    locationButton.addEventListener("click", getCurrentLocation);

    // Create an InfoWindow
    infoWindow = new InfoWindow();

    // Initialize the marker
    marker = new google.maps.Marker({
        map: map,
        position: pos,
        title: "أسوان",
        draggable: true,
    });
    markers.push(marker);
    marker.addListener("dragend", (event) => {
        updateLatAndLng(event.latLng.lat(), event.latLng.lng());
    });

    marker.addListener("click", ()=>zoomIn(marker,map));
    }
    catch{
        initAutocomplete();
    }
}

function updateLatAndLng(lat, lng) {
    latSpan.value = lat;
    lngSpan.value = lng;
}

function clearMarkers() {
    markers.forEach((marker) => {
        marker.setMap(null);
    });
    markers = [];
}

function getCurrentLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };
                map.setCenter(pos);

                clearMarkers();

                // Create a new marker for the current location
                const newMarker = new google.maps.Marker({
                    map: map,
                    position: pos,
                    draggable: true,
                });

                newMarker.addListener("dragend", (event) => {
                    updateLatAndLng(event.latLng.lat(), event.latLng.lng());
                });
                newMarker.addListener("click", ()=>zoomIn(newMarker,map));

                markers.push(newMarker);

                updateLatAndLng(pos.lat, pos.lng);
            },
            () => {
                handleLocationError(true, infoWindow, map.getCenter());
            }
        );
    } else {
        handleLocationError(false, infoWindow, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
        browserHasGeolocation
            ? "Error: The Geolocation service failed."
            : "Error: Your browser doesn't support geolocation."
    );
    infoWindow.open(map);
}
function zoomIn(markerParam,map) {
console.log("here");
    map.setZoom(17);
    map.setCenter(markerParam.position);

}
window.initAutocomplete = initAutocomplete;