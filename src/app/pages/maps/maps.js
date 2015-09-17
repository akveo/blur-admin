'use strict';

angular.module('BlurAdmin.mapsPage', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/maps', {
        templateUrl: 'app/pages/maps/maps.html',
        controller: 'mapsPageCtrl'
      });
    }])
    .controller('mapsPageCtrl', ['$scope', function ($scope) {
      $scope.widgetBlocks = [
        {
          widgets: [
            [
              {
                title: 'Google Maps',
                url: 'app/pages/maps/widgets/google-maps/google-maps.html'
              },
              {
                title: 'Map with Lines',
                url: 'app/pages/maps/widgets/map-lines/map-lines.html'
              }
            ],
            [
              {
                title: 'Map with Bubbles',
                url: 'app/pages/maps/widgets/map-bubbles/map-bubbles.html'
              },
              {
                title: 'Leaflet',
                url: 'app/pages/maps/widgets/leaflet/leaflet.html'
              }
            ]
          ]
        }
      ];
    }]);