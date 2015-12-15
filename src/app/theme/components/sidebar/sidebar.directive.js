/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme.components')
      .directive('sidebar', sidebar);

  /** @ngInject */
  function sidebar() {
    return {
      restrict: 'E',
      templateUrl: 'app/theme/components/sidebar/sidebar.html',
      controller: 'SidebarCtrl'
    };
  }

})();