/**
 * @author a.demeshko
 * created on 12/16/15
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.charts.chartJs', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('charts.chartJs', {
          url: '/chartJs',
          templateUrl: 'app/pages/charts/chartJs/chartJs.html',
          title: 'Chart.js',
          sidebarMeta: {
            order: 200,
          },
        });
  }

})();