/**
 * @author v.lugovsky
 * created on 03.05.2016
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.theme')
        .service('settings', settings);

    /** @ngInject */
    function settings() {
        var siteName = "BlurAdmin";
        return {
            getSiteName: function () {
                return siteName;
            },
            setSiteName: function (value) {
                siteName = value;
            }
        };
    }
})();
