'use strict';

var blurAdminApp = angular.module('BlurAdmin', [
  'ui.sortable',
  'ngRoute',
  'ngTouch',
  'BlurAdmin.theme',
  'BlurAdmin.dashboard',
  'BlurAdmin.buttonsPage',
  'BlurAdmin.chartsPage',
  'BlurAdmin.formInputsPage',
  'BlurAdmin.formLayoutsPage',
  'BlurAdmin.iconsPage',
  'BlurAdmin.mapsPage',
  'BlurAdmin.modalsPage',
  'BlurAdmin.profilePage',
  'BlurAdmin.tablesPage',
  'BlurAdmin.typographyPage',
  'toastr',
  'smart-table',
  'ui.slimscroll'
]).config(['$routeProvider', function ($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/dashboard'});
}]);