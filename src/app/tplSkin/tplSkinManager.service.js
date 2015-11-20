/**
 * @author v.lugovsky
 * created on 18.11.2015
 */
(function() {
  'use strict';

  blurAdminApp
      .service('tplSkinManager', tplSkinManager);

  tplSkinManager.$inject = ['$document', 'tplSkinClassPrefix'];
  function tplSkinManager($document, tplSkinClassPrefix) {

    var activeSkin = null;

    this.setActiveSkin = function(skin) {
      activeSkin = skin;
      if (activeSkin) {
        _removeSkinBodyClassIfPresent();
        _addSkinBodyClass(activeSkin);
      }
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
  }

})();
