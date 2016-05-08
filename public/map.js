var currentLat
var currentLong

function initMap() {
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
