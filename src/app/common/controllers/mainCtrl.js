'use strict';

app.controller('mainCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
  $timeout(function () {
    $scope.finishLoading = true;
  }, 1000);

  $timeout(function () {
    pageLoaded = true;
  }, 4000);
}]);