'use strict';

angular.module('BlurAdmin.buttonsPage', ['ngRoute', 'angular-progress-button-styles'])

    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/buttons', {
        templateUrl: 'app/pages/buttons/buttons.html',
        controller: 'buttonsPageCtrl'
      });
    }])
    .controller('buttonsPageCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
      $scope.progressFunction = function() {
        return $timeout(function() {}, 3000);
      };

      $scope.widgetBlocks = [
        {
          widgets: [
            [
              {
                url: 'app/pages/buttons/widgets/buttons.html'
              }
            ]
          ]
        },
        {
          widgets: [
            [
              {
                title: 'Icon Buttons',
                url: 'app/pages/buttons/widgets/iconButtons.html'
              },
              {
                title: 'Large Buttons',
                url: 'app/pages/buttons/widgets/largeButtons.html'
              }
            ],
            [
              {
                title: 'Button Dropdowns',
                url: 'app/pages/buttons/widgets/dropdowns.html'
              },
              {
                title: 'Button Groups',
                url: 'app/pages/buttons/widgets/buttonGroups.html'
              }
            ]
          ]
        },
        {
          widgets: [
            [
              {
                title: 'Progress Buttons',
                url: 'app/pages/buttons/widgets/progressButtons.html'
              }
            ]
          ]
        }
      ];
    }]);