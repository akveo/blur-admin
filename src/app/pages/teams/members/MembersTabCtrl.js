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
      if (id != ''){
        vm.member = membersList.getMemberById(id);
        //vm.actualIndex = membersList.getIndexById(id);
      } 
      else 
        vm.member = {};

      composeModal.open({
        member : vm.member,
        //actualIndex : vm.actualIndex
      })
    };

    vm.tabs = membersList.getTabs();
  }

})();
