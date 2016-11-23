/**
 * Created by sguilly on 22/11/16.
 */
(function () {
    'use strict';

    /**
     * @ngdoc object
     * @name category.controller:CategoriesCtrl
     *
     * @description
     *
     */
    angular
        .module('hotReloadPage')
        .controller('HotReloadCtrl', HotReloadCtrl);

    function HotReloadCtrl($scope, $state,MyPageService) {

        var vm = this;
        vm.ctrlName = 'Hot Reload Page';

    }
}());
