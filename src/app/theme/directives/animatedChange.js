/**
 * Change top "Daily Downloads", "Active Users" values with animation effect
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme')
      .directive('animatedChange', animatedChange);

  /** @ngInject */
  function animatedChange($timeout) {
    return {
      link: function (scope, element) {
        $timeout(function () {
          var newValue = element.attr('new-value');
          var oldvalue = parseInt(element.html());

          function changeValue(val) {
            $timeout(function () {
              element.html(val);
            }, 30);
          }

          if (newValue > oldvalue) {
            for (var i = oldvalue; i <= newValue; i++) {
              changeValue(i);
            }
          } else {
            for (var j = oldvalue; j >= newValue; j--) {
              changeValue(j);
            }
          }
          $timeout(function () {
            element.next().find('i').addClass('show-arr');
          }, 500);
        }, 3500);
      }
    };
  }

})();