'use strict';

app.controller('leafletCtrl', ["$timeout", function ($timeout) {
  var map = L.map('leaflet-map').setView([51.505, -0.09], 13);

  L.Icon.Default.imagePath = '/release/img';

  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  L.marker([51.5, -0.09]).addTo(map)
      .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
      .openPopup();
}]);