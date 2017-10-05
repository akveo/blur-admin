(function() {
  'use strict';

  angular.module('BlurAdmin.pages.authSignIn')
    .controller('logoutCtrl', logoutCtrl);

  /** @ngInject */
  function logoutCtrl($scope, localStorage, $state) {
    var vm = this;

    init();

    function init() {
      localStorage.clear();
      $state.transitionTo("authSignIn");
    }
  }

})();
