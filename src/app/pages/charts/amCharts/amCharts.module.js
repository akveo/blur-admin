/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.charts.amCharts', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('charts.amCharts', {
          url: '/amCharts',
          templateUrl: 'app/pages/charts/amCharts/charts.html',
          title: 'amCharts',
          sidebarMeta: {
            order: 0,
          },
        });
  }

})();
