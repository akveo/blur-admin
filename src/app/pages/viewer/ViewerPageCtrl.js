/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.viewer')
    .controller('ViewerPageCtrl', ViewerPageCtrl);

  /** @ngInject */
  function ViewerPageCtrl($scope, $stateParams, SurveyService, $log) {
    //alert('test');

    var vm = this;

    function loadSurvey(id) {
      SurveyService
        .get(id)
        .then(function (data){
          vm.survey = data;
          $log.info("Got the survey data",data);
          //building forms elements
          
          //angular.forEach(vm.survey.elements, function(element, key) { 
          //  console.log("element",element);
            angular.forEach(vm.survey.list, function(list, key) {  
              console.log("list",list);
              angular.forEach(list.members, function(member, key) {
                //console.log("member",member); 
                vm.forms[member.id] = {};
                vm.forms[member.id].elements = vm.survey.elements;
                vm.forms[member.id].question = {};
                if(member.id != vm.activeMemberId) {
                  vm.members.push(member);
                  
                } else
                  vm.askedMember = member;
                
                //.push(k + ': ' + member);
                });
              vm.members.push(vm.askedMember);
              //Thnak You message
              vm.members.push({"id": "none", "name" : ": )"});
              });
         // });
          /*console.log("loadSurvey:vm.survey",vm.survey);
          console.log("loadSurvey:vm.survey.list.members",vm.survey.list.members);
          console.log("loadSurvey:vm.forms",vm.forms);*/
        }, function (error){
          $log.error(error);
        });
    }



    function activate(){
      vm.forms = [];
      vm.survey = {};
      vm.members = [];
      vm.askedMember = {};
      vm.activeMemberId = $stateParams.member_id;
      loadSurvey($stateParams.survey_id);
      console.log(vm.activeMemberId)
      
      
    }

    vm.getInitials = function(string) {
      var names = string.split(' '),
          initials = names[0].substring(0, 1).toUpperCase();
      
      if (names.length > 1) {
          initials += names[names.length - 1].substring(0, 1).toUpperCase();
      }
      //console.log("getInitials", string, initials)
      return initials;
    };

    vm.test = function(form){
    //$scope.submitted = true;
    alert("Angular is Awesome!!!");
    console.log('submit', form);
  };

    activate();
    

    
  }

})(); 
