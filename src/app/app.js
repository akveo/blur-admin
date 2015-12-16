'use strict';

var blurAdminApp = angular.module('BlurAdmin', [
  'ui.sortable',
  'ui.router',
  'ngTouch',
  'BlurAdmin.theme',
  'BlurAdmin.pages',
  'toastr',
  'smart-table',
  'ui.slimscroll'
]).config(['$urlRouterProvider', function ($urlRouterProvider) {
  $urlRouterProvider.otherwise('/dashboard');
}]);