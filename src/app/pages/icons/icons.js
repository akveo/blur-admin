'use strict';

angular.module('BlurAdmin.iconsPage', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/icons', {
        templateUrl: '/app/pages/icons/icons.html',
        controller: 'iconsPageCtrl'
      });
    }])
    .controller('iconsPageCtrl', ['$scope', function ($scope) {
      $scope.widgetBlocks = [
        {
          widgets: [
            [
              {
                title: "Kameleon SVG Icons",
                url: "/app/pages/icons/widgets/kameleon.html"
              },
              {
                title: "Socicon",
                url: "/app/pages/icons/widgets/socicon.html"
              }
            ],
            [
              {
                title: "Icons With Rounded Background",
                url: "/app/pages/icons/widgets/kameleonRounded.html"
              },
              {
                title: "ionicons",
                url: "/app/pages/icons/widgets/ionicons.html"
              },
              {
                title: "Font Awesome Icons",
                url: "/app/pages/icons/widgets/fontAwesomeIcons.html"
              }
            ]
          ]
        }
      ];
    }]);