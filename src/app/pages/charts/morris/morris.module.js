/**
 * @author a.demeshko
 * created on 12/18/15
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.charts.morris', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('charts.morris', {
          url: '/morris',
          templateUrl: 'app/pages/charts/morris/morris.html',
          title: 'Morris',
          sidebarMeta: {
            order: 300,
          }
        });
  }

})();