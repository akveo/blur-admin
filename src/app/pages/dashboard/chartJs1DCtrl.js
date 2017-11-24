/**
 * @author a.demeshko
 * created on 12/16/15
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
    .controller('chartJs1DCtrl', chartJs1DCtrl);

  /** @ngInject */
  function chartJs1DCtrl($scope, baConfig, $http, $q) {
    var layoutColors = baConfig.colors;
    var stories = [];

    var complete = 0;
    var inProgress = 0;
    var toDo = 0;

    var frontEnd = 0;
    var backEnd = 0;
    var devOps = 0;
    

    $scope.progressLabels = ["Complete", "In progress", "To do"];
    $scope.progressData = [complete, inProgress, toDo];

    $scope.teamLabels = ["Front end", "Back end", "Devops"];
    $scope.teamData = [frontEnd, backEnd, devOps];

    $scope.options = {
      elements: {
        arc: {
          borderWidth: 0
        }
      },
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          fontColor: layoutColors.defaultText
        }
      }
    };

    $scope.changeData = function () {
      console.log('click!')
    };

    function shuffle(o){
      for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x){}
      return o;
    }

    // function returnSessionsFromBrowserstackPromise(buildId) {
    //   var headers = {
    //     'Authorization': 'danneh1:5gXqwjkDjBtTiLVmvsLV'
    //   };

    //   // var url = 'https://www.browserstack.com/automate/builds/' + buildId + '/sessions.json';
    //   var url = 'https://www.browserstack.com/automate/projects.json';

    //   $http({
    //     method: 'GET',
    //     url: url
    //   }).then(function(response){
    //     console.log('response', response);
    //   });
    // }

    // returnSessionsFromBrowserstackPromise('2f7a6dca052a67852693cd3bdef03356255e0745');


    function getPivotalStories() {
      var projectId = '1993279';

      // var auth = '?token=dbd3bfeb53beb6097fe299ab189e50b8';

      var queryParams = [
        'token=dbd3bfeb53beb6097fe299ab189e50b8',
        'limit=200',
        'filter=label:"v0.98" (label:"approved" OR label:"no approval required")'
      ];

      var url = 'https://www.pivotaltracker.com/services/v5/projects/' + projectId + '/stories';

      $http({
        method: 'GET',
        url: url + '?' + queryParams.join('&')
      }).then(function (response) {
        stories = response.data;

        complete = 0;
        inProgress = 0;
        toDo = 0;

        frontEnd = 0;
        backEnd = 0;
        devOps = 0;

        stories.forEach(function (story) {
          if (story.current_state === 'accepted' && story.estimate >= 0) {
            complete += story.estimate;
          } else if (story.current_state === 'unstarted' && story.estimate >= 0) {
            toDo += story.estimate;
          } else if (story.estimate >= 0) {
            inProgress += story.estimate;
          }

          story.labels.forEach(function (label) {
            if (label.name === 'back end' && story.estimate >= 0) {
              backEnd += story.estimate;
            } else if (label.name === 'front end' && story.estimate >= 0) {
              frontEnd += story.estimate;
            } else if (label.name === 'devops' && story.estimate >= 0) {
              devOps += story.estimate;
            }
          });
        });

        $scope.progressData = [complete, inProgress, toDo];
        $scope.teamData = [frontEnd, backEnd, devOps];
      });
    }

    getPivotalStories();
  }

})();