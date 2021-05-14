let map;
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

tourist_attractionBtn.addEventListener("click", function () {
    searchAddress = "tourist_attraction";
});
travel_agencyBtn.addEventListener("click", function () {
    searchAddress = "travel_agency";
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
                            getNextPage = () => {
                                // Note: nextPage will call the same handler function as the initial call
                                pagination.nextPage();
                            };
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

function addPlaces(places, map) {
    const placesList = document.getElementById("places");

    for (const place of places) {
        if (place.geometry && place.geometry.location) {
            const image = {
                url: place.icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25),
            };
            new google.maps.Marker({
                map,
                icon: image,
                title: place.name,
                position: place.geometry.location,
            });
            const li = document.createElement("li");
            li.textContent = place.name;
            placesList.appendChild(li);
            li.addEventListener("click", () => {
                map.setCenter(place.geometry.location);
            });
        }
    }
}