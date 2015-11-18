/**
 * @author v.lugovsky
 * created on 18.11.2015
 */
(function() {
  'use strict';

  blurAdminApp
      .factory('lookAndFeelOptions', lookAndFeelOptions);

  lookAndFeelOptions.$inject = ['lookAndFeelEnum'];
  function lookAndFeelOptions(lookAndFeelEnum) {

    var model = {
      adminStyles: lookAndFeelEnum
    };
    return model;
  }

})();
