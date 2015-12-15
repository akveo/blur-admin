'use strict';

angular.module('BlurAdmin.gridPage', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/grid', {
      templateUrl: 'app/pages/grid/grid.html',
      controller: 'gridPageCtrl'
    });
  }])
  .controller('gridPageCtrl', ['$scope', function ($scope) {
    $scope.widgetBlocks = [
      {
        widgets: [
          [
            {
              url: 'app/pages/grid/widgets/baseGrid.html'
            }
          ]
        ]
      }
    ];
  }]);