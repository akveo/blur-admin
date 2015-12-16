/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.mail')
      .directive('blurEmail', blurEmail);

  /** @ngInject */
  function blurEmail() {
    return {
      restrict: 'EA',
      controller: 'MailCtrl',
      templateUrl: 'app/pages/mail/blurEmail.html'
    };
  }

})();
