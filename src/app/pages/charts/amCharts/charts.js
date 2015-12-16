'use strict';

angular.module('BlurAdmin.amChartsPage', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/amCharts', {
        templateUrl: 'app/pages/charts/amCharts/charts.html',
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
                url: 'app/pages/charts/amCharts/widgets/barChart/barChart.html'
              },
              {
                title: 'Line Chart',
                url: 'app/pages/charts/amCharts/widgets/lineChart/lineChart.html'
              }
            ],
            [
              {
                title: 'Area Chart',
                url: 'app/pages/charts/amCharts/widgets/areaChart/areaChart.html'
              },
              {
                title: 'Funnel Chart',
                url: 'app/pages/charts/amCharts/widgets/funnelChart/funnelChart.html'
              }
            ]
          ]
        },
        {
          widgets: [
            [
              {
                title: 'Pie Chart',
                url: 'app/pages/charts/amCharts/widgets/pieChart/pieChart.html'
              }
            ]
          ]
        }
      ];
    }]);