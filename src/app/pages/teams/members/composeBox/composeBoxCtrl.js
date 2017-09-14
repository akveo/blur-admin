/**
 * @author a.demeshko
 * created on 24/12/15
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.teams.members')
    .controller('composeBoxCtrl', composeBoxCtrl);

  /** @ngInject */
  function composeBoxCtrl($scope ,member, membersList,MemberService,fileReader, $filter, toastr, $state) {
    var vm = this;
    vm.member = member;
    //vm.actualIndex = actualIndex;
    //console.log("member",member)
    vm.picture = $filter('profilePicture')(member.id, "jpeg") ;//: $filter('appImage')('theme/no-photo.png');
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
      //vm.member.picture = vm.picture;
      //vm.member.fileExt = "jpeg";

      console.log('composeBoxCtrl.updateMember', membersList.getIndexById(vm.member.id), vm.member);
    };

    vm.createMember = function () {
      vm.member.picture = vm.picture.replace(/^data:image\/(png|jpg|jpeg);base64,/, "");
      vm.member.fileExt = "jpeg";

      MemberService
        .create(vm.member)
        .then(function (data){
          vm.member = {}
          $state.go('teams.members');
          
          toastr.info('The member was created successfuly :)', 'Members', {
                      "autoDismiss": true,
                      "positionClass": "toast-bottom-right",
                      "type": "success",
                      "timeOut": "5000",
                      "extendedTimeOut": "2000"
                    })
        }, function (error){
          $log.error(error);
          toastr.error('There were an error creating the memeber', 'Members', {
                      "autoDismiss": true,
                      "positionClass": "toast-bottom-right",
                      "type": "error",
                      "timeOut": "5000",
                      "extendedTimeOut": "2000"
                    })
        });

    };
  }
})();