(function () {
    'use strict';

    angular.module('BlurAdmin.theme.components')
        .factory('baSidebarModel', baSidebarModel);

    /** @ngInject */
    function baSidebarModel() {
        var menuItems = null;

        function getMenuItems() {
            return menuItems;
        }

        function setMenuItems(items) {
            menuItems = items;
        }

        return {
            getMenuItems: getMenuItems,
            setMenuItems: setMenuItems
        };
    }
})();