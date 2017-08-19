/**
 * @author a.demeshko
 * created on 28.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.teams.members')
    .controller('MemberDetailCtrl', MemberDetailCtrl);

  /** @ngInject */
  function MemberDetailCtrl($stateParams, mailMessages) {
    var vm = this;
    vm.mail = mailMessages.getMessageById($stateParams.id);
    vm.label = $stateParams.label;
  }

})();
