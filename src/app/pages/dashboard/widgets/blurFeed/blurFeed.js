'use strict';

blurAdminApp.directive('blurFeed', function () {
  return {
    restrict: 'E',
    controller: ['$scope', function ($scope) {
    }],
    templateUrl: 'app/pages/dashboard/widgets/blurFeed/blurFeed.html'
  };
});

