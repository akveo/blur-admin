/**
 * @author a.demeshko
 * created on 22.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.charts.amCharts')
    .controller('combinedChartCtrl', combinedChartCtrl);

  /** @ngInject */
  function combinedChartCtrl($element, layoutColors, layoutPaths) {
    var id = $element[0].getAttribute('id');
    var chart = AmCharts.makeChart(id, {
      "type": "serial",
      "theme": "none",
      "color": layoutColors.default,
      "dataDateFormat": "YYYY-MM-DD",
      "precision": 2,
      "valueAxes": [{
        color: layoutColors.default,
        axisColor: layoutColors.default,
        gridColor: layoutColors.default,
        "id": "v1",
        "title": "Sales",
        "position": "left",
        "autoGridCount": false,
        "labelFunction": function(value) {
          return "$" + Math.round(value) + "M";
        }
      }, {
        color: layoutColors.default,
        axisColor: layoutColors.default,
        gridColor: layoutColors.default,
        "id": "v2",
        "title": "Market Days",
        "gridAlpha": 0,
        "position": "right",
        "autoGridCount": false
      }],
      "graphs": [{
        "id": "g3",
        color: layoutColors.default,
        "valueAxis": "v1",
        "lineColor": layoutColors.primaryLight,
        "fillColors": layoutColors.primaryLight,
        "fillAlphas": 0.8,
        "lineAlpha": 0.8,
        "type": "column",
        "title": "Actual Sales",
        "valueField": "sales2",
        "clustered": false,
        "columnWidth": 0.5,
        "lineColorField" : "#ffffff",
        "legendValueText": "$[[value]]M",
        "balloonText": "[[title]]<br/><b style='font-size: 130%'>$[[value]]M</b>"
      }, {
        "id": "g4",
        "valueAxis": "v1",
        color: layoutColors.default,
        "lineColor": layoutColors.primary,
        "fillColors": layoutColors.primary,
        "fillAlphas": 0.9,
        "lineAlpha": 0.9,
        "type": "column",
        "title": "Target Sales",
        "valueField": "sales1",
        "clustered": false,
        "columnWidth": 0.3,
        "legendValueText": "$[[value]]M",
        "balloonText": "[[title]]<br/><b style='font-size: 130%'>$[[value]]M</b>"
      }, {
        "id": "g1",
        "valueAxis": "v2",
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "bulletColor": "#FFFFFF",
        color: layoutColors.default,
        "bulletSize": 5,
        "hideBulletsCount": 50,
        "lineThickness": 2,
        "lineColor": layoutColors.danger,
        "type": "smoothedLine",
        "title": "Market Days",
        "useLineColorForBulletBorder": true,
        "valueField": "market1",
        "balloonText": "[[title]]<br/><b style='font-size: 130%'>[[value]]</b>"
      }, {
        "id": "g2",
        "valueAxis": "v2",
        color: layoutColors.default,
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "bulletColor": "#FFFFFF",
        "bulletSize": 5,
        "hideBulletsCount": 50,
        "lineThickness": 2,
        "lineColor": layoutColors.warning,
        "type": "smoothedLine",
        "dashLength": 5,
        "title": "Market Days ALL",
        "useLineColorForBulletBorder": true,
        "valueField": "market2",
        "balloonText": "[[title]]<br/><b style='font-size: 130%'>[[value]]</b>"
      }],
      "chartScrollbar": {
        "graph": "g1",
        "oppositeAxis": false,
        "offset": 30,
        "scrollbarHeight": 50,
        "backgroundAlpha": 0,
        "selectedBackgroundAlpha": 0.1,
        "selectedBackgroundColor": "#888888",
        "graphFillAlpha": 0,
        "graphLineAlpha": 0.5,
        "selectedGraphFillAlpha": 0,
        "selectedGraphLineAlpha": 1,
        "autoGridCount": true,
        "color": "#AAAAAA"
      },
      "chartCursor": {
        "pan": true,
        "cursorColor" : layoutColors.danger,
        "valueLineEnabled": true,
        "valueLineBalloonEnabled": true,
        "cursorAlpha": 0,
        "valueLineAlpha": 0.2
      },
      "categoryField": "date",
      "categoryAxis": {
        "axisColor": "#fff",
        "color": "#fff",
        "gridColor": "#fff",
        "parseDates": true,
        "dashLength": 1,
        "minorGridEnabled": true
      },
      "legend": {
        "useGraphSettings": true,
        "position": "top",
        "color": "#fff"
      },
      "balloon": {
        "borderThickness": 1,
        "shadowAlpha": 0
      },
      "export": {
        "enabled": true
      },
      "dataProvider": [{
        "date": "2013-01-16",
        "market1": 71,
        "market2": 75,
        "sales1": 5,
        "sales2": 8
      }, {
        "date": "2013-01-17",
        "market1": 74,
        "market2": 78,
        "sales1": 4,
        "sales2": 6
      }, {
        "date": "2013-01-18",
        "market1": 78,
        "market2": 88,
        "sales1": 5,
        "sales2": 2
      }, {
        "date": "2013-01-19",
        "market1": 85,
        "market2": 89,
        "sales1": 8,
        "sales2": 9
      }, {
        "date": "2013-01-20",
        "market1": 82,
        "market2": 89,
        "sales1": 9,
        "sales2": 6
      }, {
        "date": "2013-01-21",
        "market1": 83,
        "market2": 85,
        "sales1": 3,
        "sales2": 5
      }, {
        "date": "2013-01-22",
        "market1": 88,
        "market2": 92,
        "sales1": 5,
        "sales2": 7
      }, {
        "date": "2013-01-23",
        "market1": 85,
        "market2": 90,
        "sales1": 7,
        "sales2": 6
      }, {
        "date": "2013-01-24",
        "market1": 85,
        "market2": 91,
        "sales1": 9,
        "sales2": 5
      }, {
        "date": "2013-01-25",
        "market1": 80,
        "market2": 84,
        "sales1": 5,
        "sales2": 8
      }, {
        "date": "2013-01-26",
        "market1": 87,
        "market2": 92,
        "sales1": 4,
        "sales2": 8
      }, {
        "date": "2013-01-27",
        "market1": 84,
        "market2": 87,
        "sales1": 3,
        "sales2": 4
      }, {
        "date": "2013-01-28",
        "market1": 83,
        "market2": 88,
        "sales1": 5,
        "sales2": 7
      }, {
        "date": "2013-01-29",
        "market1": 84,
        "market2": 87,
        "sales1": 5,
        "sales2": 8
      }, {
        "date": "2013-01-30",
        "market1": 81,
        "market2": 85,
        "sales1": 4,
        "sales2": 7
      }],
      pathToImages: layoutPaths.images.amChart
    });
  }

})();
