/**
 * @author a.demeshko
 * created on 12/16/15
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
    .controller('chartJs1DCtrl', chartJs1DCtrl);

  /** @ngInject */
  function chartJs1DCtrl($scope, baConfig, $http, $interval) {
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
    $scope.progressColors = ['#0BD680', '#FFC93C', '#DBDBDB'];

    $scope.teamLabels = ["Front end", "Back end", "Devops"];
    $scope.teamData = [frontEnd, backEnd, devOps];
    $scope.teamColors = ['#0BD680', '#626EEF', '#FFC93C'];

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

    function getPivotalStories() {
      var projectId = '1993279';

      var version = 'v0.98';

      var queryParams = [
        'token=dbd3bfeb53beb6097fe299ab189e50b8',
        'limit=200',
        'filter=label:"' + version + '" (label:"approved" OR label:"no approval required")'
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

    function getBrowserStackData() {
      var queryParams1 = [
        'type=builds'
      ];

      var queryParams2 = [
        'type=buildSessions'
      ];

      $http({
        method: 'GET',
        url: '/browserstack_php.php' + '?' + queryParams1.join('&')
      }).then(function (data) {
        queryParams2.push('buildId=' + data.data.results[0].automation_build.hashed_id);

        $http({
          method: 'GET',
          url: '/browserstack_php.php' + '?' + queryParams2.join('&')
        }).then(function (response) {
          $scope.behatResults = {
            failed: 0,
            passed: 0,
            windows: {
              chrome: {
                name: 'Chrome',
                passed: 0,
                failed: 0,
                percentage: 0
              },
              firefox: {
                name: 'Firefox',
                passed: 0,
                failed: 0,
                percentage: 0
              },
              ie: {
                name: 'Internet Explorer',
                passed: 0,
                failed: 0,
                percentage: 0
              },
              edge: {
                name: 'Microsoft Edge',
                passed: 0,
                failed: 0,
                percentage: 0
              }
            },
            mac: {
              chrome: {
                name: 'Chrome',
                passed: 0,
                failed: 0,
                percentage: 0
              },
              firefox: {
                name: 'Firefox',
                passed: 0,
                failed: 0,
                percentage: 0
              },
              safari: {
                name: 'Safari',
                passed: 0,
                failed: 0,
                percentage: 0
              }
            }
          };
          function calcPercentage(browser) {
            $scope.behatResults.windows[browser].percentage = (($scope.behatResults.windows[browser].passed / ($scope.behatResults.windows[browser].passed + $scope.behatResults.windows[browser].failed)) * 100).toFixed(2);
          }

          function browserTestLog(test, status) {
            if (test.os === 'Windows') {
              $scope.behatResults.windows[test.browser][status] += 1;

              calcPercentage(test.browser);
            }
          }

          response.data.results.forEach(function (test) {
            var session = test.automation_session;

            if (session.status === 'passed') {
              $scope.behatResults.passed += 1;
              browserTestLog(session, 'passed')
            } else if ((session.status === 'failed')) {
              $scope.behatResults.failed += 1;
              browserTestLog(session, 'failed')
            }
          });
        });
      });
    }

    $interval(getPivotalStories, 120000);
    // $interval(getBrowserStackData, 300000);
    getPivotalStories();
    // getBrowserStackData();
  }

})();
