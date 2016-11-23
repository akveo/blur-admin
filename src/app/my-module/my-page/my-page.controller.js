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
        .module('my-page')
        .controller('MyPageCtrl', MyPageCtrl);

    function MyPageCtrl($scope, $state,MyPageService) {

        var vm = this;
        vm.ctrlName = 'My Hot Reload Page :)';

    }
}());
