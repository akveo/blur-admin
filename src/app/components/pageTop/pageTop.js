'use strict';

blurAdminApp.directive('pageTop', ['$location', function ($location) {
  return {
    restrict: 'E',
    templateUrl: 'app/components/pageTop/pageTop.html',
    link: function ($scope) {
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
        '/form-inputs': 'Form Inputs'
      };

      $scope.$watch(function () {
        $scope.activePageTitle = $scope.pages[$location.$$url];
      });
    }
  };
}]);