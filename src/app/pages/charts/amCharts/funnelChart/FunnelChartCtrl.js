/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.charts.amCharts')
      .controller('FunnelChartCtrl', FunnelChartCtrl);

  /** @ngInject */
  function FunnelChartCtrl($scope, $element, layoutPaths, baConfig) {
    var layoutColors = baConfig.colors;
    var id = $element[0].getAttribute('id');
    var funnelChart = AmCharts.makeChart(id, {
      type: 'funnel',
      theme: 'blur',
      color: layoutColors.defaultText,
      labelTickColor: layoutColors.borderDark,
      dataProvider: [
        {
          title: 'Website visits',
          value: 300
        },
        {
          title: 'Downloads',
          value: 123
        },
        {
          title: 'Requested prices',
          value: 98
        },
        {
          title: 'Contaced',
          value: 72
        },
        {
          title: 'Purchased',
          value: 35
        },
        {
          title: 'Asked for support',
          value: 25
        },
        {
          title: 'Purchased more',
          value: 18
        }
      ],
      titleField: 'title',
      marginRight: 160,
      marginLeft: 15,
      labelPosition: 'right',
      funnelAlpha: 0.9,
      valueField: 'value',
      startX: 0,
      alpha: 0.8,
      neckWidth: '0%',
      startAlpha: 0,
      outlineThickness: 1,
      neckHeight: '0%',
      balloonText: '[[title]]:<b>[[value]]</b>',
      export: {
        enabled: true
      },
      creditsPosition: 'bottom-left',
      pathToImages: layoutPaths
    });
  }
})();
