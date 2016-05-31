/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.form')
      .directive('switch', switchDirective);

  /** @ngInject */
  function switchDirective($timeout) {
    return {
      restrict: 'EA',
      replace: true,
      scope: {
        ngModel: '='
      },
      template: '<div class="switch-container {{color}}"><input type="checkbox" ng-model="ngModel"></div>',
      link: function (scope, elem, attr) {
        $timeout(function(){
          scope.color = attr.color;
          var input = $(elem).find('input');
          input.bootstrapSwitch({
            size: 'small',
            onColor: attr.color
          });
          input.on('switchChange.bootstrapSwitch', function(event, state) {
            scope.ngModel = state;
            scope.$apply();
          });

        });
      }
    };
  }
})();
