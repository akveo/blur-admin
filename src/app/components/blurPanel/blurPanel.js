'use strict';

blurAdminApp.directive('blurPanel', function () {
  return {
    restrict: 'E',
    transclude: true,
    scope: {
      title: '@'
    },
    controller: ['$scope', function ($scope) {
    }],
    templateUrl: 'app/components/blurPanel/blurPanel.html'
  };
});

