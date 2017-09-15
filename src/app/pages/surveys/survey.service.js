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
    var endpoint = apiBaseUrl + "/surveys";

    function list(params) {
      params = params || {};

      var deferred = $q.defer();
      $http.get(endpoint)
       .success(function(data) { 
          deferred.resolve(data);
       }).error(function(msg, code) {
          deferred.reject(msg);
       });

     return deferred.promise;


      return $http.get(endpoint, params);
    }

    function get(id) {

      var deferred = $q.defer();
      $http.get(endpoint)
       .success(function(data) { 
          deferred.resolve(data);
       }).error(function(msg, code) {
          deferred.reject(msg);
       });

     return deferred.promise;


      return $http.get(endpoint, id);
    }

    function create(survey) {
      return $http.post(endpoint, survey);
    }

    function update(survey) {
      return $http.put(endpoint + "/"+survey.id, survey);
    }

    function remove(id) {
     return $http.delete(endpoint + "/"+id);
    }

    return {
      list:list,
      get:get,
      create:create,
      update:update,
      remove:remove
    }
  }
})();
