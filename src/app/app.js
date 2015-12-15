'use strict';

var blurAdminApp = angular.module('BlurAdmin', [
  'ui.sortable',
  'ngRoute',
  'ngTouch',
  'BlurAdmin.theme',
  'BlurAdmin.dashboard',
  'BlurAdmin.mail',
  'BlurAdmin.buttonsPage',
  'BlurAdmin.gridPage',
  'BlurAdmin.chartsPage',
  'BlurAdmin.alertsPage',
  'BlurAdmin.formInputsPage',
  'BlurAdmin.formLayoutsPage',
  'BlurAdmin.iconsPage',
  'BlurAdmin.mapsPage',
  'BlurAdmin.progressBarsPage',
  'BlurAdmin.notificationsPage',
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