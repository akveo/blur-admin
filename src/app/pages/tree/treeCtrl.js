/**
 * @author a.demeshko
 * created on 12/21/15
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.tree')
    .controller('treeCtrl', treeCtrl);

  /** @ngInject */
  function treeCtrl($scope, $timeout) {

    var getRootNodesScope = function () {
      return angular.element(document.getElementById('tree-root')).scope();
    };

    var getFirstNode = function () {
      return angular.element(document.getElementsByClassName("tree-node")[0]).scope();
    };

    $scope.select = function (item) {
      $scope.current.selected = false;
      $scope.current = item;
      $scope.current.selected = true;
    };

    $scope.remove = function () {
      $scope.current.remove();
      $scope.current = getFirstNode();
      $scope.current.selected = true;
    };

    $scope.toggle = function (scope) {
      scope.toggle();
    };

    $scope.newSubItem = function () {
      var nodeData = $scope.current.$modelValue;
      nodeData.nodes.push({
        id: nodeData.id * 10 + nodeData.nodes.length,
        title: nodeData.title + '.' + (nodeData.nodes.length + 1),
        nodes: []
      });
    };

    $scope.collapseAll = function () {
      var scope = getRootNodesScope();
      scope.collapseAll();
    };

    $scope.expandAll = function () {
      var scope = getRootNodesScope();
      scope.expandAll();
    };

    $scope.visible = function (item) {
      return !($scope.query && $scope.query.length > 0
      && item.title.indexOf($scope.query) == -1);
    };

    $scope.basicData = getDefaultData();

    $scope.refresh = function () {
      $scope.basicData = getDefaultData();
      $scope.current = getFirstNode();
      if ($scope.current) $scope.current.selected = true;
      else $scope.current = {};
    };

    $scope.treeOptions = {
      beforeDrop: function (e) {
        var sourceValue = e.source.nodeScope.$modelValue.value,
          destValue = e.dest.nodesScope.node ? e.dest.nodesScope.node.value : undefined;
        return true;
      }
    };

    function getDefaultData() {
      return [

            {
              'id': 1,
              'title': 'Node 1',
              'nodes': [
                {
                  'id': 11,
                  'title': 'Node 1.1',
                  'nodes': [
                    {
                      'id': 111,
                      'title': 'Node 1.1.1',
                      'nodes': []
                    }
                  ]
                },
                {
                  'id': 12,
                  'title': 'Node 1.2',
                  'nodes': []
                }
              ]
            }, {
              'id': 2,
              'title': 'Node 2',
              'nodes': [
                {
                  'id': 21,
                  'title': 'Node 2.1',
                  'nodes': []
                },
                {
                  'id': 22,
                  'title': 'Node 2.2',
                  'nodes': []
                }
              ]
            }, {
              'id': 3,
              'title': 'Node 3',
              'nodes': [
                {
                  'id': 31,
                  'title': 'Node 3.1',
                  'nodes': []
                },
                {
                  'id': 32,
                  'title': 'Node 3.2',
                  'nodes': [{
                    'id': 321,
                    'title': 'Node 3.2.1',
                    'nodes': []
                  },
                    {
                      'id': 322,
                      'title': 'Node 3.2.2',
                      'nodes': []
                    },
                    {
                      'id': 323,
                      'title': 'Node 3.2.3',
                      'nodes': []
                    }]
                }
              ]
            },
            {
              'id': 4,
              'title': 'Node 4',
              'nodes': [
                {
                  'id': 41,
                  'title': 'Node 4.1',
                  'nodes': []
                }]
            }]

    }
    $scope.dragData = [
      {
        "id": 1,
        "title": "Node 1",
        "nodes": [
          {
            "id": 11,
            "title": "Node 1.1",
            "nodes": []
          },
          {
            "id": 12,
            "title": "Node 1.2",
            "nodes": []
          },
          {
            "id": 12,
            "title": "Node 1.3",
            "nodes": []
          },
          {
            "id": 13,
            "title": "Node 1.4",
            "nodes": []
          }
        ]
      },
      {
        "id": 2,
        "title": "Node 2",
        "nodes": [
          {
            "id": 21,
            "title": "Node 2.1",
            "nodes": []
          },
          {
            "id": 22,
            "title": "Node 2.2",
            "nodes": []
          },
          {
            "id": 22,
            "title": "Node 2.3",
            "nodes": []
          },
          {
            "id": 23,
            "title": "Node 2.4",
            "nodes": []
          }
        ]
      },
      {
        "id": 3,
        "title": "Node 3",
        "nodes": [
          {
            "id": 31,
            "title": "Node 3.1",
            "nodes": []
          },
          {
            "id": 31,
            "title": "Node 3.2",
            "nodes": []
          },
          {
            "id": 32,
            "title": "Node 3.3",
            "nodes": []
          },
          {
            "id": 33,
            "title": "Node 3.4",
            "nodes": []
          }
        ]
      }
    ];
    $scope.find = function(){};

    $timeout(function () {
      $scope.current = getFirstNode();
      if ($scope.current) $scope.current.selected = true;
      else $scope.current = {};
    }, 1000);

  }
})();