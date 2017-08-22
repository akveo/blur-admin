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
          console.log(vm.surveys);
    console.log(vm.survey);
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
      loadSurveys();
      
      
    }

    activate();
    

    
  }

})(); 
