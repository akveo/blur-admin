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
          text: 'Guys, check this out: \nA police officer found a perfect hiding place for watching for speeding motorists. One day, the officer was amazed when everyone was under the speed limit, so he investigated and found the problem. A 10 years old boy was standing on the side of the road with a huge hand painted sign which said "Radar Trap Ahead." A little more investigative work led the officer to the boy\'s accomplice: another boy about 100 yards beyond the radar trap with a sign reading "TIPS" and a bucket at his feet full of change.',
          time: 'Today 11:55 pm',
          ago: '25 minutes ago',
        }, {
          type: 'video-message',
          author: 'Andrey',
          header: 'added new video',
          text: 'Vader and Me',
          preview: 'vader-and-me-preview',
          link: 'https://www.youtube.com/watch?v=IfcpzBbbamk',
          time: 'Today 9:30 pm',
          ago: '3 hrs ago',
        }, {
          type: 'image-message',
          author: 'Vlad',
          header: 'added new image',
          text: 'My little kitten',
          preview: 'my-little-kitten',
          link: 'http://api.ning.com/files/DtcI2O2Ry7A7VhVxeiWfGU9WkHcMy4WSTWZ79oxJq*h0iXvVGndfD7CIYy-Ax-UAFCBCdqXI4GCBw3FOLKTTjQc*2cmpdOXJ/1082127884.jpeg',
          time: 'Today 2:20 pm',
          ago: '10 hrs ago',
        }, {
          type: 'text-message',
          author: 'Nasta',
          header: 'posted new message',
          text: 'Haha lol',
          time: '11.11.2015',
          ago: '2 days ago',
        }, {
          type: 'geo-message',
          author: 'Nick',
          header: 'posted location',
          text: 'New York, USA',
          preview: 'new-york-location',
          link: 'https://www.google.by/maps/place/New+York,+NY,+USA/@40.7201111,-73.9893872,14z',
          time: '11.11.2015',
          ago: '2 days ago',
        }, {
          type: 'text-message',
          author: 'Vlad',
          header: 'posted new message',
          text: "First snake: I hope I'm not poisonous. Second snake: Why? First snake: Because I bit my lip!",
          time: '12.11.2015',
          ago: '3 days ago',
        }, {
          type: 'text-message',
          author: 'Andrey',
          header: 'posted new message',
          text: 'How do you smuggle an elephant across the border? Put a slice of bread on each side, and call him "lunch".',
          time: '14.11.2015',
          ago: '5 days ago',
        }
      ];
    }],
    templateUrl: 'app/pages/dashboard/widgets/blurFeed/blurFeed.html'
  };
});

