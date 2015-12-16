/**
 * @author v.lugovsky
 * created on 27.11.2015
 */
(function() {
  'use strict';

  angular.module('BlurAdmin.tplSkin')
      .service('tplSkinChartWatcherHelper', tplSkinChartWatcherHelper);

  tplSkinChartWatcherHelper.$inject = ['tplSkinManager'];
  function tplSkinChartWatcherHelper(tplSkinManager) {

    this.watchAxisChartStyleChanges = function(scope, chart) {
      _doUpdateStyles();
      scope.$on('tplSkinChanged', _doUpdateStyles);

      function _doUpdateStyles() {
        var chartColorProfile = tplSkinManager.getChartColorProfile();
        chart.color = chartColorProfile.fontColors;
        chart.categoryAxis.color = chartColorProfile.fontColors;
        chart.categoryAxis.axisColor = chartColorProfile.axisColors;
        chart.valueAxes[0].color = chartColorProfile.fontColors;
        chart.valueAxes[0].axisColor = chartColorProfile.axisColors;
        chart.validateNow();
      }
    };

    this.watchChartColorChanges = function(scope, chart) {
      _doUpdateStyles();
      scope.$on('tplSkinChanged', _doUpdateStyles);

      function _doUpdateStyles() {
        var chartColorProfile = tplSkinManager.getChartColorProfile();
        chart.color = chartColorProfile.fontColors;
        chart.validateNow();
      }
    };

    this.watchDonutChanges = function(scope, chart) {
      _doUpdateStyles();
      scope.$on('tplSkinChanged', _doUpdateStyles);

      function _doUpdateStyles() {
        var chartColorProfile = tplSkinManager.getChartColorProfile();
        chart.color = chartColorProfile.fontColors;
        chart.legend.color = chartColorProfile.fontColors;
        chart.labelTickColor = chartColorProfile.axisColors;
        chart.validateNow();
      }
    };

    this.watchFunnelChanges = function(scope, chart) {
      _doUpdateStyles();
      scope.$on('tplSkinChanged', _doUpdateStyles);

      function _doUpdateStyles() {
        var chartColorProfile = tplSkinManager.getChartColorProfile();
        chart.color = chartColorProfile.fontColors;
        chart.labelTickColor = chartColorProfile.axisColors;
        chart.validateNow();
      }
    };

  }

})();
