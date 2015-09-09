'use strict';

angular.module('BlurAdmin.modalsPage', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/modals', {
        templateUrl: '/app/pages/modals/modals.html',
        controller: 'modalsPageCtrl'
      });
    }])
    .controller('modalsPageCtrl', ['$scope', function ($scope) {

      $scope.widgetBlocks = [
        {
          widgets: [
            [
              {
                title: "Modals",
                url: "/app/pages/modals/widgets/modals.html"
              }
            ]
          ]
        },
        {
          widgets: [
            [
              {
                title: "Message Modals",
                url: "/app/pages/modals/widgets/message-modals.html"
              }
            ],
            [
              {
                title: "Notifications",
                url: "/app/pages/modals/widgets/notifications/notifications.html"
              }
            ]
          ]
        }
      ];
    }]);