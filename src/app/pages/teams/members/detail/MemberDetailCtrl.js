/**
 * @author a.demeshko
 * created on 28.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.teams.members')
    .controller('MemberDetailCtrl', MemberDetailCtrl);

  /** @ngInject */
  function MemberDetailCtrl($stateParams, MemberService, $log) {
    var vm = this;
    
    function loadMembers() {
      MemberService
        .list()
        .then(function (data){
          vm.members = data;
          $log.info("Got the members data",data);
          vm.member = getMember();
          console.log(vm.member);
        }, function (error){
          $log.error(error);
        });
    }

    function getMember() {
        $log.info("getMember",$stateParams.id);
        return vm.members.filter(function(m){
          return m.id == $stateParams.id;
        })[0];
    }

    function activate(){
      vm.members = [];
      vm.member = [];
      loadMembers();
      
      
    }

    activate();
  }

})();
