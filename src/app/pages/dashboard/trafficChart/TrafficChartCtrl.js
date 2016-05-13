/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .controller('TrafficChartCtrl', TrafficChartCtrl);

  /** @ngInject */
  function TrafficChartCtrl($scope, baConfig) {

    $scope.transparent = baConfig.theme.blur;
    var dashboardColors = baConfig.colors.dashboard;
    $scope.doughnutData = [
      {
        value: 2000,
        color: dashboardColors.white,
        highlight: dashboardColors.whiteDark,
        label: 'Other',
        percentage: 87,
        order: 1,
      }, {
        value: 1500,
        color: dashboardColors.blueStone,
        highlight: dashboardColors.blueStoneDark,
        label: 'Search engines',
        percentage: 22,
        order: 4,
      }, {
        value: 1000,
        color: dashboardColors.surfieGreen,
        highlight: dashboardColors.surfieGreenDark,
        label: 'Referral Traffic',
        percentage: 70,
        order: 3,
      }, {
        value: 1200,
        color: dashboardColors.silverTree,
        highlight: dashboardColors.silverTreeDark,
        label: 'Direct Traffic',
        percentage: 38,
        order: 2,
      }, {
        value: 400,
        color: dashboardColors.gossip,
        highlight: dashboardColors.gossipDark,
        label: 'Ad Campaigns',
        percentage: 17,
        order: 0,
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