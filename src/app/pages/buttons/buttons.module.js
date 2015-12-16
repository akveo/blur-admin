/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.buttons', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('buttons', {
          url: '/buttons',
          templateUrl: 'app/pages/buttons/buttons.html',
          controller: 'ButtonPageCtrl'
        });
  }

})();
