/**
 * @author v.lugovsky
 * created on 03.05.2016
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme')
      .service('baUtil', baUtil);

  /** @ngInject */
  function baUtil() {

    this.isDescendant = function(parent, child) {
      var node = child.parentNode;
      while (node != null) {
        if (node == parent) {
          return true;
        }
        node = node.parentNode;
      }
      return false;
    };

    this.hexToRGB = function(hex, alpha) {
      var r = parseInt( hex.slice(1,3), 16 );
      var g = parseInt( hex.slice(3,5), 16 );
      var b = parseInt( hex.slice(5,7), 16 );
      return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
    }
  }
})();
