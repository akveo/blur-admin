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
    	$http.get(endpoint)
       .success(function(data) { 
          deferred.resolve(data);
       }).error(function(msg, code) {
          deferred.reject(msg);
       });

     return deferred.promise;


      return $http.get(endpoint, params);
    }

    function create(answer) {
    	console.log("new Answer Object", answer);
     // return $http.post(endpoint, answer);
    }

    function put(answer) {
      return $http.put(endpoint + "/" + answer.id, answer);
    }

    function get(id) {
      return $http.get(endpoint + "/" + id);
    }

    function edit(answer) {
     console.log("edit Answer Object", answer);
    }

    function remove(id) {
     return $http.delete(endpoint + "/" + id);
    }

    return {
      list:list,
      create:create,
      edit:edit,
      get:get,
      put:put,
      remove:remove
    }
  }
})();
