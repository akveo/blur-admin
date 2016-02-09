/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .controller('TrafficChartCtrl', TrafficChartCtrl);

  /** @ngInject */
  function TrafficChartCtrl(layoutColors) {
    var doughnutData = [
      {
        value: 2000,
        color: layoutColors.default,
        highlight: layoutColors.primaryDark,
        label: 'Ad Campaigns'
      },
      {
        value: 1500,
        color: layoutColors.primary,
        highlight: layoutColors.primaryBg,
        label: 'Search engines'
      },
      {
        value: 1000,
        color: layoutColors.success,
        highlight: layoutColors.successBg,
        label: 'Direct Traffic'
      },
      {
        value: 1200,
        color: layoutColors.info,
        highlight: layoutColors.infoBg,
        label: 'Referral Traffic'
      },
      {
        value: 400,
        color: layoutColors.warning,
        highlight: layoutColors.warningBg,
        label: 'Other'
      }
    ];

    var ctx = document.getElementById('chart-area').getContext('2d');
    window.myDoughnut = new Chart(ctx).Doughnut(doughnutData, {
      segmentShowStroke: false,
      percentageInnerCutout : 64,
      responsive: true
    });

  }
})();