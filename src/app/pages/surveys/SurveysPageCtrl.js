/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.surveys')
      .controller('SurveysPageCtrl', SurveysPageCtrl)
      .directive('multiple', function() {
		    return {
		      templateUrl: 'app/pages/surveys/widgets/multiple.html'
		    };
		  });

  /** @ngInject */
  function SurveysPageCtrl($scope, $compile, $timeout) {

  	$scope.isUnfolded = false;
  	$scope.actualId = 0;
  	$scope.survey = {};
  	$scope.survey.name = '';
  	$scope.survey.description = '';
  	$scope.survey.elements = [];

    $scope.progressFunction = function() {
      return $timeout(function() {}, 3000);
    };

    $scope.panelFoldToggle = function() {
    	$scope.isUnfolded = !$scope.isUnfolded;
    	console.log($scope.isUnfolded);
	};

	$scope.getTheFoldingClass = function() {
		var $className = ( $scope.isUnfolded ) ? "fa fa-compress" : "fa fa-expand";
        return $className;
    };

    $scope.addElement = function(type){
    	$scope.actualId = $scope.survey.elements.length + 1;
        var element = $scope.createEmptyElement(type, $scope.survey.elements.length + 1);
        $scope.activeElement=element;
        $scope.survey.elements.push(element);
        var compiledeHTML = $compile("<div multiple></div>")($scope);
        $("#newElem").append(compiledeHTML);
        console.log($scope.survey.elements);
     };

    $scope.removeElement = function(index){
    			console.log("#q-"+index, index);
                $scope.survey.elements.splice(index,1);
                $("#q-"+index).remove();
            };

    $scope.createEmptyElement = function(type,orderNo){
                return {
                    id: $scope.survey.elements.length+1, // TODO : generate the ID
                    orderNo: orderNo,
                    type: type
                };
            }

  }

})();
