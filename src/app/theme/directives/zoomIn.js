/**
 * Animated load block
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme')
      .directive('zoomIn', zoomIn);

  /** @ngInject */
  function zoomIn($timeout, $rootScope) {
    return {
      restrict: 'A',
      link: function ($scope, elem) {
        var delay = 1000;

        if ($rootScope.$pageLoaded) {
          delay = 100;
        }

        $timeout(function () {
          elem.removeClass('full-invisible');
          elem.addClass('animated zoomIn');
        }, delay);
      }
    };
  }

})();