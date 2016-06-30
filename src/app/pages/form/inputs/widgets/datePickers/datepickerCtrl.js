/**
 * Created by n.poltoratsky
 * on 23.06.2016.
 */
(function(){
    'use strict';

    angular.module('BlurAdmin.pages.form')
        .controller('datepickerCtrl', datepickerCtrl);

    /** @ngInject */
    function datepickerCtrl($scope) {

        $scope.dt = new Date();
        $scope.options = {
            showWeeks: false
        };

    }
})();