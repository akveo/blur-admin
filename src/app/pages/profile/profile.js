'use strict';

angular.module('BlurAdmin.profilePage', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/profile', {
        templateUrl: '/app/pages/profile/profile.html',
        controller: 'profilePageCtrl'
      });
    }])
    .controller('profilePageCtrl', ['$scope', function ($scope) {
      $scope.picture = "release/img/photo.png";

      $scope.removePicture = function () {
        $scope.picture = "/release/img/no-photo.png";
        $scope.noPicture = true;
      };

      $scope.uploadPicture = function () {
        var fileInput = document.getElementById('uploadFile');
        fileInput.click();
      };

      $scope.socialProfiles = [
        {
          connected: true,
          name: "Facebook",
          href: "https://www.facebook.com/nasta.kartul",
          icon: "socicon-facebook"
        },
        {
          connected: false,
          name: "Twitter",
          href: "javascript:void(0)",
          icon: "socicon-twitter"
        },
        {
          connected: false,
          name: "Google",
          href: "javascript:void(0)",
          icon: "socicon-google"
        },
        {
          connected: true,
          name: "LinkedIn",
          href: "https://www.linkedin.com/profile/view?id=177497038",
          icon: "socicon-linkedin"
        },
        {
          connected: true,
          name: "GitHub",
          href: "https://github.com/1itvinka",
          icon: "socicon-github"
        },
        {
          connected: false,
          name: "StackOverflow",
          href: "javascript:void(0)",
          icon: "socicon-stackoverflow"
        },
        {
          connected: false,
          name: "Dribbble",
          href: "javascript:void(0)",
          icon: "socicon-dribble"
        },
        {
          connected: false,
          name: "Behance",
          href: "javascript:void(0)",
          icon: "socicon-behace"
        }
      ];

      $scope.unconnect = function (item) {
        item.connected = false;
        item.href = "javascript:void(0)";
      };

      $scope.showModalOrLink = function (item) {
        if (!item.connected) {
          $('#profileModal').modal('show');
        }
      };

      $scope.switches = [true, true, false, true, true, false];


    }]);