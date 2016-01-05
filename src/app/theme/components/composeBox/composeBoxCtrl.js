/**
 * @author a.demeshko
 * created on 24/12/15
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme.components')
    .controller('composeBoxCtrl', composeBoxCtrl);

  /** @ngInject */
  function composeBoxCtrl($scope, $uibModalInstance, subject, to, text) {

    $scope.subject = subject;
    $scope.to = to;
    $scope.text = text;
    console.log(subject, to , text);
    $scope.close = function () {
      $uibModalInstance.dismiss('cancel');
    };
  }
})();