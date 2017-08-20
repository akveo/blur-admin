/**
 * @author a.demeshko
 * created on 24/12/15
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.teams.members')
    .controller('composeBoxCtrl', composeBoxCtrl);

  /** @ngInject */
  function composeBoxCtrl(message,fileReader, $filter) {
    var vm = this;
    vm.message = message;
    vm.picture = (message.pic && message.pic != "") ? $filter('profilePicture')(message.name.split(' ')[0]) : $filter('appImage')('theme/no-photo.png');

    vm.removePicture = function () {
      vm.picture = $filter('appImage')('theme/no-photo.png');
      vm.noPicture = true;
    };

    vm.uploadPicture = function () {
      var fileInput = document.getElementById('uploadFile');
      fileInput.click();

    };

    vm.getFile = function () {
      fileReader.readAsDataUrl(vm.file, vm)
          .then(function (result) {
            vm.picture = result;
          });
    };
  }
})();