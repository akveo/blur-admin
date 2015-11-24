'use strict';

blurAdminApp.directive('contentTop', ['$location', function ($location) {
  return {
    restrict: 'E',
    controller: [function () {

    }],
    templateUrl: 'app/components/contentTop/contentTop.html',
    link: function($scope) {
      $scope.pages = {
        '/dashboard': 'Dashboard',
        '/page': 'Default Page',
        '/404': 'Page Not Found',
        '/buttons': 'Buttons',
        '/charts': 'Charts',
        '/grid': 'Grid',
        '/icons': 'Icons',
        '/login': 'Authentication',
        '/maps': 'Maps',
        '/modals': 'Modals',
        '/profile': 'User Profile',
        '/tables': 'Tables',
        '/typography': 'Typography',
        '/form-layouts': 'Form Layouts',
        '/form-inputs': 'Form Inputs',
        '/maps/gmap': 'Google Map',
        '/maps/leaflet': 'Leaflet Map',
        '/maps/line': 'Line Map',
        '/maps/bubble': 'Bubble Map'
      };

      $scope.$watch(function () {
        $scope.activePageTitle = $scope.pages[$location.$$url];
      });
    }
  };
}]);
