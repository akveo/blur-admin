'use strict';

angular.module('BlurAdmin.formInputsPage', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/form-inputs', {
        templateUrl: '/app/pages/form/inputs/inputs.html',
        controller: 'formInputsPageCtrl'
      });
    }])
    .controller('formInputsPageCtrl', ['$scope', function ($scope) {
      $scope.widgetBlocks = [
        {
          widgets: [
            [
              {
                title: "Standard Fields",
                url: "/app/pages/form/inputs/widgets/standardFields.html"
              },
              {
                title: "Tags Input",
                url: "/app/pages/form/inputs/widgets/tagsInput/tagsInput.html"
              },
              {
                title: "Input Groups",
                url: "/app/pages/form/inputs/widgets/inputGroups.html"
              },
              {
                title: "Checkboxes & Radios",
                url: "/app/pages/form/inputs/widgets/checkboxesRadios.html"
              }
            ],
            [
              {
                title: "Validation States",
                url: "/app/pages/form/inputs/widgets/validationStates.html"
              },
              {
                title: "Selects",
                url: "/app/pages/form/inputs/widgets/select/select.html"
              },
              {
                title: "On/Off Switches",
                url: "/app/pages/form/inputs/widgets/switch/switch.html"
              }
            ]
          ]
        }
      ];
    }]);