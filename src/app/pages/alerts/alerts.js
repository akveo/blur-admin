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
              title: 'Basic',
              url: 'app/pages/alerts/widgets/default.html'
            },
            {
              title: 'Dismissible alerts',
              url: 'app/pages/alerts/widgets/closeable.html'
            }
          ],
          [
            {
              title: 'Links in alerts',
              url: 'app/pages/alerts/widgets/link.html'
            },
            {
              title: 'Composite alerts',
              url: 'app/pages/alerts/widgets/composite.html'
            }
          ]
        ]
      }
    ];
  }]);