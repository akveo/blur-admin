/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
  'use strict';

  angular.module('BlurAdmin.pages.ui.typography', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('main.ui.typography', {
        url: '/typography',
        templateUrl: 'app/pages/ui/typography/typography.html',
        title: 'Typography',
        sidebarMeta: {
          order: 0,
        },
        authenticate: true
      });
  }

})();