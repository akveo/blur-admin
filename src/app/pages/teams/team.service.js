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

      console.log("labels", params);

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

    function create(member) {
      return $http.post(endpoint, member);
    }

    function put(member) {
      return $http.put(endpoint + "/" + member.id, member);
    }

    function get(id) {
      return $http.get(endpoint + "/" + id);
    }

    function edit(member) {
     console.log("edit Member Object", member);
    }

    function remove(id) {
     return $http.delete(endpoint + "/" + id);
    }

    function getMembersByLabel (label){
      var members = list();
        return members.filter(function(m){
          return m.labels.indexOf(label) != -1;
        });
      }

    return {
      list:list,
      create:create,
      edit:edit,
      get:get,
      put:put,
      remove:remove,
      getMembersByLabel:getMembersByLabel
    }
  }
})();
