/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
  'use strict';

  angular.module('BlurAdmin.pages.form', ['ui.select', 'ngSanitize'])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('main.form', {
        url: '/form',
        template: '<ui-view autoscroll="true" autoscroll-body-top></ui-view>',
        abstract: true,
        title: 'Form Elements',
        sidebarMeta: {
          icon: 'ion-compose',
          order: 250,
        },
        authenticate: true
      })
      .state('main.form.inputs', {
        url: '/inputs',
        templateUrl: 'app/pages/form/inputs/inputs.html',
        title: 'Form Inputs',
        sidebarMeta: {
          order: 0,
        },
        authenticate: true
      })
      .state('main.form.layouts', {
        url: '/layouts',
        templateUrl: 'app/pages/form/layouts/layouts.html',
        title: 'Form Layouts',
        sidebarMeta: {
          order: 100,
        },
        authenticate: true
      })
      .state('main.form.wizard', {
        url: '/wizard',
        templateUrl: 'app/pages/form/wizard/wizard.html',
        controller: 'WizardCtrl',
        controllerAs: 'vm',
        title: 'Form Wizard',
        sidebarMeta: {
          order: 200,
        },
        authenticate: true
      });
  }
})();