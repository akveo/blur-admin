/**
 * @author a.demeshko
 * created on 28.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.mail')
    .controller('MailDetailCtrl', MailDetailCtrl);

  /** @ngInject */
  function MailDetailCtrl($scope, $state,$stateParams, mailMessages) {
    $scope.mail = mailMessages.getMessageById($stateParams.id);
    $scope.back = function(){
      $state.go('mail.label', {
        label: 'inbox'
      })
    }
  }

})();
