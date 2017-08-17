/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.surveys', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('surveys', {
          url: '/surveys',
          templateUrl: 'app/pages/surveys/surveys.html',
          controller: 'SurveysPageCtrl',
          title: 'Surveys',
          sidebarMeta: {
            order: 1500,
          },
        });
  }

})();
