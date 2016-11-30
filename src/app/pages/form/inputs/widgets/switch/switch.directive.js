/**
 * @author p.maslava
 * created on 30.11.2016
 * @deprecated
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.form')
    .directive('switchInput', switchDirective);

  /** @ngInject */
  function switchDirective() {
    return {
      restrict: 'A',
      template: function(el, attr) {
        var switcher = '<input type="checkbox"><div class="switcher '
          + (attr.switchInput || '') +
          '"><div class="handle-container"><span class="handle handle-on">ON</span>' +
          '<span class="handle"></span><span class="handle handle-off">OFF</span></div></div>';
        return switcher
      }
    };
  }
})();
