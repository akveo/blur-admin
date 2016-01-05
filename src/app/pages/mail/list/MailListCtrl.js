/**
 * @author a.demeshko
 * created on 28.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.mail')
    .controller('MailListCtrl', MailListCtrl);

  /** @ngInject */
  function MailListCtrl($scope, $state, $stateParams,  mailMessages) {

    $scope.messages = mailMessages.getMessagesByLabel($stateParams.label);
    $scope.$parent.currentTabLabel = $stateParams.label;
    $scope.selectMail = function (mail) {
      $state.go('mail.detail', {
        id: mail.id,
        back: $stateParams.label
      })
    };

  }

})();
