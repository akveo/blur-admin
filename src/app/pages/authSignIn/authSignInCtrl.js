(function() {
  'use strict';

  angular.module('BlurAdmin.pages.authSignIn')
    .controller('authSignInCtrl', authSignInCtrl);

  /** @ngInject */
  function authSignInCtrl($scope, localStorage, $state) {
    var vm = this;

    vm.logar = logar;

    init();

    function init() {
      localStorage.clear();
    }

    function logar() {
      var dadosUser = {
        user: vm.user,
        passWord: vm.passWord
      };
      localStorage.setObject('dataUser', dadosUser);
      $state.go('main.dashboard');
    }


  }

})();