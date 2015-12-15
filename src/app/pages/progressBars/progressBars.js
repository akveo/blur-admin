'use strict';

angular.module('BlurAdmin.progressBarsPage', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/progressBars', {
      templateUrl: 'app/pages/progressBars/progressBars.html',
      controller: 'progressBarsPageCtrl'
    });
  }])
  .controller('progressBarsPageCtrl', ['$scope', function ($scope) {
    $scope.widgetBlocks = [
      {
        widgets: [
          [
            {
              title: "Basic",
              url: 'app/pages/progressBars/widgets/basic.html'
            },
            {
              title: "Striped",
              url: 'app/pages/progressBars/widgets/striped.html'
            }
          ],
          [
            {
              title: "With label",
              url: 'app/pages/progressBars/widgets/label.html'
            },
            {
              title: "Animated",
              url: 'app/pages/progressBars/widgets/animated.html'
            }
          ]
        ]
      }, {
        widgets: [
          [
            {
              title: "Stacked",
              url: 'app/pages/progressBars/widgets/stacked.html'
            }
          ]
        ]
      }
    ];
  }]);

