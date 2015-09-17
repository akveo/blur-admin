'use strict';

angular.module('BlurAdmin.typographyPage', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/typography', {
        templateUrl: 'app/pages/typography/typography.html',
        controller: 'typographyPageCtrl'
      });
    }])
    .controller('typographyPageCtrl', [function () {

    }]);