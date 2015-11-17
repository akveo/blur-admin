'use strict';

blurAdminApp.directive('blurFeed', function () {
  return {
    restrict: 'E',
    controller: ['$scope', function ($scope) {
      $scope.feed = [
        {
          type: 'text-message',
          author: 'Kostya',
          header: 'posted new message',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur erat felis, laoreet porta enim non, malesuada suscipit lectus. Duis auctor interdum tellus vitae vulputate. Etiam ligula nulla, maximus eget sem a, sollicitudin tempor tortor. Etiam venenatis vitae magna vel tincidunt. Mauris aliquam finibus tincidunt. Pellentesque ut velit sed nulla mattis pellentesque in ac diam. Suspendisse at dolor eget ipsum egestas ultrices.',
          time: 'Today 11:55 pm',
          ago: '25 minutes ago',
        }, {
          type: 'video-message',
          author: 'Nasta',
          header: 'added new video',
          text: '"Best practices of web development.mkv"',
          time: 'Today 9:30 pm',
          ago: '3 hrs ago',
        }, {
          type: 'image-message',
          author: 'Vlad',
          header: 'added new image',
          text: '"My little kitten.png"',
          time: 'Today 2:20 pm',
          ago: '10 hrs ago',
        }, {
          type: 'text-message',
          author: 'Andrey',
          header: 'posted new message',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur erat felis, laoreet porta enim non, malesuada suscipit lectus. Duis auctor interdum tellus vitae vulputate. Etiam ligula nulla, maximus eget sem a, sollicitudin tempor tortor. Etiam venenatis vitae magna vel tincidunt. Mauris aliquam finibus tincidunt.',
          time: 'Yesterday 3:20 pm',
          ago: 'a day ago',
        }, {
          type: 'geo-message',
          author: 'Kolya',
          header: 'posted location',
          text: 'New York, NY, USA',
          time: 'Yesterday 11:37 am',
          ago: 'a day ago',
        }, {
          type: 'text-message',
          author: 'Vlad',
          header: 'posted new message',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur erat felis, laoreet porta enim non, malesuada suscipit lectus.',
          time: 'Yesterday 10:45 am',
          ago: 'a day ago',
        }, {
          type: 'text-message',
          author: 'Andrey',
          header: 'posted new message',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur erat felis, laoreet porta enim non, malesuada suscipit lectus. Duis auctor interdum tellus vitae vulputate. Etiam ligula nulla, maximus eget sem a, sollicitudin tempor tortor.',
          time: 'Yesterday 9:21 am',
          ago: 'a day ago',
        }
      ];
    }],
    templateUrl: 'app/pages/dashboard/widgets/blurFeed/blurFeed.html'
  };
});

