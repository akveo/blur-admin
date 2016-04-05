/**
 * @author k.danovsky
 * created on 12.01.2016
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.ui', [
    'BlurAdmin.pages.ui.typography',
    'BlurAdmin.pages.ui.buttons',
    'BlurAdmin.pages.ui.icons',
    'BlurAdmin.pages.ui.modals',
    'BlurAdmin.pages.ui.grid',
    'BlurAdmin.pages.ui.alerts',
    'BlurAdmin.pages.ui.progressBars',
    'BlurAdmin.pages.ui.notifications',
    'BlurAdmin.pages.ui.tabs',
    'BlurAdmin.pages.ui.slider',
    'BlurAdmin.pages.ui.panels',
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('ui', {
          url: '/ui',
          template : '<ui-view></ui-view>',
          abstract: true,
          title: 'UI Features',
          sidebarMeta: {
            icon: 'ion-android-laptop',
            order: 200,
          },
        });
  }

})();
