/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.tables', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('tables', {
        url: '/tables',
        template : '<ui-view></ui-view>',
        abstract: true,
        controller: 'TablesPageCtrl'
      }).state('tables.basic', {
        url: '/basic',
        templateUrl: 'app/pages/tables/basic/tables.html'
      }).state('tables.smart', {
        url: '/smart',
        templateUrl: 'app/pages/tables/smart/tables.html'
      });
      $urlRouterProvider.when('/tables','/tables/basic');
  }

})();
