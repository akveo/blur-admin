'use strict';

angular.module('BlurAdmin.dashboard', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/dashboard', {
        templateUrl: 'app/pages/dashboard/dashboard.html',
        controller: 'DashboardCtrl'
      });
    }])
    .controller('DashboardCtrl', ['$scope', function ($scope) {

      $scope.widgetBlocks = [
        {
          widgets: [
            [
              {
                title: 'Users by Country',
                url: 'app/pages/dashboard/widgets/amChartMap/amChartMap.html'
              },
              {
                title: 'Revenue',
                url: 'app/pages/dashboard/widgets/amChart/amChart.html'
              },
              {
                title: 'My Calendar',
                url: 'app/pages/dashboard/widgets/calendar/calendar.html'
              }
            ],
            [
              {
                title: 'Acquisition Channels',
                url: 'app/pages/dashboard/widgets/chart/chart.html'
              },
              {
                title: 'Timeline',
                url: 'app/pages/dashboard/widgets/timeline/timeline.html'
              },
              {
                title: 'ToDo List',
                url: 'app/pages/dashboard/widgets/todo/todo.html'
              }
            ]
          ]
        }
      ];
    }]);