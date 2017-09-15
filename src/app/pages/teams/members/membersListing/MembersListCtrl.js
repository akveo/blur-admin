/**
 * @author a.demeshko
 * created on 28.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.teams.members')
    .controller('MembersListCtrl', MembersListCtrl);

  /** @ngInject */
  function MembersListCtrl($scope, $stateParams,MemberService, $log,  membersList) {
    var vm = this;
    //vm.members = ($stateParams.label == "listing") ? membersList.getAllMessages() : membersList.getMembersByLabel($stateParams.label);

    function loadMembers() {
      var params = ($stateParams.label && $stateParams.label != "listing") ? {"labels":$stateParams.label} : {}
      console.log("params",params);
      MemberService
        .list(params)
        .then(function (data){
          vm.members = data;
          $log.info("Got the members data",data);
        }, function (error){
          $log.error(error);
        });
    }

    

    function activate(){
      vm.members = [];
      loadMembers();
      
      
    }

    activate();


  }

})();
