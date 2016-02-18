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
        color: layoutColors.defaultCharts,
        highlight: "#f1f1f1",
        label: 'Ad Campaigns'
      },
      {
        value: 1500,
        color: layoutColors.primaryCharts,
        highlight: "#136775",
        label: 'Search engines'
      },
      {
        value: 1000,
        color: layoutColors.infoCharts,
        highlight: "#13998a",
        label: 'Direct Traffic'
      },
      {
        value: 1200,
        color: layoutColors.successCharts,
        highlight: "#94d7a1",
        label: 'Referral Traffic'
      },
      {
        value: 400,
        color: layoutColors.warningCharts,
        highlight: "#dcfcc4",
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