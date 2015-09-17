'use strict';

angular.module('BlurAdmin.chartsPage', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/charts', {
        templateUrl: 'app/pages/charts/charts.html',
        controller: 'chartsPageCtrl'
      });
    }])
    .controller('chartsPageCtrl', ['$scope', function ($scope) {
      $scope.widgetBlocks = [
        {
          widgets: [
            [
              {
                title: 'Bar Chart',
                url: 'app/pages/charts/widgets/barChart/barChart.html'
              },
              {
                title: 'Line Chart',
                url: 'app/pages/charts/widgets/lineChart/lineChart.html'
              }
            ],
            [
              {
                title: 'Area Chart',
                url: 'app/pages/charts/widgets/areaChart/areaChart.html'
              },
              {
                title: 'Funnel Chart',
                url: 'app/pages/charts/widgets/funnelChart/funnelChart.html'
              }
            ]
          ]
        },
        {
          widgets: [
            [
              {
                title: 'Pie Chart',
                url: 'app/pages/charts/widgets/pieChart/pieChart.html'
              }
            ]
          ]
        }
      ];
    }]);