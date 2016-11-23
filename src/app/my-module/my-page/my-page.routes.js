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
            .state('my-page', {
                url: '/my-page',
                templateUrl: 'app/my-module/my-page/my-page.html',
                controller: 'MyPageCtrl',
                controllerAs: 'vm',
                title: 'my-page',
                sidebarMeta: {
                    order: 0,
                },
            });
    }
}());