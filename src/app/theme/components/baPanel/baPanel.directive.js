/**
 * @author v.lugovsky
 * created on 23.12.2015
 */
(function () {
  'use strict';

  /**
   * Includes basic panel layout inside of current element.
   */
  angular.module('BlurAdmin.theme')
      .directive('baPanel', baPanel);

  /** @ngInject */
  function baPanel(baPanel, baConfig) {
    return angular.extend({}, baPanel, {
      template: function(el, attrs) {
        var res = '<div  class="panel ' + (baConfig.theme.blur ? 'panel-blur' : '') + ' full-invisible ' + (attrs.baPanelClass || '');
        res += '" zoom-in ' + (baConfig.theme.blur ? 'ba-panel-blur' : '') + '>';
        res += baPanel.template(el, attrs);
        res += '</div>';
        return res;
      }
    });
  }
})();
