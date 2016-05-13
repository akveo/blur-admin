/**
 * @author a.demeshko
 * created on 12/16/15
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.charts.chartist')
    .controller('chartistCtrl', chartistCtrl);

  /** @ngInject */
  function chartistCtrl($scope, $timeout, baConfig) {

    $scope.simpleLineOptions = {
      color: baConfig.colors.defaultText,
      fullWidth: true,
      height: "300px",
      chartPadding: {
        right: 40
      }
    };

    $scope.simpleLineData = {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      series: [
        [20, 20, 12, 45, 50],
        [10, 45, 30, 14, 12],
        [34, 12, 12, 40, 50],
        [10, 43, 25, 22, 16],
        [3, 6, 30, 33, 43]
      ]
    };

    $scope.areaLineData = {
      labels: [1, 2, 3, 4, 5, 6, 7, 8],
      series: [
        [5, 9, 7, 8, 5, 3, 5, 4]
      ]
    };

    $scope.areaLineOptions = {
      fullWidth: true,
      height: "300px",
      low: 0,
      showArea: true
    };

    $scope.biLineData = {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      series: [
        [1, 2, 3, 1, -2, 0, 1],
        [-2, -1, -2, -1, -2.5, -1, -2],
        [0, 0, 0, 1, 2, 2.5, 2],
        [2.5, 2, 1, 0.5, 1, 0.5, -1]
      ]
    };

    $scope.biLineOptions = {
      height: "300px",
      high: 3,
      low: -3,
      showArea: true,
      showLine: false,
      showPoint: false,
      fullWidth: true,
      axisX: {
        showGrid: false
      }
    };

    $scope.simpleBarData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      series: [
        [15, 24, 43, 27, 5, 10, 23, 44, 68, 50, 26, 8],
        [13, 22, 49, 22, 4, 6, 24, 46, 57, 48, 22, 4]
      ]
    };

    $scope.simpleBarOptions = {
      fullWidth: true,
      height: "300px"
    };

    $scope.multiBarData = {
      labels: ['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4'],
      series: [
        [5, 4, 3, 7],
        [3, 2, 9, 5],
        [1, 5, 8, 4],
        [2, 3, 4, 6],
        [4, 1, 2, 1]
      ]
    };

    $scope.multiBarOptions = {
      fullWidth: true,
      height: "300px",
      stackBars: true,
      axisX: {
        labelInterpolationFnc: function (value) {
          return value.split(/\s+/).map(function (word) {
            return word[0];
          }).join('');
        }
      },
      axisY: {
        offset: 20
      }
    };

    $scope.multiBarResponsive = [
      ['screen and (min-width: 400px)', {
        reverseData: true,
        horizontalBars: true,
        axisX: {
          labelInterpolationFnc: Chartist.noop
        },
        axisY: {
          offset: 60
        }
      }],
      ['screen and (min-width: 700px)', {
        stackBars: false,
        reverseData: false,
        horizontalBars: false,
        seriesBarDistance: 15
      }]
    ];

    $scope.stackedBarData = {
      labels: ['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4'],
      series: [
        [800000, 1200000, 1400000, 1300000],
        [200000, 400000, 500000, 300000],
        [100000, 200000, 400000, 600000]
      ]
    };

    $scope.stackedBarOptions = {
      fullWidth: true,
      height: "300px",
      stackBars: true,
      axisY: {
        labelInterpolationFnc: function (value) {
          return (value / 1000) + 'k';
        }
      }
    };

    $scope.simplePieData = {
      series: [5, 3, 4]
    };

    $scope.simplePieOptions = {
      fullWidth: true,
      height: "300px",
      weight: "300px",
      labelInterpolationFnc: function (value) {
        return Math.round(value / 12 * 100) + '%';
      }
    };

    $scope.labelsPieData = {
      labels: ['Bananas', 'Apples', 'Grapes'],
      series: [20, 15, 40]
    };

    $scope.labelsPieOptions = {
      fullWidth: true,
      height: "300px",
      weight: "300px",
      labelDirection: 'explode',
      labelInterpolationFnc: function (value) {
        return value[0];
      }
    };

    $scope.simpleDonutData = {
      labels: ['Bananas', 'Apples', 'Grapes'],
      series: [20, 15, 40]
    };

    $scope.simpleDonutOptions = {
      fullWidth: true,
      donut: true,
      height: "300px",
      weight: "300px",
      labelDirection: 'explode',
      labelInterpolationFnc: function (value) {
        return value[0];
      }
    };

    $scope.donutResponsive = getResponsive(5, 40);

    $scope.pieResponsive = getResponsive(20, 80);

    function getResponsive(padding, offset){
      return [
        ['screen and (min-width: 1550px)', {
          chartPadding: padding,
          labelOffset: offset,
          labelDirection: 'explode',
          labelInterpolationFnc: function (value) {
            return value;
          }
        }],
        ['screen and (max-width: 1200px)', {
          chartPadding: padding,
          labelOffset: offset,
          labelDirection: 'explode',
          labelInterpolationFnc: function (value) {
            return value;
          }
        }],
        ['screen and (max-width: 600px)', {
          chartPadding: 0,
          labelOffset: 0,
          labelInterpolationFnc: function (value) {
            return value[0];
          }
        }]
      ];
    }

    $timeout(function(){
      new Chartist.Line('#line-chart', $scope.simpleLineData, $scope.simpleLineOptions);
      new Chartist.Line('#area-chart', $scope.areaLineData, $scope.areaLineOptions);
      new Chartist.Line('#bi-chart', $scope.biLineData, $scope.biLineOptions);

      new Chartist.Bar('#simple-bar', $scope.simpleBarData, $scope.simpleBarOptions);
      new Chartist.Bar('#multi-bar', $scope.multiBarData, $scope.multiBarOptions, $scope.multiBarResponsive);
      new Chartist.Bar('#stacked-bar', $scope.stackedBarData, $scope.stackedBarOptions);

      new Chartist.Pie('#simple-pie', $scope.simplePieData, $scope.simplePieOptions, $scope.pieResponsive);
      new Chartist.Pie('#label-pie', $scope.labelsPieData, $scope.labelsPieOptions);
      new Chartist.Pie('#donut', $scope.simpleDonutData, $scope.simpleDonutOptions, $scope.donutResponsive);
    });
  }
})();