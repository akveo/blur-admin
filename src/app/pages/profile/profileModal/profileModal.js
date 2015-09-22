'use strict';

blurAdminApp.directive('profileModal', [function () {
  return {
    restrict: 'EA',
    replace: true,
    link: function ($scope) {
      $scope.link = "";
      $scope.bindProfile = function(){
        $scope.link = "";
      };
    },
    templateUrl: 'app/pages/profile/profileModal/profileModal.html'
  };
}]);