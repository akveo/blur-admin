/**
 * Animated load block
 */

'use strict';

blurAdminApp.directive('zoomIn', ['$timeout', '$rootScope', function ($timeout, $rootScope) {
  return {
    restrict: 'A',
    link: function ($scope, elem) {
      var delay = 1000;

      if ($rootScope.$pageLoaded) {
        delay = 100;
      }

      $timeout(function () {
        elem.removeClass('invisible');
        elem.addClass('animated zoomIn');
      }, delay);
    }
  };
}]);