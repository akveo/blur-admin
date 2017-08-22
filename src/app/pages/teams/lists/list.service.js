/**
 * @author ayoub
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.teams.lists')
    .factory('ListService', ListService);

  /** @ngInject */
  function ListService($http, $q) {
    var apiBaseUrl = "http://localhost:9000"
    var endpoint = apiBaseUrl + "/lists";

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

    function create(list) {
      return $http.post(endpoint, list);
    }

    function edit(list) {
     console.log("edit Member Object", list);
    }

    function remove(list) {
     console.log("remove Member", list);
    }

    return {
      list:list,
      create:create,
      edit:edit,
      remove:remove
    }
  }
})();
