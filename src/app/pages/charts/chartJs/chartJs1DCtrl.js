/**
 * @author a.demeshko
 * created on 12/16/15
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.charts.chartJs')
    .controller('chartJs1DCtrl', chartJs1DCtrl);

  /** @ngInject */
  function chartJs1DCtrl($scope) {

    $scope.labels =["Sleeping", "Designing", "Coding", "Cycling", "Running"];
    $scope.data = [20, 40, 5, 35, 10];
    $scope.options = {
      segmentStrokeColor : "rgba(0,0,0,0)"
    };
    $scope.changeData = function () {
      $scope.data = shuffle($scope.data);
    };

    function shuffle(o){
      for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x){}
      return o;
    }
  }

})();