'use strict';

blurAdminApp.directive('pieCharts', function () {
  return {
    restrict: 'E',
    controller: ['$scope', '$element', '$window', '$timeout', function ($scope, $element, $window, $timeout) {

      $scope.charts = [{
          color: '#41bee9',
          description: 'New Visits',
          stats: '57,820',
          icon: 'person',
        }, {
          color: '#9D498C',
          description: 'New Purchases',
          stats: '$ 89,745',
          icon: 'money',
        }, {
          color: '#bbcb50',
          description: 'Active Users',
          stats: '178,391',
          icon: 'face',
        }, {
          color: '#5FBCBB',
          description: 'Returned Visitors',
          stats: '32,592',
          icon: 'refresh',
        }
      ];

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
            barColor: chart.attr('rel'),
            trackColor: 'rgba(0,0,0,0)',
            size: 84,
            scaleLength: 0,
            animation: 2000,
            lineWidth: 9,
            lineCap: 'square',
          });
        });

        $('.refresh-data').on('click', function () {
          updatePieCharts();
        });
      }

      function updatePieCharts() {
        $('.pie-charts .chart').each(function(index, chart) {
          $(chart).data('easyPieChart').update(getRandomArbitrary(60, 90));
        });
      }

      $timeout(function () {
        loadPieCharts();
        updatePieCharts();
      }, 1000);
    }],
    templateUrl: 'app/pages/dashboard/widgets/pieCharts/pieCharts.html'
  };
});
