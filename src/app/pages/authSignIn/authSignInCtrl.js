(function() {
  'use strict';

  angular.module('BlurAdmin.pages.authSignIn')
    .controller('authSignInCtrl', authSignInCtrl);

  /** @ngInject */
  function authSignInCtrl($scope, localStorage, $state, AuthService) {
    var vm = this;


    vm.login = login;

    init();

    function init() {
      localStorage.clear();
      vm.error = ""
    }

    function login() {
      var userObject = {
        email: vm.email,
        password: vm.password
      };
      AuthService
          .login(userObject)
          .then(
            function (data){
              if (data.token && data.user) {

                  localStorage.setObject('user', data.user);
                  localStorage.setObject('token', data.token);
                  $state.go('main.dashboard');
              }
              console.log("AuthService loggedin",data)
            },
            function (error){
              vm.error = "There were an error logging you in"
              console.log("Error", error);
            }
          ); 
      
    }


  }

})();
