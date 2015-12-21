/**
 * @author a.demeshko
 * created on 12/16/15
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.charts.chartJs')
    .controller('chartJsWaveCtrl', chartJsWaveCtrl);

  /** @ngInject */
  function chartJsWaveCtrl($scope, $interval, stopableInterval) {
    $scope.labels =["April", "May", "June", "Jule", "August", "September", "October", "November", "December"];
    $scope.data = [[1, 9, 3, 4, 5, 6, 7, 8, 2].map(function(e){
      return Math.sin(e) * 25 +25;
    })];

    stopableInterval.start($interval, function(){
      $scope.data[0].unshift($scope.data[0].pop());
    }, 300)
  }

})();