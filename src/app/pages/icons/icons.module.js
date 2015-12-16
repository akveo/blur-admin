/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.icons', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('icons', {
          url: '/icons',
          templateUrl: 'app/pages/icons/icons.html',
          controller: 'IconsPageCtrl'
        });
  }

})();
