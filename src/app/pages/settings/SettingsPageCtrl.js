/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.settings')
        .controller('SettingsPageCtrl', SettingsPageCtrl);

    /** @ngInject */
    function SettingsPageCtrl($scope, settings, $rootScope) {

        $scope.site = {
            name: settings.getSiteName()
        };

        $scope.update = function () {
            settings.setSiteName($scope.site.name);
            $rootScope.$emit('updateSettings', { siteName: $scope.site.name });
        };
    }
})();
