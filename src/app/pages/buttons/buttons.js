'use strict';

angular.module('BlurAdmin.buttonsPage', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/buttons', {
        templateUrl: 'app/pages/buttons/buttons.html',
        controller: 'buttonsPageCtrl'
      });
    }])
    .controller('buttonsPageCtrl', ['$scope', function ($scope) {
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
        }
      ];
    }]);