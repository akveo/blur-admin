'use strict';

blurAdminApp.directive('msgCenter', function () {
  return {
    restrict: 'E',
    templateUrl: 'app/components/msgCenter/msgCenter.html',
    controller: ['$scope', '$sce', function($scope, $sce){

      $scope.users = {
        0: {
          name: 'Vladimir',
          image: 'img/pic-vova.png'
        },
        1: {
          name: 'Konstantin',
          image: 'img/pic-kostia.png'
        },
        2: {
          name: 'Andrey',
          image: 'img/pic-andrey.png'
        },
        3: {
          name: 'Anastasiya',
          image: 'img/pic-nasta.png'
        }
      };

      $scope.notifications = [
        {
          userId: 0,
          template: '&name posted a new article.',
          time: '1 min ago'
        },
        {
          userId: 1,
          template: '&name changed his contact information.',
          time: '2 hrs ago'
        },
        {
          image: 'img/shopping-cart.svg',
          template: 'New orders received.',
          time: '5 hrs ago'
        },
        {
          userId: 2,
          template: '&name replied to your comment.',
          time: '1 day ago'
        },
        {
          userId: 3,
          template: 'Today is &name\'s birthday.',
          time: '2 days ago'
        },
        {
          image: 'img/comments.svg',
          template: 'New comments on your post.',
          time: '3 days ago'
        },
        {
          userId: 1,
          template: '&name invited you to join the event.',
          time: '1 week ago'
        }
      ];

      $scope.messages = [
        {
          userId: 3,
          text: 'After you get up and running, you can place Font Awesome icons just about...',
          time: '1 min ago'
        },
        {
          userId: 0,
          text: 'You asked, Font Awesome delivers with 40 shiny new icons in version 4.2.',
          time: '2 hrs ago'
        },
        {
          userId: 1,
          text: 'Want to request new icons? Here\'s how. Need vectors or want to use on the...',
          time: '10 hrs ago'
        },
        {
          userId: 2,
          text: 'Explore your passions and discover new ones by getting involved. Stretch your...',
          time: '1 day ago'
        },
        {
          userId: 3,
          text: 'Get to know who we are - from the inside out. From our history and culture, to the...',
          time: '1 day ago'
        },
        {
          userId: 1,
          text: 'Need some support to reach your goals? Apply for scholarships across a variety of...',
          time: '2 days ago'
        },
        {
          userId: 0,
          text: 'Wrap the dropdown\'s trigger and the dropdown menu within .dropdown, or...',
          time: '1 week ago'
        }
      ];

      $scope.getMessage = function(msg) {
        var text = msg.template;
        if (msg.userId || msg.userId === 0) {
          text = text.replace('&name', '<strong>' + $scope.users[msg.userId].name + '</strong>');
        }
        return $sce.trustAsHtml(text);
      };
    }]
  };
});
