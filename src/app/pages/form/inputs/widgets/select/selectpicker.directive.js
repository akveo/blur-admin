/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.form')
      .directive('selectpicker', selectpicker);

  /** @ngInject */
  function selectpicker() {
    return {
      restrict: 'A',
      link: function( $scope, elem) {
        $(elem).selectpicker();
      }
    };
  }
})();