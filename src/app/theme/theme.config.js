/**
 * Created by k.danovsky on 13.05.2016.
 */

(function () {
  'use strict';

  angular.module('BlurAdmin.theme')
    .config(config);

  /** @ngInject */
  function config(baConfigProvider, colorHelper) {
    //baConfigProvider.theme.blur = false;
    //
    //var colors = baConfigProvider.colors;
    //colors.default = '#ffffff';
    //colors.defaultText = '#666666';
    //colors.dashboard.white = '#10c4b5';
    //colors.dashboard.whiteDark = colorHelper.shade(colors.dashboard.white, 5);
  }
})();
