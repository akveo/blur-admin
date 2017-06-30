/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
  'use strict';

  angular.module('BlurAdmin.pages.maps', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('main.maps', {
        url: '/maps',
        templateUrl: 'app/pages/maps/maps.html',
        abstract: true,
        title: 'Maps',
        sidebarMeta: {
          icon: 'ion-ios-location-outline',
          order: 500,
        },
        authenticate: true
      })
      .state('main.maps.gmap', {
        url: '/gmap',
        templateUrl: 'app/pages/maps/google-maps/google-maps.html',
        controller: 'GmapPageCtrl',
        title: 'Google Maps',
        sidebarMeta: {
          order: 0,
        },
        authenticate: true
      })
      .state('main.maps.leaflet', {
        url: '/leaflet',
        templateUrl: 'app/pages/maps/leaflet/leaflet.html',
        controller: 'LeafletPageCtrl',
        title: 'Leaflet Maps',
        sidebarMeta: {
          order: 100,
        },
        authenticate: true
      })
      .state('main.maps.bubble', {
        url: '/bubble',
        templateUrl: 'app/pages/maps/map-bubbles/map-bubbles.html',
        controller: 'MapBubblePageCtrl',
        title: 'Bubble Maps',
        sidebarMeta: {
          order: 200,
        },
        authenticate: true
      })
      .state('main.maps.line', {
        url: '/line',
        templateUrl: 'app/pages/maps/map-lines/map-lines.html',
        controller: 'MapLinesPageCtrl',
        title: 'Line Maps',
        sidebarMeta: {
          order: 300,
        },
        authenticate: true
      });
  }

})();