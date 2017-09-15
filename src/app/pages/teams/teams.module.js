/**
 * @author k.danovsky
 * created on 15.01.2016
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.teams', [
    'BlurAdmin.pages.teams.members',
    'BlurAdmin.pages.teams.lists',
    'lr.upload',
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('teams', {
          url: '/teams',
          template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
          abstract: true,
          title: 'Teams',
          sidebarMeta: {
            icon: 'ion-gear-a',
            order: 2000,
          },
        });
  }

})();
