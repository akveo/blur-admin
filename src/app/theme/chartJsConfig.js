/**
 * @author a.demeshko
 * created on 12/16/15
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme')
    .config(chartJsConfig);

  /** @ngInject */
  function chartJsConfig(ChartJsProvider, layoutColors) {
    // Configure all charts
    ChartJsProvider.setOptions({
      colours: [layoutColors.default, layoutColors.danger, layoutColors.primary,  layoutColors.warning, layoutColors.success,  layoutColors.primaryDark, layoutColors.successDark, layoutColors.warningLight, layoutColors.successLight, layoutColors.successBg, layoutColors.info],
      responsive: true,
      scaleFontColor: "rgba(255,255,255,.7)",
      scaleLineColor: "rgba(255,255,255,.7)",
      pointLabelFontColor: "rgba(255,255,255,.7)"
    });
    // Configure all line charts
    ChartJsProvider.setOptions('Line', {
      datasetFill: false
    });
  }

})();