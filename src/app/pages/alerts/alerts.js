'use strict';

angular.module('BlurAdmin.alertsPage', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/alerts', {
      templateUrl: 'app/pages/alerts/alerts.html',
      controller: 'alertsPageCtrl'
    });
  }])
  .controller('alertsPageCtrl', ['$scope', function ($scope) {
    $scope.widgetBlocks = [
      {
        widgets: [
          [
            {
              url: 'app/pages/alerts/widgets/default.html'
            },
            {
              url: 'app/pages/alerts/widgets/closeable.html'
            }
          ],
          [
            {
              url: 'app/pages/alerts/widgets/link.html'
            },
            {
              url: 'app/pages/alerts/widgets/composite.html'
            }
          ]
        ]
      }
    ];
  }]);