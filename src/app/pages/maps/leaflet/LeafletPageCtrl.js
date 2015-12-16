/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.maps')
      .controller('LeafletPageCtrl', LeafletPageCtrl);

  /** @ngInject */
  function LeafletPageCtrl() {
    var map = L.map('leaflet-map').setView([51.505, -0.09], 13);

    L.Icon.Default.imagePath = 'img';

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([51.5, -0.09]).addTo(map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup();
  }

})();
