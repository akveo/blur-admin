/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.buttons')
      .controller('ButtonPageCtrl', ButtonPageCtrl);

  /** @ngInject */
  function ButtonPageCtrl($scope) {
    $scope.progressFunction = function() {
      return $timeout(function() {}, 3000);
    };
  }

})();
