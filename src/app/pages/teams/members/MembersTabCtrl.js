/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.teams.members')
      .controller('MembersTabCtrl', MembersTabCtrl);

  /** @ngInject */
  function MembersTabCtrl(composeModal, membersList) {

    var vm = this;
    vm.navigationCollapsed = true;
    vm.showCompose = function(id){
      if (id != '')
        vm.message = membersList.getMemberById(id);
      else 
        vm.message = {};
      composeModal.open({
        message : vm.message
      })
    };

    vm.tabs = membersList.getTabs();
  }

})();
