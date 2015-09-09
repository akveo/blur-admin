'use strict';

app.directive('pieCharts', function () {
  return {
    restrict: 'E',
    controller: ["$scope", "$element", "$window", "$timeout", function ($scope, $element, $window, $timeout) {
      function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
      }

      function loadPieCharts() {
        $('.chart').each(function () {
          var chart = $(this);
          chart.easyPieChart({
            easing: 'easeOutBounce',
            onStep: function (from, to, percent) {
              $(this.el).find('.percent').text(Math.round(percent));
            },
            barColor: chart.attr("rel"),
            trackColor: 'rgba(0,0,0,0)',
            size: 84,
            scaleLength: 0,
            animation: 2000
          });
        });

        $('.refresh-data').on('click', function () {
          updatePieCharts();
        });
      }

      function updatePieCharts() {
        var chart1 = window.chart = $("#chart1").find('.chart').data('easyPieChart');
        var chart2 = window.chart = $("#chart2").find('.chart').data('easyPieChart');
        var chart3 = window.chart = $("#chart3").find('.chart').data('easyPieChart');
        var chart4 = window.chart = $("#chart4").find('.chart').data('easyPieChart');
        chart1.update(getRandomArbitrary(60, 100));
        chart2.update(getRandomArbitrary(60, 100));
        chart3.update(getRandomArbitrary(60, 100));
        chart4.update(getRandomArbitrary(60, 100));
      }

      loadPieCharts();

      $timeout(function () {
        updatePieCharts();
      }, 2000);
    }],
    templateUrl: '/app/components/pieCharts/pieCharts.html'
  };
});
