/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.maps')
      .controller('GmapPageCtrl', GmapPageCtrl);

  /** @ngInject */
  function GmapPageCtrl($timeout) {
    function initialize() {
      var mapCanvas = document.getElementById('google-maps');
      var mapOptions = {
        center: new google.maps.LatLng(44.5403, -78.5463),
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      var map = new google.maps.Map(mapCanvas, mapOptions);
    }

    $timeout(function(){
      initialize();
    }, 100);
  }

})();
