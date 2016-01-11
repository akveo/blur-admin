/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.mail', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider,$urlRouterProvider) {
    $stateProvider
      .state('mail', {
        url: '/mail',
        abstract: true,
        templateUrl: 'app/pages/mail/mail.html',
        controller: "MailTabCtrl",
        controllerAs: "tabCtrl"
      }).state('mail.label', {
        url: '/:label',
        templateUrl: 'app/pages/mail/list/mailList.html',
        controller: "MailListCtrl",
        controllerAs: "listCtrl"
      }).state('mail.detail', {
        url: '/:label/:id',
        templateUrl: 'app/pages/mail/detail/mailDetail.html',
        controller: "MailDetailCtrl",
        controllerAs: "detailCtrl"
      });
      $urlRouterProvider.when('/mail','/mail/inbox');
  }

})();
