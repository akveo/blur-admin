/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .controller('TrafficChartCtrl', TrafficChartCtrl);

  /** @ngInject */
  function TrafficChartCtrl(layoutColors, $scope) {
    var palette = layoutColors.bgColorPalette;
    $scope.doughnutData = [
      {
        value: 2000,
        color: palette.white,
        highlight: palette.whiteDark,
        label: 'Ad Campaigns',
        percentage: 87,
        order: 0,
      }, {
        value: 1500,
        color: palette.blueStone,
        highlight: palette.blueStoneDark,
        label: 'Search engines',
        percentage: 22,
        order: 4,
      }, {
        value: 1000,
        color: palette.surfieGreen,
        highlight: palette.surfieGreenDark,
        label: 'Referral Traffic',
        percentage: 70,
        order: 3,
      }, {
        value: 1200,
        color: palette.silverTree,
        highlight: palette.silverTreeDark,
        label: 'Direct Traffic',
        percentage: 38,
        order: 2,
      }, {
        value: 400,
        color: palette.gossip,
        highlight: palette.gossipDark,
        label: 'Other',
        percentage: 17,
        order: 1,
      },
    ];

    var ctx = document.getElementById('chart-area').getContext('2d');
    window.myDoughnut = new Chart(ctx).Doughnut($scope.doughnutData, {
      segmentShowStroke: false,
      percentageInnerCutout : 64,
      responsive: true
    });
  }
})();