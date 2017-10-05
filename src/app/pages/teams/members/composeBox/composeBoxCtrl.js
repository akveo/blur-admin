/**
 * @author a.demeshko
 * created on 24/12/15
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.teams.members')
    .controller('composeBoxCtrl', composeBoxCtrl);

  /** @ngInject */
  function composeBoxCtrl($scope ,member,MemberService,fileReader, $filter, toastr, $state, composeModal, appConfig) {
    var vm = this;
    vm.successToastrOption = {
                        "autoDismiss": true,
                        "positionClass": "toast-bottom-right",
                        "type": "success",
                        "timeOut": "5000",
                        "extendedTimeOut": "2000"
                      }
    vm.errorToastrOption = {
                        "autoDismiss": true,
                        "positionClass": "toast-bottom-right",
                        "type": "error;",
                        "timeOut": "5000",
                        "extendedTimeOut": "2000"
                      }
    vm.member = member;
    //vm.actualIndex = actualIndex;
    //console.log("member",member)
    vm.picture = $filter('profilePicture')(member.id, "jpeg") ;//: $filter('appImage')('theme/no-photo.png');
    vm.Labels = appConfig.tabs;

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
      vm.member.picture = vm.picture.replace(/^data:image\/(png|jpg|jpeg);base64,/, "");
      vm.member.fileExt = "jpeg";

      MemberService
          .put(vm.member)
          .then(function (data){
            vm.member = {}
            vm.picture = $filter('profilePicture')('undefined', "jpeg") ;
            $state.go('main.teams.members');
            toastr.info('The member was updated successfuly :)', 'Members', vm.successToastrOption)
          }, function (error){
            $log.error(error);
            toastr.error('There were an error updating the memeber', 'Members', vm.errorToastrOption)
          });
    };

    vm.createMember = function () {
      vm.member.picture = vm.picture.replace(/^data:image\/(png|jpg|jpeg);base64,/, "");
      vm.member.fileExt = "jpeg";

      console.log(vm.member);
      if(vm.member.id)
        vm.updateMember()
      else
        MemberService
          .create(vm.member)
          .then(function (data){
            vm.member = {}
            vm.picture = $filter('profilePicture')('undefined', "jpeg") ;
            $state.go('main.teams.members');
            toastr.info('The member was created successfuly :)', 'Members', vm.successToastrOption)
          }, function (error){
            $log.error(error);
            toastr.error('There were an error creating the memeber', 'Members', vm.errorToastrOption)
          });

    };
  }
})();