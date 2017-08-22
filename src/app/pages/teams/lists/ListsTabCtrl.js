/**
 * @author a.demeshko
 * created on 28.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.teams.lists')
    .controller('ListsTabCtrl', ListsTabCtrl);

  /** @ngInject */
  function ListsTabCtrl($scope, baConfig, membersList, ListService,MemberService, $log) {
  	var vm = this;

  	vm.searchResult = [];

    function loadLists() {
      ListService
        .list()
        .then(function (data){
					vm.Lists = data;
					$log.info("Got the list data",data);
					//getting all members
					MemberService
				        .list()
				        .then(function (data){
				          vm.searchResult = data;
				          $log.info("Got the members data",data);
				        }, function (error){
				          $log.error(error);
				        });
        }, function (error){
          $log.error(error);
        });
    }

    function activate(){
	  vm.Lists = [];

      loadLists();
    }

    activate();



    
    vm.transparent = baConfig.theme.blur;
    var dashboardColors = baConfig.colors.dashboard;
    var colors = [];
    for (var key in dashboardColors) {
      colors.push(dashboardColors[key]);
    }



    function getRandomColor() {
      var i = Math.floor(Math.random() * (colors.length - 1));
      return colors[i];
    }

    vm.tabs = membersList.getTabs();

    

    vm.Lists.forEach(function(item) {
      item.color = getRandomColor();
    });

    vm.newList = {};
    vm.activeList = {};
    vm.listMembers = [];
    vm.selectedLabel = "listing";

    vm.addNewList = function (event, clickPlus) {
      if (clickPlus || event.which === 13) {

        vm.Lists.unshift({name : vm.newList.name});
        //vm.Lists.push(vm.newList);
		var list = {name : vm.newList.name};
        ListService
          .create(list)
          .then(
            function (data){
              loadLists();
              vm.newList.name = '';
            },
            function (error){
              console.log("Error creating the LIST");
            }
          ); 
      }
    };


    vm.updateListMembers = function (item) {
	  //uncheck others lists
	  if (item.isChecked) {
		  	vm.activeList = item;
			angular.forEach(vm.Lists, function(list){
	      	 if(item.id != list.id)
			   		list.isChecked = false;
		    });

		  //getting members info
		  vm.listMembers = []; 
	      var membersIds = item.members;
	      angular.forEach(membersIds, function(id){
	      	 MemberService
		          .get(id)
		          .then(
		            function (data){
		              vm.listMembers.push( data.data );
		              console.log("updateListMembers",vm.activeList, vm.listMembers);
		            },
		            function (error){
		              console.log("Error getting the member");
		            }
		          ); 
		     
		    });
	  } else
	  	vm.listMembers = [];
	  
      
    };

    vm.getMemberByLabel = function (label) {
      console.log(label);
      vm.searchResult = membersList.getMembersByLabel(label);
    }; 

    vm.updateMembers = function (member, action) {
      if (confirm("Are you sure?"))
           {
               var list = vm.activeList;
               var index = list.members.indexOf(member.id);
               
               if (action == "add") {
	               	if (index == -1)
	               		list.members.push(member.id);
               } else {
               		if (index != -1)
               			list.members.splice(index, 1);
               }
               
		        ListService
		          .edit(list)
		          .then(
		            function (data){
		              loadLists();
		              vm.newList.name = '';
		            },
		            function (error){
		              console.log("Error updating the LIST");
		            }
		          ); 
           }
    };

    vm.removeList = function (index) {
      if (confirm("Are you sure?"))
           {
               
               var list = vm.Lists[index];
               ListService
		          .remove(list)
		          .then(
		            function (data){
		              vm.Lists[index].deleted = true;
		            },
		            function (error){
		              console.log("Error removing the LIST");
		            }
		          ); 
           }
    };
  }

})();
