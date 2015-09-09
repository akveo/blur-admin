'use strict';

angular.module('BlurAdmin.tablesPage', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/tables', {
        templateUrl: '/app/pages/tables/tables.html',
        controller: 'tablesPageCtrl'
      });
    }])
    .controller('tablesPageCtrl', ['$scope', function ($scope) {
      $scope.widgetBlocks = [
        {
          widgets: [
            [
              {
                title: "Basic Table",
                url: "/app/pages/tables/widgets/basicTable.html"
              }
            ]
          ]
        },
        {
          widgets: [
            [
              {
                title: "Striped Rows",
                url: "/app/pages/tables/widgets/stripedRows.html"
              },
              {
                title: "Bordered table",
                url: "/app/pages/tables/widgets/borderedTable.html"
              }
            ],
            [
              {
                title: "Hover rows",
                url: "/app/pages/tables/widgets/hoverRows.html"
              },
              {
                title: "Condensed table",
                url: "/app/pages/tables/widgets/condensedTable.html"
              }
            ]
          ]
        }
      ];
    }]);