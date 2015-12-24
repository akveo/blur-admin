(function () {
  'use strict';

  angular.module('BlurAdmin.pages.form')
      .controller('WizardCtrl', WizardCtrl)
      .directive('baWizard', baWizard)
      .directive('baWizardTab', baWizardTab);

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

  function baWizard() {
    return {
      restrict: 'E',
      transclude: true,
      scope: {},
      templateUrl: 'app/pages/form/wizard/wizard.html',
      controller: ['$scope', function ($scope) {
        var vm = this;
        $scope.tabs = [];

        $scope.tabNum = 0;
        $scope.progress = 0;

        vm.addTab = function(tab) {
          $scope.tabs.push(tab);
          $scope.selectTab(0);
        };

        $scope.$watch('tabNum', countProgress);

        $scope.selectTab = function (tabNum) {
          $scope.tabNum = tabNum;
          $scope.tabs.forEach(function (t, tIndex) {
            tIndex == $scope.tabNum ? t.select(true) : t.select(false);
          });
        };

        $scope.isFirstTab = function () {
          return $scope.tabNum == 0;
        };

        $scope.isLastTab = function () {
          return $scope.tabNum == $scope.tabs.length - 1 ;
        };

        $scope.nextTab = function () {
          $scope.tabNum++;
        };

        $scope.previousTab = function () {
          $scope.tabNum--;
        };

        function countProgress() {
          $scope.progress = (($scope.tabNum + 1) / $scope.tabs.length) * 100;
        }
      }]
    }
  }

  function baWizardTab() {
    return {
      restrict: 'E',
      transclude: true,
      scope: {
        title: '@'
      },
      require: '^baWizard',
      templateUrl:  'app/pages/form/wizard/tab.html',
      link: function($scope, $element, $attrs, wizard) {
        $scope.selected = false;
        $scope.select = function(isSelected) {
           if (isSelected) {
             $scope.selected = true;
           } else {
             $scope.selected = false;
           }
        } ;
        wizard.addTab($scope);
      }
    };
  }

})();

