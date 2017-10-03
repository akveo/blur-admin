/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.teams.lists', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state('main.teams.lists', {
          url: '/lists/:id',
          //abstract: true,
          templateUrl: 'app/pages/teams/lists/lists.html',
          controller: "ListsTabCtrl as vm",
          title: 'Lists',
          sidebarMeta: {
            order: 0,
          },
        });
  }

})();
