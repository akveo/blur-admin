/**
 * @author v.lugovsky
 * created on 18.11.2015
 */
(function() {
  'use strict';

  blurAdminApp
      .directive('lookAndFeelPanel', lookAndFeelPanel);

  lookAndFeelPanel.$inject = ['lookAndFeelEnum'];
  function lookAndFeelPanel(lookAndFeelEnum) {
    return {
      templateUrl: 'app/lookAndFeel/lookAndFeelPanel.html',
      link: function(scope, el) {
        scope.lookAndFeels = lookAndFeelEnum;
      }
    };
  }

})();
