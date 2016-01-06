/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages', [
    'ui.router',

    'BlurAdmin.pages.alerts',
    'BlurAdmin.pages.buttons',
    'BlurAdmin.pages.charts',
    'BlurAdmin.pages.dashboard',
    'BlurAdmin.pages.form',
    'BlurAdmin.pages.grid',
    'BlurAdmin.pages.icons',
    'BlurAdmin.pages.mail',
    'BlurAdmin.pages.maps',
    'BlurAdmin.pages.modals',
    'BlurAdmin.pages.notifications',
    'BlurAdmin.pages.panels',
    'BlurAdmin.pages.profile',
    'BlurAdmin.pages.progressBars',
    'BlurAdmin.pages.slider',
    'BlurAdmin.pages.tables',
    'BlurAdmin.pages.tree',
    'BlurAdmin.pages.tabs',
    'BlurAdmin.pages.typography'
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise('/dashboard');
  }

})();
