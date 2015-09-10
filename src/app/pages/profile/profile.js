'use strict';

angular.module('BlurAdmin.profilePage', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/profile', {
        templateUrl: '/app/pages/profile/profile.html',
        controller: 'profilePageCtrl'
      });
    }])
    .controller('profilePageCtrl', ['$scope', 'fileReader', function ($scope, fileReader) {
      $scope.picture = "release/img/pic-profile.png";

      $scope.removePicture = function () {
        $scope.picture = "release/img/no-photo.png";
        $scope.noPicture = true;
      };

      $scope.uploadPicture = function () {
        var fileInput = document.getElementById('uploadFile');
        fileInput.click();

      };

      $scope.socialProfiles = [
        {
          name: "Facebook",
          href: "https://www.facebook.com/nasta.kartul",
          icon: "socicon-facebook"
        },
        {
          name: "Twitter",
          icon: "socicon-twitter"
        },
        {
          name: "Google",
          icon: "socicon-google"
        },
        {
          name: "LinkedIn",
          href: "https://www.linkedin.com/profile/view?id=177497038",
          icon: "socicon-linkedin"
        },
        {
          name: "GitHub",
          href: "https://github.com/1itvinka",
          icon: "socicon-github"
        },
        {
          name: "StackOverflow",
          icon: "socicon-stackoverflow"
        },
        {
          name: "Dribbble",
          icon: "socicon-dribble"
        },
        {
          name: "Behance",
          icon: "socicon-behace"
        }
      ];

      $scope.unconnect = function (item) {
        item.href = undefined;
      };

      $scope.showModal = function () {
        $('#profileModal').modal('show');
      };

      $scope.getFile = function () {
        fileReader.readAsDataUrl($scope.file, $scope)
            .then(function (result) {
              $scope.picture = result;
            });
      };

      $scope.switches = [true, true, false, true, true, false];
    }]);