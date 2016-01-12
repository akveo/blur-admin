/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme.components')
      .directive('contentTop', contentTop);

  /** @ngInject */
  function contentTop($location) {
    return {
      restrict: 'E',
      templateUrl: 'app/theme/components/contentTop/contentTop.html',
      link: function($scope) {
        $scope.pages = {
          '/dashboard': 'Dashboard',
          '/page': 'Default Page',
          '/404': 'Page Not Found',
          '/buttons': 'Buttons',
          '/charts/amCharts': 'amCharts',
          '/charts/chartJs': 'Chart.js',
          '/charts/chartist': 'Chartist.js',
          '/charts/morris': 'Morris',
          '/grid': 'Grid',
          '/alerts': 'Alerts',
          '/progressBars': 'Progress Bars',
          '/notifications': 'Notifications',
          '/icons': 'Icons',
          '/login': 'Authentication',
          '/maps': 'Maps',
          '/mail': 'Mail Box',
          '/modals': 'Modals',
          '/profile': 'User Profile',
          '/tables/basic': 'Basic Tables',
          '/tables/smart': 'Smart Tables',
          '/tree': 'Tree View',
          '/slider': 'Sliders',
          '/typography': 'Typography',
          '/form-layouts': 'Form Layouts',
          '/form-inputs': 'Form Inputs',
          '/maps/gmap': 'Google Map',
          '/maps/leaflet': 'Leaflet Map',
          '/maps/line': 'Line Map',
          '/maps/bubble': 'Bubble Map',
          '/panels': 'Panels',
          '/timeline': 'Timeline',

        };

        $scope.$watch(function () {
          $scope.activePageTitle = $scope.pages[$location.$$url];
        });
      }
    };
  }

})();