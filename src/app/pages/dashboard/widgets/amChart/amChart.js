'use strict';

blurAdminApp.directive('amChart', function () {
  return {
    restrict: 'E',
    controller: ['$scope', function ($scope) {
      var chartData = [
        { date: new Date(2012, 11), value: 0},
        { date: new Date(2013, 0), value: 15000},
        { date: new Date(2013, 1), value: 30000},


        { date: new Date(2013, 2), value: 25000},
        { date: new Date(2013, 3), value: 21000},
        { date: new Date(2013, 4), value: 24000},
        { date: new Date(2013, 5), value: 31000},
        { date: new Date(2013, 6), value: 40000},
        { date: new Date(2013, 7), value: 37000},
        { date: new Date(2013, 8), value: 20000},
        { date: new Date(2013, 9), value: 5000},
        { date: new Date(2013, 10), value: 40000},
        { date: new Date(2013, 11), value: 20000},
        { date: new Date(2014, 0), value: 5000},

        { date: new Date(2014, 1), value: 3000},
        { date: new Date(2014, 2), value: 1800},
        { date: new Date(2014, 3), value: 10400},
        { date: new Date(2014, 4), value: 25500},
        { date: new Date(2014, 5), value: 2100},
        { date: new Date(2014, 6), value: 6500},
        { date: new Date(2014, 7), value: 1100},
        { date: new Date(2014, 8), value: 17200},
        { date: new Date(2014, 9), value: 26900},
        { date: new Date(2014, 10), value: 14100},
        { date: new Date(2014, 11), value: 35300},
        { date: new Date(2015, 0), value: 54800},
        { date: new Date(2015, 1), value: 49800}
      ];

      var chart = AmCharts.makeChart('amchart', {
        type: 'serial',
        theme: 'blur',
        marginTop: 0,
        marginRight: 15,
        dataProvider: chartData,
        valueAxes: [
          {
            gridAlpha: 0
          }
        ],
        graphs: [
          {
            id: 'g1',
            bullet: 'round',
            bulletSize: 8,
            useLineColorForBulletBorder: true,
            lineColor: colorPrimary,
            lineThickness: 1,
            negativeLineColor: colorDanger,
            type: 'smoothedLine',
            valueField: 'value',
            fillAlphas: 1,
            fillColorsField: 'lineColor'
          }
        ],
        chartScrollbar: {
          graph: 'g1',
          gridAlpha: 0,
          color: '#888888',
          scrollbarHeight: 55,
          backgroundAlpha: 0,
          selectedBackgroundAlpha: 0.1,
          selectedBackgroundColor: '#ffffff',
          graphFillAlpha: 0,
          autoGridCount: true,
          selectedGraphFillAlpha: 0,
          graphLineAlpha: 0.2,
          graphLineColor: '#c2c2c2',
          selectedGraphLineColor: '#888888',
          selectedGraphLineAlpha: 1
        },
        chartCursor: {
          categoryBalloonDateFormat: 'MM YYYY',
          categoryBalloonColor: '#4285F4',
          categoryBalloonAlpha: 0.7,
          cursorAlpha: 0,
          valueLineEnabled: true,
          valueLineBalloonEnabled: true,
          valueLineAlpha: 0.5
        },
        dataDateFormat: 'MM YYYY',
        categoryField: 'date',
        categoryAxis: {
          parseDates: true,
          gridAlpha: 0
        },
        export: {
          enabled: true
        },
        creditsPosition: 'bottom-right',
        zoomOutButton: {
          backgroundColor: '#fff',
          backgroundAlpha: 0
        },
        zoomOutText: '',
        pathToImages: 'img/'
      });

      function zoomChart() {
        chart.zoomToDates(new Date(2013, 3), new Date(2014, 0));
      }

      chart.addListener('rendered', zoomChart);
      zoomChart();
      if (chart.zoomChart) {
        chart.zoomChart();
      }
    }],
    templateUrl: 'app/pages/dashboard/widgets/amChart/amChart.html'
  };
});