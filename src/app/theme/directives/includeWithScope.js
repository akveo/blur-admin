/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme')
      .directive('includeWithScope', includeWithScope);

  /** @ngInject */
  function includeWithScope() {
    return {
      restrict: 'AE',
      templateUrl: function(ele, attrs) {
        return attrs.includeWithScope;
      }
    };
  }

})();
