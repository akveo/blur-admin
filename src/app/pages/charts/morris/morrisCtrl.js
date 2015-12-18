/**
 * @author a.demeshko
 * created on 12/16/15
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.charts.morris')
    .controller('morrisCtrl', morrisCtrl);

  /** @ngInject */
  function morrisCtrl($scope,layoutColors) {
    $scope.colors = [layoutColors.primary, layoutColors.danger, layoutColors.warning, layoutColors.success, layoutColors.default, layoutColors.primaryDark];
  }

})();