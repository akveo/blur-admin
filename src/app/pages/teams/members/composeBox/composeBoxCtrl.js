/**
 * @author a.demeshko
 * created on 24/12/15
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.teams.members')
    .controller('composeBoxCtrl', composeBoxCtrl);

  /** @ngInject */
  function composeBoxCtrl($scope ,member, membersList,MemberService,fileReader, $filter) {
    var vm = this;
    vm.member = member;
    //vm.actualIndex = actualIndex;
    vm.picture = (member.pic && member.pic != "") ? $filter('profilePicture')(member.name.split(' ')[0]) : $filter('appImage')('theme/no-photo.png');
    vm.Labels = membersList.getTabs();

    $scope.removePicture = function () {
      vm.picture = $filter('appImage')('theme/no-photo.png');
      vm.noPicture = true;
    };

    $scope.uploadPicture = function () {
      var fileInput = document.getElementById('uploadFile');
      fileInput.click();

    };

    $scope.getFile = function () {
      fileReader.readAsDataUrl($scope.file, $scope)
          .then(function (result) {
            vm.picture = result;
          });
    };

    vm.updateMember = function () {
      console.log(membersList.getIndexById(vm.member.id), vm.member);
    };

    vm.createMember = function () {
      MemberService.create(vm.member);
    };
  }
})();