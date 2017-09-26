(function () {
  'use strict';

  angular.module('BlurAdmin.pages.surveys.list')
      .controller('list', list);

  /** @ngInject */
  function list( SurveyService, AnswerService, $scope, $rootScope, $log, $state, toastr, baConfig) {
    var vm = this;
    $rootScope.$state = $state;

    function loadSurveys() {
      SurveyService
        .list()
        .then(function (data){
					vm.surveys = data;
          getSurveyCompletion();
					$log.info("Got the survey data",data);
        }, function (error){
          $log.error(error);
        });
    }

    function goToCreate() {
      $log.info("Go to create");
      $state.go('surveys.create');
    }

    function editSurvey(id){
      $log.info("Edit");
      $state.go('surveys.edit', {'survey_id': id})
    }; 

    function removeSurvey(id){
      if (confirm("Are you sure?"))
           {
            $log.info("Remove");
            SurveyService
                .remove(id)
                .then(
                  function (data){
                    console.log('Survey deleted', data);
                    $("tr#"+id).slideUp();
                    toastr.info('The survey was deleted successfuly :)', 'Surveys', {
                      "autoDismiss": true,
                      "positionClass": "toast-bottom-right",
                      "type": "success",
                      "timeOut": "5000",
                      "extendedTimeOut": "2000"
                    })
                  },
                  function (error){
                    toastr.error('There were an error deleting the survey', 'Surveys', {
                      "autoDismiss": true,
                      "positionClass": "toast-bottom-right",
                      "type": "error",
                      "timeOut": "5000",
                      "extendedTimeOut": "2000"
                    })
                  }
                );
            }
    }; 

    function getSurveyCompletion() {
      angular.forEach(vm.surveys, function(survey, key) {
        var totalMembers = 0
        var totalAnswers = survey.answers.length
        var totalQuestions = survey.elements.length
        var completion = 0

        angular.forEach(survey.list, function(list, key) {
            totalMembers = totalMembers + list.members.length
          });

        totalQuestions = survey.type == "s_360" ? totalQuestions * totalMembers : totalQuestions;

        completion = (((totalAnswers) / (totalMembers * totalQuestions))*100).toFixed(0)

        survey.completion = completion;
        //console.log('totalAnswers / TOTAL', totalAnswers, totalMembers * totalQuestions);

      });

      //console.log('getSurveyCompletion', vm.surveys);
    }

    function analyzeSurvey(survey) {
      var params = {"survey":survey.id}
      AnswerService
        .analyze(params)
        .then(function (data){
          vm.analysis = data;
          vm.activeSurvey = survey;
          $log.info("Got answers analysis",data);
        }, function (error){
          $log.error(error);
        });
    }

    function activate(){
			vm.surveys = [];
      vm.activeSurvey = {};
      vm.goToCreate = goToCreate;
      vm.analyzeSurvey = analyzeSurvey;
      vm.editSurvey = editSurvey;
      vm.removeSurvey = removeSurvey;

      var layoutColors = baConfig.colors;
      vm.doughnutOptions = {
        elements: {
          arc: {
            borderWidth: 0
          }
        },
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            fontColor: layoutColors.defaultText
          }
        }
      };

      loadSurveys();
    }

    activate();

  }

})();
