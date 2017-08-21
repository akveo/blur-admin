/**
 * @author ayoub
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.surveys')
    .factory('SurveyService',SurveyService);

  /** @ngInject */
  function SurveyService($http, $q) {
    var apiBaseUrl = "http://localhost:9000"

    function list() {
      return [];
    }

    function create(survey) {
      var url = apiBaseUrl + "/surveys";

      // Make the API call
      return $http.post(url, survey);
    }

    function edit(survery) {
     console.log("edit jSurvey Opject", survey);
    }

    function remove(survery) {
     console.log("remove Opject", survey);
    }

    return {
      list:list,
      create:create,
      edit:edit,
      remove:remove
    }
  }
})();
