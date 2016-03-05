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
      loadImg: function (src) {
        var d = $q.defer();
        var img = new Image();
        img.src = src;
        img.onload = function(){
          console.log("img " + src + " loaded");
          d.resolve();
        };
        return d.promise;
      },
      loadAmCharts : function(){
        var d = $q.defer();
        console.log("amchart");
        AmCharts.ready(function(){
          console.log("amchart loaded");
          d.resolve();
        });
        return d.promise;
      }
    }
  }

})();