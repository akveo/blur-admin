'use strict';

blurAdminApp.directive('widgets', function () {
  return {
    restrict: 'EA',
    scope: {
      ngModel: "="
    },
    templateUrl: '/app/components/widgets/widgets.html',
    replace: true,
    link: function (scope, element, attrs, ctrls) {
    }
  };
});