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
  function baPanel(baPanel, $document, $window, tplSkinManager) {
    return angular.extend({}, baPanel, {
      link: function($scope){
        $scope.panelType = tplSkinManager.getActiveSkin().panelType;
        $scope.$on('tplSkinChanged', function(){
          $scope.panelType = tplSkinManager.getActiveSkin().panelType;
        });
      },
      template: function(el, attrs) {
        var res = '<div  class="panel {{panelType}} full-invisible ' + (attrs.baPanelClass || '') + '" zoom-in ba-panel-blur>';
        res += baPanel.template(el, attrs);
        res += '</div>';
        return res;
      }
    });
  }

})();
