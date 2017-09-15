(function () {
  'use strict';

  angular.module('BlurAdmin.pages.surveys.list')
      .controller('list', list);

  /** @ngInject */
  function list( SurveyService, $scope, $rootScope, $log, $state, toastr) {
    var vm = this;
    $rootScope.$state = $state;

    function loadSurveys() {
      SurveyService
        .list()
        .then(function (data){
					vm.surveys = data;
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

    function activate(){
			vm.surveys = [];
      vm.goToCreate = goToCreate;
      vm.editSurvey = editSurvey;
      vm.removeSurvey = removeSurvey;

      loadSurveys();
    }

    activate();

  }

})();
