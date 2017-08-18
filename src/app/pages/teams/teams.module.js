/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.teams', [
    'BlurAdmin.pages.teams.members',
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('teams', {
          url: '/teams',
          template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
          title: 'Teams',
          sidebarMeta: {
          	icon: 'ion-gear-a',
            order: 1500,
          },
        }).state('teams.members', {
          url: '/create',
          templateUrl: 'app/pages/teams/members/members.html',
          controller: "MembersTabCtrl",
          title: 'Manage Members',
          sidebarMeta: {
            order: 0,
          },
        });
  }

})();
