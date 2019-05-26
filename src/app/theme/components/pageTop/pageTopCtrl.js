/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.settings')
        .controller('pageTopCtrl', pageTopCtrl);

    /** @ngInject */
    function pageTopCtrl($scope, settings, $rootScope) {
        $scope.pageTop = {
            siteName: settings.getSiteName()
        };

        $rootScope.$on('updateSettings', function (event, message) {
            $scope.pageTop.siteName = message.siteName;           
        });
    }

})();
