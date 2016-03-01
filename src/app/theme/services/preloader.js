/**
 * @author a.demeshko
 * created on 3/1/16
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme')
    .service('preloader', preloader);

  /** @ngInject */
  function preloader($q) {
    return {
      load: function (src) {
        var d = $q.defer();
        var img = new Image();
        img.src = src;
        img.onload = d.resolve;
        return d.promise;
      }
    }
  }

})();