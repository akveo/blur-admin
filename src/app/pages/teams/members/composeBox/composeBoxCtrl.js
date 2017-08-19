/**
 * @author a.demeshko
 * created on 24/12/15
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.components.mail')
    .controller('composeBoxCtrl', composeBoxCtrl);

  /** @ngInject */
  function composeBoxCtrl(subject, to, text) {
    var vm = this;
    vm.subject = subject;
    vm.to = to;
    vm.text = text;
  }
})();