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
            } else {
                window.alert(
                    "Please choose a location in New Zealand as searched location not supported."
                );
            }
        }
    );
}