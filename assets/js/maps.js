let map;

let markers = [];

const NEW_ZEALAND_BOUNDS = {
    north: -34.36,
    south: -47.35,
    west: 166.28,
    east: -175.81,
};
const AUCKLAND = {
    lat: -37.06,
    lng: 174.58
};

let geocoder;

function initialize() {
    // Map created to New Zealand restricted bounds  
    map = new google.maps.Map(document.getElementById("map"), {
        center: AUCKLAND,
        restriction: {
            latLngBounds: NEW_ZEALAND_BOUNDS,
            strictBounds: false,
        },
        zoom: 7,
    });

    geocoder = new google.maps.Geocoder();
}


// integrating search input to the search buttons by hard coding the search buttons (searchAddress) to google maps place types
// https://developers.google.com/maps/documentation/places/web-service/supported_types

let searchAddress;

let searchResults = document.getElementById("mapResults");
let resultsList = document.getElementById("places");

let tourist_attractionBtn = document.getElementById("find_tourist_attraction");
let travel_agencyBtn = document.getElementById("find_travel_agency");
let lodgingBtn = document.getElementById('find_lodging');
let museumBtn = document.getElementById('find_museum');
let car_rentalBtn = document.getElementById('find_car_rental');
let restaurantBtn = document.getElementById('find_restaurant');
let cafeBtn = document.getElementById('find_cafe');
let convenience_storeBtn = document.getElementById('find_convenience_store');

let loadMoreBtn = document.getElementById("more");


tourist_attractionBtn.addEventListener("click", function () {
    searchAddress = "tourist_attraction";
    searchResults.style.display = 'block';
    resultsList.innerHTML = '';
});
travel_agencyBtn.addEventListener("click", function () {
    searchAddress = "travel_agency";
    searchResults.style.display = 'block';
    resultsList.innerHTML = '';
});
lodgingBtn.addEventListener('click', function () {
    searchAddress = 'lodging';
    searchResults.style.display = 'block';
    resultsList.innerHTML = '';
});
museumBtn.addEventListener('click', function () {
    searchAddress = 'museum';
    searchResults.style.display = 'block';
    resultsList.innerHTML = '';
});

car_rentalBtn.addEventListener('click', function () {
    searchAddress = 'car_rental';
    searchResults.style.display = 'block';
    resultsList.innerHTML = '';
});

restaurantBtn.addEventListener('click', function () {
    searchAddress = 'restaurant';
    searchResults.style.display = 'block';
    resultsList.innerHTML = '';
});
cafeBtn.addEventListener('click', function () {
    searchAddress = 'cafe';
    searchResults.style.display = 'block';
    resultsList.innerHTML = '';
});
convenience_storeBtn.addEventListener('click', function () {
    searchAddress = 'convenience_store';
    searchResults.style.display = 'block';
    resultsList.innerHTML = '';
});


// credit : Given to Google APIs code reused and customised, 
// see the link (https://developers.google.com/maps/documentation/javascript/examples/geocoding-component-restriction#maps_geocoding_component_restriction-javascript)

function codeAddressSearch() {

    // variable addressLocationSearch takes value entered by the user in the input field
    var addressLocationSearch = document.getElementById("mapAddressSearch").value;

    // component restriction applied to geocoding service request which restricts the results to a New Zealand
    geocoder.geocode({
            componentRestrictions: {
                country: "NZ",
                locality: addressLocationSearch,
            },
        },
        (results, status) => {
            if (status === "OK") {
                map.setCenter(results[0].geometry.location);
                new google.maps.Marker({
                    map,
                    position: results[0].geometry.location,
                });

                // Credit: Inspiration taken from stackoverflow, and customised, see link below
                // https://stackoverflow.com/questions/26071099/google-maps-api-geocode-search-nearby

                // Merging and customising 
                // Geocoding and Place Search Pagination (https://developers.google.com/maps/documentation/javascript/examples/place-search-pagination)


                // Credit: Inspiration taken from stackoverflow to create separate request object so that the type property can be hard coded,
                // and user can be presented with the selected search options through the search buttons
                const request = {
                    location: results[0].geometry.location,
                    radius: "500",
                    type: [searchAddress]
                };

                // Create the places service.
                const service = new google.maps.places.PlacesService(map);
                let getNextPage;
                const moreButton = document.getElementById("more");

                moreButton.onclick = function () {
                    moreButton.disabled = true;

                    if (getNextPage) {
                        getNextPage();
                    }
                };


                // Perform a nearby search.
                service.nearbySearch(
                    request,
                    (results, status, pagination) => {
                        if (status !== "OK" || !results) return;
                        addPlaces(results, map);
                        moreButton.disabled = !pagination || !pagination.hasNextPage;

                        if (pagination && pagination.hasNextPage) {

                            loadMoreBtn.classList.remove("d-none");

                            getNextPage = () => {
                                // Note: nextPage will call the same handler function as the initial call
                                pagination.nextPage();
                            };
                        } else {
                            loadMoreBtn.classList.add("d-none");
                        }
                    }
                );

            } else {
                window.alert(
                    "Please choose a location in New Zealand as searched location not supported."
                );
            }
        }
    );
}


// Credit:
// https://developers.google.com/maps/documentation/javascript/examples/marker-remove#maps_marker_remove-javascript
// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
    for (let i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
    markers = [];
}


function addPlaces(places, map) {
    map.setZoom(16);
    const placesList = document.getElementById("places");

    clearMarkers();

    for (const place of places) {
        if (place.geometry && place.geometry.location) {
            const image = {
                url: place.icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25),
            };

            const marker = new google.maps.Marker({
                map,
                icon: image,
                title: place.name,
                position: place.geometry.location,
            });

            markers.push(marker);

            const li = document.createElement("li");
            li.textContent = place.name;
            placesList.appendChild(li);
            li.addEventListener("click", () => {
                map.setCenter(place.geometry.location);
            });

            // created links for google result that to be pushed to the document using JS 
            let addressLocationSearch = document.getElementById("mapAddressSearch").value;
            let placesLinksArea = document.createElement("span");
            let placesLinksUrlAddress = document.createElement("a");
            let placesNames = place.name;
            placesLinksArea.appendChild(placesLinksUrlAddress);
            li.appendChild(placesLinksArea);

            placesLinksArea.setAttribute("style", "float: right");
            placesLinksUrlAddress.setAttribute("href", "https://www.google.co.nz/search?q=" + placesNames + "&near=" + addressLocationSearch);
            placesLinksUrlAddress.setAttribute("target", "_blank");
            placesLinksUrlAddress.innerHTML = "Click link";

        }
    }
}