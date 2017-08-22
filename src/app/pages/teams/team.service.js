/**
 * @author ayoub
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.teams')
    .factory('MemberService', MemberService);

  /** @ngInject */
  function MemberService($http, $q) {
    var apiBaseUrl = "http://localhost:9000"
    var endpoint = apiBaseUrl + "/members";

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

    function create(member) {
      return $http.post(endpoint, member);
    }

    function edit(member) {
     console.log("edit Member Object", member);
    }

    function remove(member) {
     console.log("remove Member", member);
    }

    return {
      list:list,
      create:create,
      edit:edit,
      remove:remove
    }
  }
})();
