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
    $scope.labels =["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    $scope.data = [1, 9, 3, 4, 5, 6, 7, 8, 2].map(function(e){
      return Math.sin(e) * 25 +25;
    });

    stopableInterval.start($interval, function(){
      var tempArray = [];
      var lastElement = $scope.data[$scope.data.length-1];
      for(var i = $scope.data.length-1; i > 0; i--){
       tempArray[i] = $scope.data[i-1];
      }
      tempArray[0] = lastElement;
      $scope.data = tempArray;
    }, 400)
  }

})();