/**
 * @author n.poltoratsky
 * created on 27.06.2016
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.theme')
        .factory('baProgressModal', baProgressModal);

    /** @ngInject */
    function baProgressModal($uibModal) {
        var methods = {};
        var progress = 0;
        var max = 100;
        var opened = false;

        return {
            setProgress: function (value) {
                if (value > max) {
                    throw Error('Progress can\'t be greater than max');
                }
                progress = value;
            },
            getProgress: function () {
                return progress;
            },
            open: function() {
                if (!opened) {
                    methods = $uibModal.open({
                        animation: true,
                        templateUrl: 'app/pages/ui/modals/progressModal/progressModal.html',
                        size: 'sm',
                        keyboard: false,
                        backdrop: 'static'
                    });
                    opened = true;
                } else {
                    throw Error('Progress modal opened now');
                }

            },
            close: function() {
                if (opened) {
                    methods.close();
                    opened = false;
                } else {
                    throw Error('Progress modal is not active');
                }

            }
        };
    }

})();