'use strict';

app.controller('funnelChartCtrl', ['$scope', '$timeout', '$element', function($scope, $timeout, $element) {
  var id = $element[0].getAttribute('id');
  var funnelChart = AmCharts.makeChart(id, {
    type: "funnel",
    theme: "blur",
    dataProvider: [
      {
        title: "Website visits",
        value: 300
      },
      {
        title: "Downloads",
        value: 123
      },
      {
        title: "Requested prices",
        value: 98
      },
      {
        title: "Contaced",
        value: 72
      },
      {
        title: "Purchased",
        value: 35
      },
      {
        title: "Asked for support",
        value: 25
      },
      {
        title: "Purchased more",
        value: 18
      }
    ],
    titleField: "title",
    marginRight: 160,
    marginLeft: 15,
    labelPosition: "right",
    funnelAlpha: 0.9,
    valueField: "value",
    startX: 0,
    neckWidth: "0%",
    startAlpha: 0,
    outlineThickness: 1,
    neckHeight: "0%",
    balloonText: "[[title]]:<b>[[value]]</b>",
    export: {
      enabled: true
    },
    creditsPosition: "bottom-left",
    pathToImages: "release/img/"
  });
}]);