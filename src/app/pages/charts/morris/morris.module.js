/**
 * @author a.demeshko
 * created on 12/18/15
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.charts.morris', [])
    .config(routeConfig).config(function(){
      Morris.Donut.prototype.defaults.backgroundColor = 'transparent';
      Morris.Donut.prototype.defaults.labelColor = 'rgba(255,255,255,0.8)';
      Morris.Grid.prototype.gridDefaults.gridLineColor = 'rgba(255,255,255,0.8)';
      Morris.Grid.prototype.gridDefaults.gridTextColor = 'rgba(255,255,255,0.8)';
    });

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