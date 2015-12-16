/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.tables', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('tables', {
          url: '/tables',
          templateUrl: 'app/pages/tables/tables.html',
          controller: 'TablesPageCtrl'
        });
  }

})();
