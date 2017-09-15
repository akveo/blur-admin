/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.teams.members', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state('teams.members', {
          url: '/members',
          //abstract: true,
          templateUrl: 'app/pages/teams/members/members.html',
          controller: "MembersTabCtrl",
          controllerAs: "tabCtrl",
          title: 'Members',
          sidebarMeta: {
            order: 0,
          },
        }).state('teams.members.label', {
          url: '/:label',
          templateUrl: 'app/pages/teams/members/membersListing/membersList.html',
          title: 'Members',
          controller: "MembersListCtrl",
          controllerAs: "listCtrl"
        }).state('teams.members.detail', {
          url: '/:id',
          templateUrl: 'app/pages/teams/members/detail/memberDetail.html',
          title: 'Detail',
          controller: "MemberDetailCtrl",
          controllerAs: "detailCtrl"
        });
    $urlRouterProvider.when('/teams/members','/teams/members/listing');
  }

})();
