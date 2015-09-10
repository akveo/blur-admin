'use strict';

blurAdminApp.directive('tagInput', [function() {
  return {
    restrict: 'A',
    link: function( $scope, elem, attr) {
      $(elem).tagsinput({
        tagClass:  'label label-' + attr.tagInput
      });
    }
  };
}]);