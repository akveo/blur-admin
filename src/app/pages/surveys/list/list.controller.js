(function () {
  'use strict';

  angular.module('BlurAdmin.pages.surveys.list')
      .controller('list', list);

  /** @ngInject */
  function list( SurveyService, $scope, $log, $state) {
    var vm = this;

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

    function activate(){
			vm.surveys = [];
      vm.goToCreate = goToCreate;

      loadSurveys();
    }

    activate();

  }

})();
