/**
 * Created by sguilly on 22/11/16.
 */
(function () {
    'use strict';

    angular
        .module('hotReloadPage')
        .config(config);

    function config($stateProvider) {
        $stateProvider
            .state('hotReload', {
                url: '/hotReload',
                templateUrl: 'app/pages/hotReload/hotReloadPage/hotReload.html',
                controller: 'HotReloadCtrl',
                controllerAs: 'vm',
                title: 'hotReloadPage',
                sidebarMeta: {
                    order: 0,
                },
            });
    }
}());