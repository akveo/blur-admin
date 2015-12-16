/**
 * @author v.lugovsky
 * created on 18.11.2015
 */
(function() {
  'use strict';

  angular.module('BlurAdmin.tplSkin')
      .directive('tplSkinPanel', tplSkinPanel);

  tplSkinPanel.$inject = ['tplSkinEnum', 'tplSkinManager'];
  function tplSkinPanel(tplSkinEnum, tplSkinManager) {
    return {
      templateUrl: 'app/tplSkin/tplSkinPanel.html',
      link: function(scope) {
        scope.skins = tplSkinEnum;

        scope.setActiveSkin = function(option) {
          tplSkinManager.setActiveSkin(option);
        };
      }
    };
  }

})();
