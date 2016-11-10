/**
 * @author qdequippe
 * created on 10.11.2016
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.login')
    .controller('LoginPageCtrl', LoginPageCtrl);

  /** @ngInject */
  function LoginPageCtrl() {
    var vm = this;
    vm.email = 'me@example.com';
  }

})();
