/**
 * @author ayoub
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.teams')
    .factory('AnswerService', AnswerService);

  /** @ngInject */
  function AnswerService($http, $q) {
    var apiBaseUrl = "http://localhost:9000"
    var endpoint = apiBaseUrl + "/answers";

    function list(params) {
      params = params || {};

			var deferred = $q.defer();
    	$http.get(endpoint, { params : params})
       .success(function(data) { 
          deferred.resolve(data);
       }).error(function(msg, code) {
          deferred.reject(msg);
       });

     return deferred.promise;


      return $http.get(endpoint, params);
    }

    function create(answer) {
      return $http.post(endpoint, answer);
    }

    function get(id) {
      return $http.get(endpoint + "/" + id);
    }

    function update(answer) {
     return $http.put(endpoint + "/"+answer.id, answer);
    }

    function remove(id) {
     return $http.delete(endpoint + "/" + id);
    }

    function analyze(params) {
      params = params || {};
      endpoint = endpoint + "/analyze"

      var deferred = $q.defer();
      $http.get(endpoint, { params : params})
       .success(function(data) { 
          deferred.resolve(data);
       }).error(function(msg, code) {
          deferred.reject(msg);
       });

     return deferred.promise;


      return $http.get(endpoint, params);
    }

    return {
      list:list,
      create:create,
      update:update,
      get:get,
      remove:remove,
      analyze:analyze
    }
  }
})();
