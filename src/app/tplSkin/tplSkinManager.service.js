/**
 * @author v.lugovsky
 * created on 18.11.2015
 */
(function() {
  'use strict';

  angular.module('BlurAdmin.tplSkin')
      .service('tplSkinManager', tplSkinManager);

  tplSkinManager.$inject = ['$rootScope', '$document', 'tplSkinClassPrefix', 'tplSkinChartColors', 'tplSkinEnum'];
  function tplSkinManager($rootScope, $document, tplSkinClassPrefix, tplSkinChartColors, tplSkinEnum) {

    var activeSkin = tplSkinEnum[0];

    this.setActiveSkin = function(skin) {
      activeSkin = skin;
      if (activeSkin) {
        _removeSkinBodyClassIfPresent();
        _addSkinBodyClass(activeSkin);
        $rootScope.$broadcast('tplSkinChanged');
      }
    };

    this.getActiveSkin = function(){
      return activeSkin;
    };

    this.getChartColorProfile = function() {
      return tplSkinChartColors[activeSkin.chartColorProfile];
    };

    function _removeSkinBodyClassIfPresent() {
      var body = $document[0].body;
      var $body = angular.element(body);
      body.className.split(/\s+/).forEach(function(className) {
        if (className.indexOf(tplSkinClassPrefix) === 0) {
          $body.removeClass(className);
        }
      });
    }

    function _addSkinBodyClass(skin) {
      angular.element($document[0].body).addClass(skin.bodyClass);
    }

    this.setActiveSkin(activeSkin);
  }

})();
