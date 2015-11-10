'use strict';

angular.module('BlurAdmin.dashboard', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/dashboard', {
        templateUrl: 'app/pages/dashboard/dashboard.html',
        controller: 'DashboardCtrl'
      });
    }])
    .controller('DashboardCtrl', ['$scope', function ($scope) {
    }]);