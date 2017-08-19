/**
 * @author a.demeshko
 * created on 28.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.teams.members')
    .controller('MembersListCtrl', MembersListCtrl);

  /** @ngInject */
  function MembersListCtrl($stateParams,  mailMessages) {
    var vm = this;
    console.log($stateParams.label);
    vm.messages = mailMessages.getMessagesByLabel($stateParams.label);
    vm.label = $stateParams.label;
  }

})();
