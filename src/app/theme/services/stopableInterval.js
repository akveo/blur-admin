/**
 * @author a.demeshko
 * created on 12/21/15
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme')
    .service('stopableInterval', stopableInterval);

  /** @ngInject */
  function stopableInterval($window) {
    return {
      start: function (interval, calback, time) {
        function startInterval() {
          return interval(calback, time);
        }

        var i = startInterval();

        angular.element($window).bind('focus', function () {
          if (i) interval.cancel(i);
          i = startInterval();
        });

        angular.element($window).bind('blur', function () {
          if (i) interval.cancel(i);
        });
      }
    }
  }

})();