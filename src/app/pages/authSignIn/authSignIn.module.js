(function() {
  'use strict';

  angular.module('BlurAdmin.pages.authSignIn', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('authSignIn', {
        url: '/authSignIn',
        templateUrl: 'app/pages/authSignIn/authSignIn.html',
        title: 'My Page',
        controller: 'authSignInCtrl',
        sidebarMeta: {
          order: 800,
        },
        authenticate: false
      })
      .state('logout', {
        url: '/logout',
        //templateUrl: 'app/pages/authSignIn/authSignIn.html',
        controller: 'logoutCtrl',
        authenticate: true
      });

      /*$urlRouterProvider.when('/logout',
          template: '', //A template or templateUrl is required by AngularJS, even if your controller always redirects.
          controller: 'LogoutController'
        );*/
  }

})();
