'use strict';

app.controller('notificationsCtrl', ["$scope", "toastr", function ($scope, toastr) {

  $scope.showSuccessMsg = function() {
    toastr.success('Your information has been saved successfully!');
  };

  $scope.showInfoMsg = function() {
    toastr.info("You've got a new email!", 'Information');
  };

  $scope.showErrorMsg = function() {
    toastr.error("Your information hasn't been saved!", 'Error');
  };

  $scope.showWarningMsg = function() {
    toastr.warning('Your computer is about to explode!', 'Warning');
  };
}]);