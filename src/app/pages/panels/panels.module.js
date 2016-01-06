/**
 * @author v.lugovsky
 * created on 23.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.panels', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('panels', {
          url: '/panels',
          templateUrl: 'app/pages/panels/panels.html',
          controller: 'NotificationsPageCtrl'
        });
  }

})();
