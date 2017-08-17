/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.surveys')
      .controller('SurveysPageCtrl', SurveysPageCtrl);

  /** @ngInject */
  function SurveysPageCtrl($scope, $timeout) {

  	$scope.isUnfolded = false;
  	$scope.survey.name = '';
  	$scope.survey.description = '';
  	$scope.survey.elements.length = 0;

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
        var element = createEmptyElement(type, $scope.survey.elements.length + 1);
        $scope.activeElement=element;
        $scope.survey.elements.push(element);
     };

     function createEmptyElement(type,orderNo){
                return {
                    id: 1, // TODO : generate the ID
                    orderNo: orderNo,
                    type: type
                };
            }

  }

})();
