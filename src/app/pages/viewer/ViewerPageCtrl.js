/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.viewer')
    .controller('ViewerPageCtrl', ViewerPageCtrl);

  /** @ngInject */
  function ViewerPageCtrl($scope, $stateParams, SurveyService, AnswerService, $log, $filter) {
    //alert('test');

    var vm = this;

    function loadSurvey(id) {
      SurveyService
        .get(id)
        .then(function (data){
          vm.survey = data;
          $log.info("Got the survey data",data);

          var alreadyAnswered = checkIfAlreadyAnswered();
          var isMemberIlligible = checkIfIlligible();
          //building forms elements
          
          if (!alreadyAnswered && isMemberIlligible) {
            angular.forEach(vm.survey.list, function(list, key) {  
              console.log("list",list);
              angular.forEach(list.members, function(member, key) {
                //console.log("member",member); 
                vm.forms[member.id] = {};
                vm.forms[member.id].elements = vm.survey.elements;
                vm.forms[member.id].question = {};
                if(member.id != vm.activeMemberId) {
                  member.last = false;
                  vm.members.push(member);

                  
                } else 
                  vm.askedMember = member;
                
                //.push(k + ': ' + member);
                });
              
              });
              vm.askedMember.last = true;
              vm.members.push(vm.askedMember);
              //Thnak You message
              vm.members.push({"id": "none", "name" : ": )"});
          } else {
             $log.info("Already answered");
             if (alreadyAnswered)
                vm.alreadyAnswered = true;
              else
                vm.isMemberIlligible = false;
          }
            
          
            

        }, function (error){
          vm.error = true;
          $log.error(error);
        });
    }

    function checkIfAlreadyAnswered() {
      console.log("checkIfAlreadyAnswered", vm.survey.respondents.length, vm.survey.respondents.indexOf(vm.activeMemberId))
      if (vm.survey.respondents.length > 0 && vm.survey.respondents.indexOf(vm.activeMemberId) !== -1)
        return true
      return false
    }

    function checkIfIlligible() {
      var element = []
      angular.forEach(vm.survey.list, function(list, key) {
        if (element.length == 0)
          element = $filter('filter')(list.members, {'id':vm.activeMemberId})
      })
      //console.log("checkIfIlligible", element, element.length)
      if (element.length > 0)
        return true;

      return false; 
    }



    function activate(){
      vm.forms = [];
      vm.survey = {};
      vm.members = [];
      vm.alreadyAnswered = false;
      vm.isMemberIlligible = true;
      vm.error = false;
      vm.askedMember = {};
      vm.formData = {}
      if ($stateParams.member_id && $stateParams.survey_id) {
        vm.activeMemberId = $stateParams.member_id;
        loadSurvey($stateParams.survey_id);
      } else
        vm.error = true;

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

    vm.validateForm = function(form){
      vm.forms[vm.activeMemberId].$submitted = true;
      if (!form.$valid  ) {
        //alert("Please fill in all required fields!");
        console.log('error submitting', form);
        return false;
      }else{
        console.log('submitting', vm.formData);
        vm.sendAnswers(vm.formData)
      }
      console.log('submit');
    };

    vm.sendAnswers = function(formData) {
      
                console.log("formData", formData);
                var counter = 0;

                angular.forEach(formData, function(val, key) {

                    if(key.indexOf("_") == -1) {
                      var elementId = key;
                      console.log("elementId", elementId);
                      //console.log("val", val);
                      var commentKey = key + "_comment";
                      var submittedKey = key + "_submitted";
                      //console.log("key", key);
                      console.log("commentKey", commentKey);
                      console.log("submittedKey", submittedKey);
                      var element = $filter('filter')(vm.survey.elements, {'_id':elementId}) 
                      var incognito = (vm.survey.type == 's_incognito') ? true : false
                      var answer = {
                        "value" : val.value,
                        "comment" : (val.comment) ? val.comment : '',
                        "survey" : vm.survey.id,
                        "incognito" : incognito,
                        "asked" : vm.askedMember,
                        "question": element[0]
                      }
                      AnswerService
                          .create(answer)
                          .then(
                              function (data){
                                  counter++;
                                  console.log("answer.create, counter, elements",data, counter, vm.survey.elements.length);
                                  //trigger this when all the answers are sent
                                  if(counter == vm.survey.elements.length) {
                                      var respondents = vm.survey.respondents;
                                      respondents.push(vm.askedMember.id);
                                      vm.survey.respondents = respondents;
                                      SurveyService
                                          .update(vm.survey)
                                          .then(
                                              function (data){
                                                  console.log("updated survey",data);
                                                  vm.forms[vm.activeMemberId].$processed = true;
                                              },
                                              function (error){
                                                   console.log("Error updating the survey");
                                              }
                                            );
                                  }
                                  
                                },
                              function (error){
                                   console.log("Error creating the answer");
                                 }
                             );
                      
                    }
                })
    };

    activate();
    

    
  }

})(); 
