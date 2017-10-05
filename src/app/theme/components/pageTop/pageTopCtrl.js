/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme.components')
      .controller('PageTopCtrl', PageTopCtrl);

  /** @ngInject */
  function PageTopCtrl($scope, localStorage) {
    $scope.user = {};
    if (localStorage.getObject('user'))
    	$scope.user = localStorage.getObject('user')

    /*$scope.getMessage = function(msg) {
      var text = msg.template;
      if (msg.userId || msg.userId === 0) {
        text = text.replace('&name', '<strong>' + $scope.users[msg.userId].name + '</strong>');
      }
      return $sce.trustAsHtml(text);
    };*/
  }
})();