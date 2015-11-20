/**
 * @author v.lugovsky
 * created on 18.11.2015
 */
(function() {
  'use strict';

  blurAdminApp
      .directive('lookAndFeelPanel', lookAndFeelPanel);

  lookAndFeelPanel.$inject = ['lookAndFeelEnum', 'lookAndFeelOptions'];
  function lookAndFeelPanel(lookAndFeelEnum, lookAndFeelOptions) {
    return {
      templateUrl: 'app/lookAndFeel/lookAndFeelPanel.html',
      link: function(scope, el) {
        scope.lookAndFeels = lookAndFeelEnum;

        scope.setActiveSkin = function(option) {
          lookAndFeelOptions.setActiveSkin(option);
        };
      }
    };
  }

})();
