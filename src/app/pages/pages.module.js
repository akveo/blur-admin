/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages', [
    'ui.router',

    'BlurAdmin.pages.dashboard',
    'BlurAdmin.pages.main',
    'BlurAdmin.pages.surveys',
    'BlurAdmin.pages.teams',
    'BlurAdmin.pages.viewer',
    'BlurAdmin.pages.authSignIn',
    'BlurAdmin.pages.authSignUp',
    'BlurAdmin.pages.services',
    'BlurAdmin.pages.config',
    'BlurAdmin.pages.profile',
  ]).config(routeConfig)
  .factory('authInterceptor', authInterceptor);

  /** @ngInject */
  function routeConfig($urlRouterProvider, baSidebarServiceProvider, $httpProvider) {
    $urlRouterProvider.otherwise('/authSignIn');

    $httpProvider.interceptors.push('authInterceptor');

    baSidebarServiceProvider.addStaticItem({
      title: 'Pages',
      icon: 'ion-document',
      subMenu: [{
        title: 'Sign In',
        fixedHref: 'auth.html',
        blank: true
      }, {
        title: 'Sign Up',
        fixedHref: 'reg.html',
        blank: true
      }, {
        title: 'User Profile',
        stateRef: 'profile'
      }, {
        title: '404 Page',
        fixedHref: '404.html',
        blank: true
      }]
    });
  }


  function authInterceptor($rootScope, $q, localStorage) {
  console.log('authInterceptor')
    return {
        request: function (config) {
            config.headers = config.headers || {};
            
            if (config.data !== undefined && config.url.indexOf('auth') != -1) {
                    config.data.access_token = 'AlAoWLue33D1sBrKNHOohXdvYNh2Je9i'; //TODO : get this from the config
            }
            else if (localStorage.getObject('token')) {

              if (config.data === undefined) {
                  //Do nothing if data is not originally supplied from the calling method
              }
              else {
                  config.data.access_token = localStorage.getObject('token');
                  console.log()
              }

              if (config.method === 'GET') {
                  /*if (config.params === undefined) {
                      config.params = {};
                  }
                  config.params.test = localStorage.getObject('token');*/
              }
                //config.headers.Authorization = 'Bearer ' + $window.sessionStorage.token;
            }
            return config;
        },
        responseError: function (rejection) {
            if (rejection.status === 401) {
                console.log("not authorised");
                localStorage.clear();
            }
            return $q.reject(rejection);
        }
    };
};

})();
