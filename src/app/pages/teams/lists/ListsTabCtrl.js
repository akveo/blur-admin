/**
 * @author a.demeshko
 * created on 28.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.teams.lists')
    .controller('ListsTabCtrl', ListsTabCtrl);

  /** @ngInject */
  function ListsTabCtrl($scope, baConfig, membersList) {
    
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

    $scope.Lists = [
      { name: 'Check me out yeah', deleted : false, members : ['4563faass', '4563fdfvd'] },
      { name: 'Lorem ipsum', deleted : false, members : ['4563zxcss', '8955sddf'] },
      { name: 'Ex has semper', deleted : false, members : ['8955sdfcc', '8955sddf'] },
      { name: 'Vim an eius', deleted : false, members : ['8955sddf', '4563faass'] },
    ];

    $scope.Lists.forEach(function(item) {
      item.color = getRandomColor();
    });

    $scope.newTodoText = '';
    $scope.listMembers = [{ name: 'Nasta Linnie'}];

    $scope.addNewList = function (event, clickPlus) {
      if (clickPlus || event.which === 13) {
        $scope.Lists.unshift({
          name: $scope.newTodoText,
          color: getRandomColor(),
        });
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

    $scope.removeList = function (index) {
      if (confirm("Are you sure?"))
           {
               $scope.Lists[index].deleted = true;
           }
    };
  }

})();
