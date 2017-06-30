/**
 * @author l.azevedo
 * created on 29/06/2017
 */
(function() {
  'use strict';

  angular.module('BlurAdmin.pages.services')
    .service('localStorage', localStorage);

  /** @ngInject */
  function localStorage($window) {
    var service = {
      set: set,
      get: get,
      setObject: setObject,
      getObject: getObject,
      clear: clear
    }

    return service;

    function set(key, value) {
      if ($window.fakeLocalStorage) {
        $window.fakeLocalStorage[key] = value;
      } else {
        $window.localStorage[key] = value;
      }
    }

    function get(key, defaultValue) {
      return !$window.fakeLocalStorage ? $window.localStorage[key] || defaultValue : $window.fakeLocalStorage[key] || defaultValue;
    }

    function setObject(key, value) {
      if ($window.fakeLocalStorage) {
        $window.fakeLocalStorage[key] = angular.toJson(value);
      } else {
        $window.localStorage[key] = angular.toJson(value);
      }
    }

    function getObject(key) {
      return !$window.fakeLocalStorage ? angular.fromJson($window.localStorage[key] || '{}') : angular.fromJson($window.fakeLocalStorage[key] || '{}');
    }

    function clear() {
      if ($window.fakeLocalStorage) {
        $window.fakeLocalStorage = {};
      } else {
        $window.localStorage.clear();
      }
    }
  }

})();