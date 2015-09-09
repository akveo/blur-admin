'use strict';

app.controller('barChartCtrl', ['$scope', '$timeout', '$element', function($scope, $timeout, $element) {
  var id = $element[0].getAttribute('id');
  var barChart = AmCharts.makeChart(id, {
    "type": "serial",
    "theme": "blur",
    "dataProvider": [
      {
        "country": "USA",
        "visits": 3025,
        "color": colorPrimary
      },
      {
        "country": "China",
        "visits": 1882,
        "color": colorDanger

      },
      {
        "country": "Japan",
        "visits": 1809,
        "color": colorPrimaryLight
      },
      {
        "country": "Germany",
        "visits": 1322,
        "color": colorSuccess
      },
      {
        "country": "UK",
        "visits": 1122,
        "color": colorWarning
      },
      {
        "country": "France",
        "visits": 1114,
        "color": colorDefault
      }
    ],
    "valueAxes": [
      {
        "axisAlpha": 0,
        "position": "left",
        "title": "Visitors from country"
      }
    ],
    "startDuration": 1,
    "graphs": [
      {
        "balloonText": "<b>[[category]]: [[value]]</b>",
        "fillColorsField": "color",
        "fillAlphas": 0.9,
        "lineAlpha": 0.2,
        "type": "column",
        "valueField": "visits"
      }
    ],
    "chartCursor": {
      "categoryBalloonEnabled": false,
      "cursorAlpha": 0,
      "zoomable": false
    },
    "categoryField": "country",
    "categoryAxis": {
      "gridPosition": "start",
      "labelRotation": 45
    },
    "export": {
      "enabled": true
    },
    "creditsPosition": "top-right",
    "pathToImages": '/release/img/'
  });
}]);