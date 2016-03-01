/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.charts.amCharts')
      .controller('BarChartCtrl', BarChartCtrl);

  /** @ngInject */
  function BarChartCtrl($scope, layoutColors, $element, tplSkinChartWatcherHelper, layoutPaths) {
    var id = $element[0].getAttribute('id');
    var barChart = AmCharts.makeChart(id, {
      type: 'serial',
      theme: 'blur',
      dataProvider: [
        {
          country: 'USA',
          visits: 3025,
          color: layoutColors.primary
        },
        {
          country: 'China',
          visits: 1882,
          color: layoutColors.danger

        },
        {
          country: 'Japan',
          visits: 1809,
          color: layoutColors.info
        },
        {
          country: 'Germany',
          visits: 1322,
          color: layoutColors.success
        },
        {
          country: 'UK',
          visits: 1122,
          color: layoutColors.warning
        },
        {
          country: 'France',
          visits: 1114,
          color: layoutColors.default
        }
      ],
      valueAxes: [
        {
          axisAlpha: 0,
          position: 'left',
          title: 'Visitors from country'
        }
      ],
      startDuration: 1,
      graphs: [
        {
          balloonText: '<b>[[category]]: [[value]]</b>',
          fillColorsField: 'color',
          fillAlphas: 0.7,
          lineAlpha: 0.2,
          type: 'column',
          valueField: 'visits'
        }
      ],
      chartCursor: {
        categoryBalloonEnabled: false,
        cursorAlpha: 0,
        zoomable: false
      },
      categoryField: 'country',
      categoryAxis: {
        gridPosition: 'start',
        labelRotation: 45
      },
      export: {
        enabled: true
      },
      creditsPosition: 'top-right',
      pathToImages: layoutPaths.images.amChart
    });

    tplSkinChartWatcherHelper.watchAxisChartStyleChanges($scope, barChart);
  }

})();
