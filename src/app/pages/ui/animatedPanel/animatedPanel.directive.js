/**
 * @author harisali
 * created on 14.03.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.ui.animatedPanel')
      .directive('animatedPanelDir', animatedPanel);

  /** @ngInject */
  function animatedPanel() {
    return {
      controller: animatedPanelCtrl,
    };
  }
  
  function animatedPanelCtrl($scope,$element,$animate){
		$element.hide();
		var child=$element.children(":eq(0)").children(":eq(0)");
		$scope.$on("showDetails",function(event){
			//animation to show element
			$("html, body").animate({
				scrollTop: 0
			});
			$element.slideDown();
			$animate.setClass(child,"zoomIn","zoomOut");
		});
		$scope.hide=function(){
			//animation to hide element
			child.removeClass("zoomIn");
			child.addClass("zoomOut");
			$element.slideUp();
		}
	  }
})();