/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages', [
    'ui.router',

    'BlurAdmin.pages.dashboard',
    'BlurAdmin.pages.ui',
    'BlurAdmin.pages.components',
    'BlurAdmin.pages.form',
    'BlurAdmin.pages.tables',
    'BlurAdmin.pages.charts',
    'BlurAdmin.pages.maps',
    'BlurAdmin.pages.profile',
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($urlRouterProvider, baSidebarServiceProvider) {
    $urlRouterProvider.otherwise('/dashboard');

    baSidebarServiceProvider.addStaticItem({
      name: 'pages',
      title: 'Pages',
      icon: 'ion-document',
      subMenu: [{
        name: 'pages.signIn',
        title: 'Sign In',
        fixedHref: 'auth.html',
        blank: true
      }, {
        name: 'pages.signUp',
        title: 'Sign Up',
        fixedHref: 'reg.html',
        blank: true
      }, {
        name: 'pages.userProfile',
        title: 'User Profile',
        stateRef: 'profile'
      }, {
        name: 'pages.page404',
        title: '404 Page',
        fixedHref: '404.html',
        blank: true
      }]
    });
    baSidebarServiceProvider.addStaticItem({
      name: 'menuLevel1',
      title: 'Menu Level 1',
      icon: 'ion-ios-more',
      subMenu: [{
        name: 'menuLevel1.menuLevel1.1',
        title: 'Menu Level 1.1',
        disabled: true
      }, {
        name: 'menuLevel1.menuLevel1.2',
        title: 'Menu Level 1.2',
        subMenu: [{
          name: 'menuLevel1.menuLevel1.2.1',
          title: 'Menu Level 1.2.1',
          disabled: true
        }]
      }]
    });
  }

})();
