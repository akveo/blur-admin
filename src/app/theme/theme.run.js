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
      preloader.load(layoutPaths.images.root + 'blur-bg.jpg'),
      preloader.load(layoutPaths.images.root + 'blur-bg-blurred.jpg')
    ]).then(function(){
      if(!$rootScope.$pageFinishedLoading){
        $rootScope.$pageFinishedLoading = true;
      }
      if(!$rootScope.$pageLoaded){
        $rootScope.$pageLoaded = true;
      }
    });

    $timeout(function () {
      if(!$rootScope.$pageFinishedLoading){
        $rootScope.$pageFinishedLoading = true;
      }
    }, 2000);

    $timeout(function () {
      if(!$rootScope.$pageLoaded){
        $rootScope.$pageLoaded = true;
      }
    }, 4000);

    $rootScope.$isMenuCollapsed = window.innerWidth <= layoutSizes.resWidthCollapseSidebar;
  }

})();