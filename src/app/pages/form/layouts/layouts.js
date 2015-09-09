'use strict';

angular.module('BlurAdmin.formLayoutsPage', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/form-layouts', {
        templateUrl: '/app/pages/form/layouts/layouts.html',
        controller: 'formLayoutsPageCtrl'
      });
    }])
    .controller('formLayoutsPageCtrl', ['$scope', function ($scope) {
      $scope.widgetBlocks = [
        {
          widgets: [
            [
              {
                title: 'Inline Form',
                url: "/app/pages/form/layouts/widgets/inlineForm.html"
              }
            ]
          ]
        },
        {
          widgets: [
            [
              {
                title: "Basic Form",
                url: "/app/pages/form/layouts/widgets/basicForm.html"
              },
              {
                title: "Block Form",
                url: "/app/pages/form/layouts/widgets/blockForm.html"
              }
            ],
            [
              {
                title: "Horizontal Form",
                url: "/app/pages/form/layouts/widgets/horizontalForm.html"
              },
              {
                title: "Form Without Labels",
                url: "/app/pages/form/layouts/widgets/formWithoutLabels.html"
              }
            ]
          ]
        }
      ];
    }]);