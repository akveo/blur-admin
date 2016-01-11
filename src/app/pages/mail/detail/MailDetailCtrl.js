/**
 * @author a.demeshko
 * created on 28.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.mail')
    .controller('MailDetailCtrl', MailDetailCtrl);

  /** @ngInject */
  function MailDetailCtrl($state, $stateParams, mailMessages) {
    var vm = this;
    vm.mail = mailMessages.getMessageById($stateParams.id);
    vm.back = function(){
      $state.go('mail.label', {
        label: 'inbox'
      })
    }
  }

})();
