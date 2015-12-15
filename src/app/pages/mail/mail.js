'use strict';

angular.module('BlurAdmin.mail', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/mail', {
      templateUrl: 'app/pages/mail/mail.html',
      controller: 'MailCtrl'
    });
    $routeProvider.when('/mail/:label', {
      templateUrl: 'app/pages/mail/mail.html',
      controller: 'MailCtrl'
    });
    $routeProvider.when('/mail/:label/:id', {
      templateUrl: 'app/pages/mail/mail.html',
      controller: 'MailCtrl'
    });
  }])
  .controller('MailCtrl', ['$scope', function ($scope) {
  }]);