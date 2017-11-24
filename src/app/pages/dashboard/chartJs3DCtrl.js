/**
 * @author a.demeshko
 * created on 12/16/15
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
    .controller('chartJs3DCtrl', chartJs3DCtrl);

  /** @ngInject */
  function chartJs3DCtrl($scope, $http, $filter, $interval) {
    var users;
    var stories;

    $scope.workInProgress = [];

    function getPivotalStories() {
      var projectId = '1993279';

      var version = 'v0.98';

      var queryParams = [
        'token=dbd3bfeb53beb6097fe299ab189e50b8',
        'limit=200',
        'filter=label:"' + version + '" state:started (label:"approved" OR label:"no approval required")'
      ];

      var url = 'https://www.pivotaltracker.com/services/v5/projects/' + projectId + '/stories';

      return $http({
        method: 'GET',
        url: url + '?' + queryParams.join('&')
      });
    }

    function getPivotalUsers() {
      var projectId = '1993279';

      var auth = '?token=dbd3bfeb53beb6097fe299ab189e50b8';

      var url = 'https://www.pivotaltracker.com/services/v5/projects/' + projectId + '/memberships';

      $http({
        method: 'GET',
        url: url + auth
      }).then(function (response) {
        getPivotalStories().then(function (data) {
          $scope.workInProgress = [];
          users = response.data;
          stories = data.data;

          users.forEach(function (user) {
            var items = $filter('filter')(stories, {owned_by_id: user.person.id});

            items.forEach(function (ignore, index) {
              items[index].owner = user.person;
            });

            $scope.workInProgress = $scope.workInProgress.concat(items);
          });
        });
      });
    }

    $interval(getPivotalUsers, 120000);
    getPivotalUsers();
  }

})();