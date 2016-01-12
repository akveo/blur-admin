/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.progressBars', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('ui.progressBars', {
          url: '/progressBars',
          templateUrl: 'app/pages/progressBars/progressBars.html',
          title: 'Progress Bars',
          sidebarMeta: {
            order: 600,
          },
        });
  }

})();
