'use strict';

var blurAdminApp = angular.module('BlurAdmin', [
  'ui.sortable',
  'ngRoute',
  'ngTouch',
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
  'BlurAdmin.modalsPage',
  'BlurAdmin.profilePage',
  'BlurAdmin.tablesPage',
  'BlurAdmin.typographyPage',
  'toastr',
  'smart-table',
  'ui.slimscroll'
]).config(['$routeProvider', 'toastrConfig', function ($routeProvider, toastrConfig) {
  $routeProvider.otherwise({redirectTo: '/dashboard'});

  angular.extend(toastrConfig, {
    closeButton: true,
    closeHtml: '<button>&times;</button>',
    timeOut: 5000,
    autoDismiss: false,
    containerId: 'toast-container',
    maxOpened: 0,
    newestOnTop: true,
    positionClass: 'toast-top-right',
    preventDuplicates: false,
    preventOpenDuplicates: false,
    target: 'body'
  });
}]);