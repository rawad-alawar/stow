var currentLat
var currentLong
var map



function initMap() {
   map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
    geolocator(geocodeLatLng)
}

function geocodeLatLng() {
  var geocoder = new google.maps.Geocoder
  var latlng = {lat: parseFloat(currentLat), lng: parseFloat(currentLong)};
  geocoder.geocode({'location': latlng}, function(results, status) {
    console.log("running")

    if (status === google.maps.GeocoderStatus.OK) {
      console.log(results)
      console.log(results[0].address_components[0].long_name)
      console.log("status ok")

    };
  })
}

function geolocator(callback){/// start of geolocator
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        currentLat = position.coords.latitude
        currentLong = position.coords.longitude
        document.querySelector('#lat').value = currentLat
        document.querySelector("#lng").value = currentLong
        callback()
      });
    }
  }
