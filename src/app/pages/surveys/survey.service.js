/**
 * @author ayoub
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.surveys')
    .factory('SurveyService',SurveyService);

  /** @ngInject */
  function SurveyService($http, $q, appConfig) {
    var apiBaseUrl = appConfig.apiBaseUrl
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
      $http.get(endpoint + "/" + id)
       .success(function(data) { 
          deferred.resolve(data);
       }).error(function(msg, code) {
          deferred.reject(msg);
       });

     return deferred.promise;


      return $http.get(endpoint + "/" + id);
    }

    function create(survey) {
      return $http.post(endpoint, survey);
    }

    function send(survey) {
      return $http.get(endpoint + "/" + survey.id + "/send");
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
      remove:remove,
      send:send
    }
  }
})();
