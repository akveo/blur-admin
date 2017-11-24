/**
 * @author a.demeshko
 * created on 12/16/15
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.charts.chartJs')
    .controller('chartJs1DCtrl', chartJs1DCtrl);

  /** @ngInject */
  function chartJs1DCtrl($scope, baConfig, $http) {
    var layoutColors = baConfig.colors;

    $http.defaults.headers.common.Authorization = 'Basic cmljaGFyZG1vaGFtbWVkMTpzanZKRnozTk5DektuU041alJ5SA==';

    $scope.labels =["Sleeping", "Designing", "Coding", "Cycling"];
    $scope.data = [20, 40, 5, 35];
    $scope.options = {
      elements: {
        arc: {
          borderWidth: 0
        }
      },
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          fontColor: layoutColors.defaultText
        }
      }
    };

    $scope.changeData = function () {
      $scope.data = shuffle($scope.data);
    };

    function shuffle(o){
      for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x){}
      return o;
    }

    function returnSessionsFromBrowserstackPromise(buildId){
      return $http.get('https://www.browserstack.com/automate/builds/' + buildId + '/sessions.json').then(function(){
        
      });
    }
  }

})();