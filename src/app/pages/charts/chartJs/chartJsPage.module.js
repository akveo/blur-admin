/**
 * @author a.demeshko
 * created on 12/16/15
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.chartJsPage', ['ngRoute']).config(chartJsPageConfig);

  /** @ngInject */
  function chartJsPageConfig($routeProvider) {
    $routeProvider.when('/chartJs', {
      templateUrl: 'app/pages/charts/chartJs/chartJs.html'
    });
  }

})();