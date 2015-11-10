'use strict';

blurAdminApp.directive('trafficChart', function () {
  return {
    restrict: 'E',
    controller: [function () {

      var doughnutData = [
        {
          value: 2000,
          color: colorPrimary,
          highlight: colorPrimaryDark,
          label: 'Ad Campaigns'
        },
        {
          value: 1500,
          color: colorDanger,
          highlight: colorDangerDark,
          label: 'Search engines'
        },
        {
          value: 1000,
          color: colorSuccessLight,
          highlight: '#6c9c3f',
          label: 'Direct Traffic'
        },
        {
          value: 1200,
          color: colorSuccess,
          highlight: colorSuccessDark,
          label: 'Referral Traffic'
        },
        {
          value: 400,
          color: colorWarning,
          highlight: colorWarningDark,
          label: 'Other'
        }
      ];

      var ctx = document.getElementById('chart-area').getContext('2d');
      window.myDoughnut = new Chart(ctx).Doughnut(doughnutData, {
        responsive: true,
        legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend clearfix">' +
        '<% for (var i=0; i<segments.length; i++){%>' +
        '<li class="clearfix">' +
        '<span style="background-color:<%=segments[i].fillColor%>"></span>' +
        '<%if(segments[i].label){%><%=segments[i].label%><%}%>' +
        '</li><%}%>' +
        '</ul>'
      });

      var legend = window.myDoughnut.generateLegend();
      $('.traffic-legend').html(legend);

    }],
    templateUrl: 'app/pages/dashboard/widgets/trafficChart/trafficChart.html'
  };
});

