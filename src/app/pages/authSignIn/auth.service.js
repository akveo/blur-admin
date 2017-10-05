/**
 * @author ayoub
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.authSignIn')
    .factory('AuthService',AuthService);

  /** @ngInject */
  function AuthService($http, $q, appConfig) {
    var apiBaseUrl = appConfig.apiBaseUrl
    var endpoint = apiBaseUrl + "/auth";

    function login(params) {
      params = params || {};

      var access_token = { "access_token" : params.access_token }
      var auth = { headers : { 'Authorization':  'Basic ' + btoa(params.email + ":" + params.password)}}

      var deferred = $q.defer();
      $http.post(endpoint, access_token, auth)
       .success(function(data) { 
          deferred.resolve(data);
       }).error(function(msg, code) {
          deferred.reject(msg);
       });

     return deferred.promise;


      return $http.post(endpoint, access_token, auth)
    }

    return {
      login:login
    }
  }
})();
