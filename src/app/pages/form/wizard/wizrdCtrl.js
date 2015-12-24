(function () {
  'use strict';

  angular.module('BlurAdmin.pages.form')
    .controller('WizardCtrl', WizardCtrl);

  /** @ngInject */
  function WizardCtrl($scope, $location, $sce) {
    $scope.tabs = [
      {
        name: 'Step 1'
      },
      {
        name: 'Step 2'
      },
      {
        name: 'Step 3'
      }];

    $scope.$watch('tab', countProgress);

    $scope.selectTab = function (tab) {
      $scope.tab = tab;
    };

    $scope.isSelectedTab = function (tab) {
      return $scope.tab === tab;
    };

    $scope.isFirstTab = function () {
      return $scope.tab == 0;
    };

    $scope.isLastTab = function () {
      return $scope.tab == $scope.tabs.length - 1 ;
    };

    $scope.nextTab = function () {
      $scope.tab++;
    };

    $scope.previousTab = function () {
      $scope.tab--;
    };

    function countProgress() {
      $scope.progress = (($scope.tab + 1) / $scope.tabs.length) * 100;
    }

    $scope.tab = 0;
    $scope.progress = 0;
  }

})();

