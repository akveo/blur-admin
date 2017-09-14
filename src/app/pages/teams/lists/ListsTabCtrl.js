/**
 * @author a.demeshko
 * created on 28.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.teams.lists')
    .controller('ListsTabCtrl', ListsTabCtrl)
    .filter('bytetobase', function () {
    return function (buffer) {
        var binary = '';
        var bytes = new Uint8Array(buffer);
        var len = bytes.byteLength;
        for (var i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        return window.btoa(binary);
    };
});

  /** @ngInject */
  function ListsTabCtrl($scope, baConfig, membersList, ListService,MemberService, $log, $state,$stateParams) {
  	var vm = this;

  	vm.searchResult = [];

    function loadLists() {
      ListService
        .list()
        .then(function (data){
					
          if($stateParams.id){
            for (var i = data.length - 1; i >= 0; i--) {
              console.log('stateParams',$stateParams.id,data[i])
              if($stateParams.id == data[i].id) {
                data[i].isChecked = true;
                vm.activeList = data[i];
                vm.errors.noList = false;
                vm.updateListMembers(data[i]);
              } else
                data[i].isChecked = false;
                
            };
            
          }
          vm.Lists = data;
					$log.info("Got the list data",data);
					//getting all members
					MemberService
				        .list()
				        .then(function (data){
				          vm.searchResult = data;
				          $log.info("Got the members data",data);
                  $log.info("activeList",vm.activeList);
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
    vm.selectedLabel = "";

    vm.selectAllResults = false;
    vm.selectAllMembers = false;

    vm.errors = {};
    vm.errors.noList = true;

    vm.selectAllSearchResult = function() {
          if (vm.selectAllResults) {
            vm.selectAllResults = true;
          } else {
              vm.selectAllResults = false;
          }
          angular.forEach(vm.searchResult, function (item) {
              item.Selected = vm.selectAllResults;
          });
      }

    vm.selectAllListMembers = function() {
          if (vm.selectAllMembers) {
            vm.selectAllMembers = true;
          } else {
              vm.selectAllMembers = false;
          }
          angular.forEach(vm.listMembers, function (item) {
              item.Selected = vm.selectAllMembers;
          });
      }

    vm.insertSearchResult = function(member) {
          angular.forEach(vm.searchResult, function (item) {
              if(member.id == item.id)
                item = member;
          });
          console.log('insertSearchResult:vm.searchResult', vm.searchResult)
      }

     vm.insertMemberList = function(member) {
          angular.forEach(vm.listMembers, function (item) {
              if(member.id == item.id)
                item = member;
          });
          console.log('insertMemberList:vm.listMembers', vm.listMembers)
      }

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
	  if (item && item.isChecked) {
		  	vm.activeList = item;
        vm.errors.noList = false;
        $state.transitionTo('teams.lists', {id: item.id}, {notify: false});
			angular.forEach(vm.Lists, function(list){
	      	 if(item.id != list.id)
			   		list.isChecked = false;
		    });

		  //getting members info
		  vm.listMembers = []; 
	      var params = (item.members && item.members.length > 0) ? {"ids" : item.members} : {};
	      //angular.forEach(membersIds, function(id){
          if (item.members.length > 0) {
            vm.errors.noMember = false;
            MemberService
              .list(params)
              .then(
                function (data){
                  vm.listMembers = data;
                  console.log("updateListMembers",vm.activeList, vm.listMembers);
                },
                function (error){
                  console.log("Error getting the member");
                }
              ); 
            } else
              vm.errors.noMember = true;
	      	 
		     
		    //});
	  } else {
      vm.activeList = {};
      vm.errors.noList = true;
      vm.listMembers = [];
      $state.transitionTo('teams.lists', {notify: false});
    }
	  	
	  
      
    };

    vm.getMemberByLabel = function () {
      //console.log(vm.selectedLabel);
      var params = (vm.selectedLabel && vm.selectedLabel != "" && vm.selectedLabel != "listing") ? { "labels" : vm.selectedLabel } : {};
      MemberService
              .list(params)
              .then(
                function (data){
                  vm.searchResult = data;
                  console.log("getMemberByLabel",data);
                },
                function (error){
                  console.log("Error getting the members");
                }
              ); 


    }; 

    vm.updateMembers = function (members, action, multi) {
      if (confirm("Are you sure?"))
           {
            console.log('updateMembers:members', members)
               var list = vm.activeList;
               vm.errors.noList = false;
               
               for (var i = 0; i < members.length; i++) {
                if(multi == false || (multi == true && members[i].Selected == true)) {
                    var index = list.members.indexOf(members[i].id);
                     //vm.listMembers = []; 
                     if (action == "add") {
                        if (index == -1)
                          list.members.push(members[i].id);
                     } else {
                        if (index != -1)
                          list.members.splice(index, 1);
                     }
                  }
                    
                    
                }
               
            vm.activeList.isChecked =  true;
		        ListService
		          .edit(list)
		          .then(
		            function (data){
		              //loadLists();

                  vm.updateListMembers(vm.activeList);
		              
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
