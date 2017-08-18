/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.surveys', [
    'BlurAdmin.pages.surveys.create',
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('surveys', {
          url: '/surveys',
          template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
          title: 'Surveys',
          sidebarMeta: {
          	icon: 'ion-gear-a',
            order: 1500,
          },
        }).state('surveys.create', {
          url: '/create',
          templateUrl: 'app/pages/surveys/create/create.html',
          controller: "CreateTabCtrl",
          title: 'Create a Survey',
          sidebarMeta: {
            order: 0,
          },
        });
  }

})();
