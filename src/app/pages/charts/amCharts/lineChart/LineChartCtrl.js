/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.charts.amCharts')
      .controller('LineChartCtrl', LineChartCtrl);

  /** @ngInject */
  function LineChartCtrl($scope, baConfig, $element, layoutPaths) {
    var layoutColors = baConfig.colors;
    var id = $element[0].getAttribute('id');
    var lineChart = AmCharts.makeChart(id, {
      type: 'serial',
      theme: 'blur',
      color: layoutColors.defaultText,
      marginTop: 0,
      marginRight: 15,
      dataProvider: [
        {
          year: '1990',
          value: -0.17
        },
        {
          year: '1991',
          value: -0.254
        },
        {
          year: '1992',
          value: 0.019
        },
        {
          year: '1993',
          value: -0.063
        },
        {
          year: '1994',
          value: 0.005
        },
        {
          year: '1995',
          value: 0.077
        },
        {
          year: '1996',
          value: 0.12
        },
        {
          year: '1997',
          value: 0.011
        },
        {
          year: '1998',
          value: 0.177
        },
        {
          year: '1999',
          value: -0.021
        },
        {
          year: '2000',
          value: -0.037
        },
        {
          year: '2001',
          value: 0.03
        },
        {
          year: '2002',
          value: 0.179
        },
        {
          year: '2003',
          value: 0.2
        },
        {
          year: '2004',
          value: 0.180
        },
        {
          year: '2005',
          value: 0.21
        }
      ],
      valueAxes: [
        {
          axisAlpha: 0,
          position: 'left',
          gridAlpha: 0.5,
          gridColor: layoutColors.border,
        }
      ],
      graphs: [
        {
          id: 'g1',
          balloonText: '[[value]]',
          bullet: 'round',
          bulletSize: 8,
          lineColor: layoutColors.danger,
          lineThickness: 1,
          negativeLineColor: layoutColors.warning,
          type: 'smoothedLine',
          valueField: 'value'
        }
      ],
      chartScrollbar: {
        graph: 'g1',
        gridAlpha: 0,
        color: layoutColors.defaultText,
        scrollbarHeight: 55,
        backgroundAlpha: 0,
        selectedBackgroundAlpha: 0.05,
        selectedBackgroundColor: layoutColors.defaultText,
        graphFillAlpha: 0,
        autoGridCount: true,
        selectedGraphFillAlpha: 0,
        graphLineAlpha: 0.2,
        selectedGraphLineColor: layoutColors.defaultText,
        selectedGraphLineAlpha: 1
      },
      chartCursor: {
        categoryBalloonDateFormat: 'YYYY',
        cursorAlpha: 0,
        valueLineEnabled: true,
        valueLineBalloonEnabled: true,
        valueLineAlpha: 0.5,
        fullWidth: true
      },
      dataDateFormat: 'YYYY',
      categoryField: 'year',
      categoryAxis: {
        minPeriod: 'YYYY',
        parseDates: true,
        minorGridAlpha: 0.1,
        minorGridEnabled: true,
        gridAlpha: 0.5,
        gridColor: layoutColors.border,
      },
      export: {
        enabled: true
      },
      creditsPosition: 'bottom-right',
      pathToImages: layoutPaths.images.amChart
    });

    lineChart.addListener('rendered', zoomChart);
    if (lineChart.zoomChart) {
      lineChart.zoomChart();
    }

    function zoomChart() {
      lineChart.zoomToIndexes(Math.round(lineChart.dataProvider.length * 0.4), Math.round(lineChart.dataProvider.length * 0.55));
    }
  }

})();
