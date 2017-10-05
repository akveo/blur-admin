/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.teams.members')
      .controller('MembersTabCtrl', MembersTabCtrl);

  /** @ngInject */
  function MembersTabCtrl(composeModal, MemberService, $log, appConfig) {

    var vm = this;
    vm.navigationCollapsed = true;
    vm.showCompose = function(id){
      if (id != ''){
        MemberService
        .get(id)
        .then(function (data){
          vm.member = data.data;
          composeModal.open({
            member : vm.member,
            //actualIndex : vm.actualIndex
          })
          $log.info("Got the member data",data.data);
        }, function (error){
          $log.error(error);
        });

      } 
      else {
        vm.member = {};
        composeModal.open({
            member : vm.member,
            //actualIndex : vm.actualIndex
          })
      }
        
    };

    vm.removeMember = function(id) {
      MemberService
        .remove(id)
        .then(function (data){
          $("tr#m-"+id).slideUp();
        }, function (error){
          $log.error(error);
        });
    }

    vm.selectTab = function (label) {
      
    }; 

    vm.tabs = appConfig.tabs;
  }

})();
