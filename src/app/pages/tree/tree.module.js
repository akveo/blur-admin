/**
 * @author a.demeshko
 * created on 12.21.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.tree', []).config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('tree', {
        url: '/tree',
        templateUrl: 'app/pages/tree/tree.html'
      });
  }

})();
