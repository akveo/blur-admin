/**
 * @author a.demeshko
 * created on 12/16/15
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.charts.chartJs')
    .controller('chartJs2DCtrl', chartJs2DCtrl);

  /** @ngInject */
  function chartJs2DCtrl($scope) {
    $scope.labels =["May", "Jun", "Jul", "Aug", "Sep"];
    $scope.data = [
      [65, 59, 90, 81, 56],
      [28, 48, 40, 19, 88]
    ];
    $scope.series = ['Product A', 'Product B'];


    $scope.changeData = function () {
      $scope.data[0] = shuffle($scope.data[0]);
      $scope.data[1] = shuffle($scope.data[1]);
    };

    function shuffle(o){
      for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x){}
      return o;
    }
  }

})();