/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.viewer', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('viewer', {
          url: '/viewer/:survey_id/:member_id',
          title: 'Viewer',
          templateUrl: 'app/pages/viewer/viewer.html',
          controller: 'ViewerPageCtrl as vm',
          sidebarMeta: {
            icon: 'ion-gear-a',
            order: 1000,
          }
        }); 
  }

})();
