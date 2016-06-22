/**
 * @author n.poltoratsky
 * created on 27.06.2016
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.theme')
        .factory('progressDialog', progressDialog);

    /** @ngInject */
    function progressDialog($uibModal) {
        var methods = {};
        return {
            open: function(path) {
                methods = $uibModal.open({
                    animation: true,
                    templateUrl: path,
                    size: 'sm',
                    keyboard: false,
                    backdrop: 'static'
                });
            },
            close: function() {
                methods.close();
            }
        };
    }

})();