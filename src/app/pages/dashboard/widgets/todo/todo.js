'use strict';

app.directive('blurTodo', function () {
  return {
    restrict: 'A',
    controller: ["$scope", function ($scope) {

      $scope.marks = [
        {
          id: 0,
          color: 'default'
        },
        {
          id: 1,
          color: 'primary'
        },
        {
          id: 2,
          color: 'success'
        },
        {
          id: 3,
          color: 'warning'
        },
        {
          id: 4,
          color: 'danger'
        }
      ];

      $scope.todoList = [
        {
          text: "Check me out",
          edit: false, // todo: remove edit
          markId: 4
        },
        {
          text: "Lorem ipsum dolor sit amet, possit denique oportere at his, etiam corpora deseruisse te pro",
          edit: false,
          markId: 3
        },
        {
          text: "Ex has semper alterum, expetenda dignissim",
          edit: false,
          markId: 2
        },
        {
          text: "Vim an eius ocurreret abhorreant, id nam aeque persius ornatus.",
          edit: false,
          markId: 1
        },
        {
          text: "Simul erroribus ad usu",
          edit: false,
          markId: 0
        },
        {
          text: "Ei cum solet appareat, ex est graeci mediocritatem",
          edit: false,
          markId: 4
        },
        {
          text: "Lorem ipsum dolor sit amet, possit denique oportere at his, etiam corpora deseruisse te pro. Eirmod prompta usu ex, meliore oporteat est ad.",
          edit: false,
          markId: 3
        }
      ];

      $scope.getMarkColor = function (id) {
        return $scope.marks.filter(function (item) {
          return item.id === id;
        })[0].color || '';
      };

      $scope.changeColor = function (todo) {
        for (var i = 0; i < $scope.marks.length; ++i) {
          if ($scope.marks[i].id === todo.markId) {
            var next = (i + 1 !== $scope.marks.length) ? i + 1 : 0;
            todo.markId = $scope.marks[next].id;
            return false;
          }
        }
      };

      $scope.blurOnEnter = function (event, item) {
        if (event.which === 13) {
          item.edit = false;
        }
      };

      $scope.newTodoText = "";

      $scope.addToDoItem = function (event) {
        if (event.which === 13) {
          $scope.todoList.unshift({
            text: $scope.newTodoText,
            edit: false,
            markId: 0
          });
          $scope.newTodoText = "";
        }
      };
    }],
    link: function ($scope, $element, $attrs) {
    }
  };
});