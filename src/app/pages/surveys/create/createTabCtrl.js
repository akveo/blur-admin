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
			});

  /** @ngInject */
  function CreateTabCtrl(SurveyService, ListService, $scope, $http, $compile, $timeout, $stateParams, $log, toastr) {

  	$scope.editmode = true;

    $scope.lists = [];
    $scope.lists.selected = [];
    $scope.$watch('lists.selected', $scope.updateLists);

  	$scope.survey = {};
  	$scope.survey.name = 'Page Title';
  	$scope.survey.description = 'Page Description';
  	$scope.survey.elements = [];

    $scope.progressFunction = function() {
      return $timeout(function() {}, 3000);
    };

    $scope.panelFoldToggle = function(index) {
    	$scope.survey.elements[index].isUnfolded = !$scope.survey.elements[index].isUnfolded;
    	console.log($scope.survey.elements[index].isUnfolded);
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
                    tags:[],
                    items: (type == 'multiple') ? [item] : [],
                };
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

     $scope.saveSurvey=function(){
        var survey = $scope.survey 
        if($stateParams.survey_id) {
          SurveyService
          .update(survey)
          .then(
            function (data){
              console.log('Survey edited', data);
              toastr.info('The survey was edited successfuly :)', 'Surveys', {
                      "autoDismiss": true,
                      "positionClass": "toast-bottom-right",
                      "type": "success",
                      "timeOut": "5000",
                      "extendedTimeOut": "2000"
                    })
            },
            function (error){
              toastr.error('There were an error editing the survey', 'Surveys', {
                      "autoDismiss": true,
                      "positionClass": "toast-bottom-right",
                      "type": "error",
                      "timeOut": "5000",
                      "extendedTimeOut": "2000"
                    })
            }
          );
        } else {
          SurveyService
          .create(survey)
          .then(
            function (data){
              console.log('Survey created', data);
              toastr.info('The survey was created successfuly :)', 'Surveys', {
                      "autoDismiss": true,
                      "positionClass": "toast-bottom-right",
                      "type": "success",
                      "timeOut": "5000",
                      "extendedTimeOut": "2000"
                    })
            },
            function (error){
              toastr.error('There were an error creating the survey', 'Surveys', {
                      "autoDismiss": true,
                      "positionClass": "toast-bottom-right",
                      "type": "error",
                      "timeOut": "5000",
                      "extendedTimeOut": "2000"
                    })
            }
          );
        }
        
      };

    $scope.submitSurvey=function(){
        $scope.saveSurvey();
        $("#sidebar").fadeIn();
        $("#survey-actions").fadeOut();
      };

      $scope.sendSurvey=function(){
        /*$scope.saveSurvey();
        $("#sidebar").fadeIn();
        $("#survey-actions").fadeOut();*/
      };

    $scope.cancelSending=function(){
        $("#sidebar").fadeOut();
        $("#survey-actions").fadeIn();
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
          $scope.survey = data[0];
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
        $scope.loadSurvey($stateParams.member_id);
      } 
      $scope.loadLists(); 
    }

    $scope.activate();

  }

})();
