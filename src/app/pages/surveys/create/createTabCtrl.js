/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.surveys.create')
      .controller('CreateTabCtrl', CreateTabCtrl)
      .directive('multiple', function() {
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
  function CreateTabCtrl($scope, $http, $compile, $timeout) {

  	$scope.editmode = true;
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
        console.log($scope.survey.elements);
     };

    $scope.removeElement = function(index){
                $scope.survey.elements.splice(index,1);
                $scope.updateBuilder();
                            };

    $scope.createEmptyElement = function(type,orderNo){
    			var item = {
                    id: 1,
                    orderNo: 1,
                    value: null
                };
                return {
                    id: $scope.survey.elements.length+1, // TODO : generate the ID
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
                    id: $scope.survey.elements[index].length + 1,
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

     $scope.submitSurvey=function(){
    		$scope.json = angular.toJson($scope.survey);
    		var url = "/"
    		var parameter = JSON.stringify($scope.json);
		    $http.post(url, parameter).
		    success(function(data, status, headers, config) {
		        // this callback will be called asynchronously
		        // when the response is available
		        console.log(data);
		      }).
		      error(function(data, status, headers, config) {
		        // called asynchronously if an error occurs
		        // or server returns response with an error status.
		        console.log("error",data);
		      });

            };

    $scope.updateBuilder=function(){
    		var compiledeHTML = $compile("<div multiple></div>")($scope);
        	$("#newElem").html(compiledeHTML);
        	console.log($scope.survey.elements);

            };

  }

})();
