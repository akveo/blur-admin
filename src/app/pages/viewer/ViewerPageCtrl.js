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

    function loadSurveys() {
      SurveyService
        .list()
        .then(function (data){
          vm.surveys = data;
          $log.info("Got the survey data",data);
          vm.survey = getSurvey();
          //building forms elements
          vm.forms = [];
          angular.forEach(vm.survey.elements, function(element, key) {
             
             angular.forEach(vm.survey.list.members, function(member, key) {
              if(member._id != vm.activeMemberId) {
                vm.forms[member._id] = {};
                //vm.forms[member._id].$element_id = false;
                /*var form = [];
                form[element._id] = [];
                vm.forms.push(form);
                var input = [];
                input[element._id] = false;
                vm.forms[member._id].push(input);*/
              }
                
                //.push(k + ': ' + member);
              });
          });
          console.log(vm.survey);
          console.log(vm.forms);
        }, function (error){
          $log.error(error);
        });
    }

    function getSurvey() {
        $log.info("getSurvey",$stateParams.survey_id);
        return vm.surveys.filter(function(s){
          return s.id == $stateParams.survey_id;
        })[0];
    }

    function activate(){
      vm.surveys = [];
      vm.survey = [];
      vm.activeMemberId = $stateParams.member_id;
      loadSurveys();
      console.log(vm.activeMemberId)
      
      
    }

    vm.test = function(form){
    //$scope.submitted = true;
    alert("Angular is Awesome!!!");
    console.log('submit', form);
  };

    activate();
    

    
  }

})(); 
