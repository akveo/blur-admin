/**
 * @author v.lugovsky
 * created on 18.11.2015
 */
(function() {
  'use strict';

  blurAdminApp
      .service('lookAndFeelOptions', lookAndFeelOptions);

  lookAndFeelOptions.$inject = ['$document', 'skinClassPrefix'];
  function lookAndFeelOptions($document, skinClassPrefix) {

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
        if (className.indexOf(skinClassPrefix) === 0) {
          $body.removeClass(className);
        }
      });
    }

    function _addSkinBodyClass(skin) {
      angular.element($document[0].body).addClass(skin.bodyClass);
    }
  }

})();
