/**
 * @author harisali
 * created on 14.03.2017
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.ui.animatedPanel', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('ui.animatedPanel', {
          url: '/animatedPanel',
          templateUrl: 'app/pages/ui/animatedPanel/animatedPanel.html',
          title: 'Animated Panel',
		  controller: 'AnimatedPanelPageCtrl',
          sidebarMeta: {
            order: 0,
          },
        });
  }

})();
