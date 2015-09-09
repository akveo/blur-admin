'use strict';

app.directive('selectpicker', [function() {
  return {
    restrict: 'A',
    link: function( $scope, elem) {
      $(elem).selectpicker();
    }
  };
}]);