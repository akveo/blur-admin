(function () {
  'use strict';

  angular.module('BlurAdmin.theme')
      .directive('trackWidth', trackWidth);

  /** @ngInject */
  function trackWidth() {
    return {
      scope: {
        trackWidth: '=',
        minWidth: '=',
      },
      link: function (scope, element) {
        scope.trackWidth = $(element).width() < scope.minWidth;
        scope.prevTrackWidth = scope.trackWidth;

        $(window).resize(function() {
          var trackWidth = $(element).width() < scope.minWidth;
          if (trackWidth !== scope.prevTrackWidth) {
            scope.$apply(function() {
              scope.trackWidth = trackWidth;
            });
          }
          scope.prevTrackWidth = trackWidth;
        });
      }
    };
  }

})();