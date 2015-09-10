'use strict';

blurAdminApp.directive('backTop', function () {
  return {
    restrict: 'E',
    controller: [function () {
      $('#backTop').backTop({
        'position': 200,
        'speed': 500
      });
    }],
    templateUrl: '/app/components/backTop/backTop.html'
  };
});
