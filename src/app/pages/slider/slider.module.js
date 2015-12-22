/**
 * @author a.demeshko
 * created on 12/22/15
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.slider', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('slider', {
        url: '/slider',
        templateUrl: 'app/pages/slider/slider.html'
      });
  }

})();
