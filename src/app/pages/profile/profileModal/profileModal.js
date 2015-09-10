'use strict';

blurAdminApp.directive('profileModal', [function () {
  return {
    restrict: 'EA',
    replace: true,
    link: function (scope, elem, attr) {
    },
    templateUrl: '/app/pages/profile/profileModal/profileModal.html'
  };
}]);