/**
 * Created by sguilly on 21/10/16.
 */

/**
 * Created by sguilly on 19/10/16.
 */

(function () {
    'use strict';

    // <div address-input max="77" ng-model="poi.address"></div>

    angular
        .module('hotReloadPage')
        .directive('hotReloadDirective', myPageDirective);

    function myPageDirective() {
        var directive = {
            restrict: 'EA',
            template: '<div class="blue">{{vm.text}} - {{vm.serviceText}}</div>'
            ,
            scope: {

                text: '=?',
                ngModel:'=',

            },
            require: 'ngModel',
            controller: HotReloadDirectiveCtrl,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;
    }

    HotReloadDirectiveCtrl.$inject = ['HotReloadService'];
    function HotReloadDirectiveCtrl(HotReloadService) {
        var vm = this;

        vm.serviceText = HotReloadService.getText()

    }

}());
