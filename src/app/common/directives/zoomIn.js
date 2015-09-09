/**
 * Animated load block
 */

'use strict';

app.directive('zoomIn', ['$timeout', function ($timeout) {
  return {
    restrict: 'A',
    link: function ($scope, elem) {
      var delay = 1000;

      if (pageLoaded) {
        delay = 100;
      }

      $timeout(function () {
        elem.removeClass("invisible");
        elem.addClass("animated zoomIn");
      }, delay);
    }
  };
}]);