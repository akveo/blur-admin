/**
 * @author a.demeshko
 * created on 28.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.teams.lists')
    .controller('ListsTabCtrl', ListsTabCtrl);

  /** @ngInject */
  function ListsTabCtrl($scope, baConfig, membersList, ListService, $log) {


    function loadLists() {
      ListService
        .list()
        .then(function (data){
					$scope.Lists = data;
					$log.info("Got the survey data",data);
        }, function (error){
          $log.error(error);
        });
    }

    function activate(){
	  $scope.Lists = [];

      loadLists();
    }

    activate();



    
    $scope.transparent = baConfig.theme.blur;
    var dashboardColors = baConfig.colors.dashboard;
    var colors = [];
    for (var key in dashboardColors) {
      colors.push(dashboardColors[key]);
    }



    function getRandomColor() {
      var i = Math.floor(Math.random() * (colors.length - 1));
      return colors[i];
    }

    $scope.tabs = membersList.getTabs();

    $scope.searchResult = membersList.getAllMessages();

    

    $scope.Lists.forEach(function(item) {
      item.color = getRandomColor();
    });

    $scope.newTodoText = 'tech';
    $scope.listMembers = [];
    $scope.selectedLabel = "listing";

    $scope.addNewList = function (event, clickPlus) {
      if (clickPlus || event.which === 13) {
        /*$scope.Lists.unshift({
          name: $scope.newTodoText,
          color: getRandomColor(),
        });*/
		var list = {"name" : $scope.newTodoText};
		ListService.create(list);
		loadLists();
        $scope.newTodoText = '';
      }
    };


    $scope.updateMembers = function (index) {
	  //uncheck others lists
	  for(var i = 0; i<$scope.Lists.length; i++)
		{
			if(i != index)
		   		$scope.Lists[i].isChecked = false;
		}

	  //getting members info
	  $scope.listMembers = []; 
      var membersIds = $scope.Lists[index].members;
      angular.forEach(membersIds, function(id){
      	 var member = membersList.getMemberById(id);
	     $scope.listMembers.push( member );
	    });
      console.log($scope.listMembers);
    };

    $scope.getMemberByLabel = function (label) {
      console.log(label);
      $scope.searchResult = membersList.getMembersByLabel(label);
    }; 

    $scope.removeMember = function (index) {
      if (confirm("Are you sure?"))
           {
               //$scope.Lists[index].deleted = true;
           }
    };

    $scope.removeList = function (index) {
      if (confirm("Are you sure?"))
           {
               $scope.Lists[index].deleted = true;
           }
    };
  }

})();
