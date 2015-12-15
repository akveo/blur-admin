/**
 * @author v.lugovksy
 * created on 15.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme')
      .run(themeRun);

  /** @ngInject */
  function themeRun($timeout, $rootScope, layoutSizes) {
    $timeout(function () {
      $rootScope.$pageFinishedLoading = true;
    }, 1000);

    $timeout(function () {
      $rootScope.$pageLoaded = true;
    }, 4000);

    $rootScope.$isMenuCollapsed = window.innerWidth <= layoutSizes.resWidthCollapseSidebar;
  }

})();