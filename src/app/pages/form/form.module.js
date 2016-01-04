/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.form', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('form-inputs', {
          url: '/form-inputs',
          templateUrl: 'app/pages/form/inputs/inputs.html'
        })
        .state('form-layouts', {
          url: '/form-layouts',
          templateUrl: 'app/pages/form/layouts/layouts.html'
        })
        .state('form-wizard',
        {
          url: '/form-wizard',
          templateUrl: 'app/pages/form/wizard/wizardPage.html',
          controller: 'WizardCtrl',
          controllerAs: 'vm'
        })
  }

})();
