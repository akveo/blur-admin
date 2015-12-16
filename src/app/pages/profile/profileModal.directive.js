/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.profile')
      .service('profileModal', profileModal);

  /** @ngInject */
  function profileModal() {
    return {
      restrict: 'EA',
      replace: true,
      link: function ($scope) {
        $scope.link = "";
        $scope.bindProfile = function(){
          $scope.link = "";
        };
      },
      templateUrl: 'app/pages/profile/profileModal.html'
    };
  }

})();
