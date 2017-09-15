/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.surveys', [
    'BlurAdmin.pages.surveys.create',
    'BlurAdmin.pages.surveys.list',
  ]).config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('surveys', {
          url: '/surveys',
          template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
          title: 'Surveys',
          sidebarMeta: {
          	icon: 'ion-gear-a',
            order: 1000,
          },
        }).state('surveys.create', {
          url: '/create',
          templateUrl: 'app/pages/surveys/create/create.html',
          controller: "CreateTabCtrl",
          title: 'Create new model',
          sidebarMeta: {
            order: 1000,
          },
        }).state('surveys.edit', {
          url: '/edit/:survey_id',
          templateUrl: 'app/pages/surveys/create/create.html',
          controller: "CreateTabCtrl",
          title: 'Edit a survey'
        }).state('surveys.list', {
          url: '/list',
          templateUrl: 'app/pages/surveys/list/list.html',
          controller: "list as vm",
          title: 'My surveys',
          sidebarMeta: {
            order: 2000,
          },
        });
  }

})();
