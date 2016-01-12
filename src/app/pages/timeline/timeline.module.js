/**
 * @author a.demeshko
 * created on 1/12/16
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.timeline', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('timeline', {
        url: '/timeline',
        templateUrl: 'app/pages/timeline/timeline.html',
          title: 'Timeline',
          sidebarMeta: {
            icon: 'ion-ios-pulse',
            order: 650,
          },
      });
  }
})();