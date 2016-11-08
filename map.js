var map;
function initMap() {
map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: 41.9214, lng: -87.6513},
  zoom: 15
});
}