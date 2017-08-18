/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.surveys.create', [])
      .directive('tagInput', tagInput);

  function tagInput() {
    return {
      restrict: 'A',
      link: function( $scope, elem, attr) {
        $(elem).tagsinput({
          tagClass:  'label label-' + attr.tagInput
        });
      }
    };
  }

})();
