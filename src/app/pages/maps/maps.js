'use strict';

angular.module('BlurAdmin.mapsPage', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/maps/gmap', {
        templateUrl: 'app/pages/maps/maps.html',
        controller: 'gmapPageCtrl'
      });
      $routeProvider.when('/maps/leaflet', {
        templateUrl: 'app/pages/maps/maps.html',
        controller: 'leafletPageCtrl'
      });
      $routeProvider.when('/maps/bubble', {
        templateUrl: 'app/pages/maps/maps.html',
        controller: 'mapBubblePageCtrl'
      });
      $routeProvider.when('/maps/line', {
        templateUrl: 'app/pages/maps/maps.html',
        controller: 'mapLinePageCtrl'
      });
    }])
    .controller('gmapPageCtrl', ['$scope', function ($scope) {
      $scope.widgetBlocks = [
        {
          widgets: [
            [
              {
                title: 'Google Maps',
                url: 'app/pages/maps/widgets/google-maps/google-maps.html',
                panelClass: 'viewport100'
              }
            ]
          ]
        }
      ];
    }])
    .controller('leafletPageCtrl', ['$scope', function ($scope) {
      $scope.widgetBlocks = [
        {
          widgets: [
            [
              {
                title: 'Leaflet',
                url: 'app/pages/maps/widgets/leaflet/leaflet.html',
                panelClass: 'viewport100'
              }
            ]
          ]
        }
      ];
    }])
    .controller('mapBubblePageCtrl', ['$scope', function ($scope) {
      $scope.widgetBlocks = [
        {
          widgets: [
            [
              {
                title: 'Map with Bubbles',
                url: 'app/pages/maps/widgets/map-bubbles/map-bubbles.html',
                panelClass: 'viewport100'
              }
            ]
          ]
        }
      ];
    }])
    .controller('mapLinePageCtrl', ['$scope', function ($scope) {
      $scope.widgetBlocks = [
        {
          widgets: [
            [
              {
                title: 'Map with Lines',
                url: 'app/pages/maps/widgets/map-lines/map-lines.html',
                panelClass: 'viewport100'
              }
            ]
          ]
        }
      ];
    }]);