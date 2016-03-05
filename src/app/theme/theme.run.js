/**
 * @author v.lugovksy
 * created on 15.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme')
      .run(themeRun);

  /** @ngInject */
  function themeRun($timeout, $rootScope, layoutSizes, layoutPaths, preloader, $q) {

    $q.all([
      preloader.loadImg(layoutPaths.images.root + 'blur-bg.jpg'),
      preloader.loadImg(layoutPaths.images.root + 'blur-bg-blurred.jpg'),
      preloader.loadAmCharts(),
      $timeout(3000)
    ]).then(function(){
        $rootScope.$pageFinishedLoading = true;
    });

    $timeout(function () {
      if(!$rootScope.$pageFinishedLoading){
        $rootScope.$pageFinishedLoading = true;
      }
    }, 7000);

    $rootScope.$isMenuCollapsed = window.innerWidth <= layoutSizes.resWidthCollapseSidebar;
  }

})();