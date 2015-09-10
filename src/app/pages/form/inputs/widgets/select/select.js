'use strict';

blurAdminApp.directive('selectpicker', [function() {
  return {
    restrict: 'A',
    link: function( $scope, elem) {
      $(elem).selectpicker();
    }
  };
}]);