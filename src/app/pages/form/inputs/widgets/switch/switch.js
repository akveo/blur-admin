'use strict';

blurAdminApp.directive('switch', ['$timeout', function ($timeout) {
  return {
    restrict: 'EA',
    replace: true,
    scope: {
      ngModel: "="
    },
    template: '<div class="switch-container {{color}}"><input type="checkbox" ng-model="ngModel"></div>',
    link: function (scope, elem, attr) {
      $timeout(function(){
        scope.color = attr.color;
        $(elem).find('input').bootstrapSwitch({
          size: "small",
          onColor: attr.color
        });
      });
    }
  };
}])

.controller('switchCtrl', ['$scope', function ($scope) {
  $scope.switches = [ true, true, true, true, true, true ];
}]);