/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.surveys.create')
      .controller('CreateTabCtrl', CreateTabCtrl)
      .directive('multipleQ', function() {
		    return {
		      templateUrl: 'app/pages/surveys/create/widgets/multiple.html'
		    };
		  })
      .directive("contenteditable", function() {
			  return {
			    require: "ngModel",
			    link: function(scope, element, attrs, ngModel) {

			      function read() {
			        ngModel.$setViewValue(element.html());
			      }

			      ngModel.$render = function() {
			        element.html(ngModel.$viewValue || "");
			      };

			      element.bind("blur keyup change", function() {
			        scope.$apply(read);
			      });
			    }
			  };
			})
      .directive('enforceMaxTags', function() {
        return {
          require: 'ngModel',
          link: function(scope, element, attrs, ngCtrl) {
            var maxTags = attrs.maxTags ? parseInt(attrs.maxTags, '10') : null;

            ngCtrl.$parsers.push(function(value) {
              if (value && maxTags && value.length > maxTags) {
                value.splice(value.length - 1, 1);
              }
              return value;
            });
          }
        };
      });

  /** @ngInject */
  function CreateTabCtrl(SurveyService, ListService,MemberService, $scope, $http, $compile, $timeout, $stateParams, $log, toastr, $uibModal, $state, appConfig) {

  	$scope.editmode = true;

    $scope.lists = [];
    $scope.lists.selected = [];
    $scope.$watch('lists.selected', $scope.updateLists);

  	$scope.survey = {};
  	$scope.survey.name = appConfig.survey.defaultTitle;
  	$scope.survey.description = appConfig.survey.defaultDescription;
  	$scope.survey.elements = [];
    $scope.survey.type = appConfig.survey.defaultType;

    $scope.display = {};
    $scope.display.survey = true;
    $scope.display.sidebar = false;
    $scope.display.surveySending = false;


    $scope.progressFunction = function() {
      return $timeout(function() {}, 3000);
    };

    $scope.panelFoldToggle = function(index) {
    	$scope.survey.elements[index].isUnfolded = !$scope.survey.elements[index].isUnfolded;
    	console.log("panelFoldToggle index isUnfolded $scope.survey.elements", index, $scope.survey.elements[index].isUnfolded, $scope.survey.elements);
	};

	$scope.getTheFoldingClass = function() {
		var $className = ( $scope.isUnfolded ) ? "fa fa-compress" : "fa fa-expand";
        return $className;
    };

    $scope.addElement = function(type){
        var element = $scope.createEmptyElement(type, $scope.survey.elements.length + 1);
        $scope.activeElement=element;
        $scope.survey.elements.push(element);
        $scope.updateBuilder();
     };

    $scope.removeElement = function(index){
                $scope.survey.elements.splice(index,1);
                $scope.updateBuilder();
                            };

    $scope.createEmptyElement = function(type,orderNo){
          var item = {
                    id: null,
                    orderNo: 1,
                    value: null
                };
                return {
                    id: null, // TODO : generate the ID
                    orderNo: orderNo,
                    text: "",
                    type: type,
                    required: false,
                    multiAnswers: false,
                    isUnfolded: false,
                    comment: false,
                    commentLabel: '',
                    tag:'',
                    //tagsJoined:'',
                    items: (type == 'multiple') ? [item] : [],
                };
            }

    $scope.copyElement = function(index){ 
          //elem.id = null
          var originalElem = $scope.survey.elements[index]
          var newElem = $scope.createEmptyElement(originalElem.type, $scope.survey.elements.length + 1)
          newElem.isUnfolded = false
          newElem.text = originalElem.text
          newElem.comment = originalElem.comment
          newElem.commentLabel = originalElem.commentLabel
          newElem.tag = originalElem.tag
          newElem.items = originalElem.items  
          //console.log("$scope.survey.elements", $scope.survey.elements)      
          $scope.survey.elements.push(newElem);
          $scope.updateBuilder();
          console.log("$scope.survey.elements", $scope.survey.elements)  
          
        }

    $scope.addNewItem=function(index){

                var item = {
                    id: null,
                    orderNo: $scope.survey.elements[index].length + 1,
                    value: null
                };

                $scope.survey.elements[index]['items'].push(item);
                $scope.updateBuilder();
            };

    $scope.removeItem=function(index, itemIndex){

                console.log(index, itemIndex, $scope.survey.elements);
                if(itemIndex != 0) {
                	$scope.survey.elements[index]['items'].splice(itemIndex,1);
                	$scope.updateBuilder();
                }
                	
                
            };

     $scope.saveSurvey=function(process){

        if(!process)
          $scope.survey.list = [];
        var survey = $scope.survey;

        if($stateParams.survey_id) {
          SurveyService
          .update(survey)
          .then(
            function (data){
              console.log('Survey edited', data);
              if (process)
                //send the survey
                SurveyService
                  .send(survey)
                  .then(
                    function (data){
                      console.log('Survey is being sent', data);
                        $uibModal.open({
                          animation: true,
                          templateUrl: 'app/pages/surveys/create/widgets/successModal.html',
                        });
                    },
                    function (error){
                      toastr.error('There were an error sending the survey', 'Surveys', $scope.errorToastrOptions)
                    }
                  );
              else
                toastr.info('The survey was edited successfuly :)', 'Surveys', $scope.successToastrOptions)

            },
            function (error){
              toastr.error('There were an error editing the survey', 'Surveys', $scope.errorToastrOptions)
            }
          );
        } else {
          SurveyService
          .create(survey)
          .then(
            function (data){
              console.log('Survey created', data);
              toastr.info('The survey was created successfuly :)', 'Surveys', $scope.successToastrOptions)
            },
            function (error){
              toastr.error('There were an error creating the survey', 'Surveys', $scope.errorToastrOptions)
            }
          );
        }
        
      };

    $scope.submitSurvey=function(){
        $scope.saveSurvey();
        $scope.display.survey = false;
        $scope.display.sidebar = true;
        $scope.display.surveySending = true;
      };

      $scope.selectedListsChange=function(){
        $log.info("selectedListsChange",$scope.lists.selected);
        angular.forEach($scope.lists.selected, function(list) {
            if(list.members.length > 0 && !list.members[0].name) {
              var params = {"ids" : list.members};
              MemberService
              .list(params)
              .then(
                function (data){
                  list.members = data;
                },
                function (error){
                  console.log("Error getting the members");
                }
              );
            }
          });
      }

      $scope.sendSurvey=function(){
        $scope.survey.list = $scope.lists.selected;
        $scope.survey.status = "Sending";
        $log.info("sendSurvey",$scope.survey);

        $scope.saveSurvey(true);
        $state.transitionTo('main.surveys.list'/*, {id: item.id}*/);

        
        /*$scope.saveSurvey();
        $("#sidebar").fadeIn();
        $("#survey-actions").fadeOut();*/
      };

    $scope.cancelSending=function(){
        $scope.display.survey = true;
        $scope.display.sidebar = false;
        $scope.display.surveySending = false;
      };

    $scope.updateBuilder=function(){
    		var compiledeHTML = $compile("<div multiple-q></div>")($scope);
        	$("#newElem").html(compiledeHTML);
          
          if($scope.survey.elements.length>0)
            $("#survey-actions").show();
          else
            $("#survey-actions").hide();

        	console.log($scope.survey.elements);

            };

    $scope.loadSurvey =  function(id) {
      SurveyService
        .get(id)
        .then(function (data){
          $log.info("data[0]",data);
          
          $scope.survey = data;
          $scope.updateBuilder();
          $log.info("Got the survey data",$scope.survey);
        }, function (error){
          $log.error(error);
        });
    }

    $scope.loadLists =  function() {
      ListService
        .list()
        .then(function (data){
          $scope.lists = data;
          $log.info("Got the lists data",data);
        }, function (error){
          $log.error(error);
        });
    }

    $scope.updateLists =  function() {
      
    }

    $scope.activate=function(){
      if($stateParams.survey_id) {
        $scope.loadSurvey($stateParams.survey_id);
      } 
      $scope.loadLists();

      $scope.errorToastrOptions = {
                      "autoDismiss": true,
                      "positionClass": "toast-bottom-right",
                      "type": "error",
                      "timeOut": "5000",
                      "extendedTimeOut": "2000"
                    };
      $scope.successToastrOptions = {
                      "autoDismiss": true,
                      "positionClass": "toast-bottom-right",
                      "type": "success",
                      "timeOut": "5000",
                      "extendedTimeOut": "2000"
                    };

      $scope.tags = appConfig.tags;
    }

    $scope.activate();

  }

})();
