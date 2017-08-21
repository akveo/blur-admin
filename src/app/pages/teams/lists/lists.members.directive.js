/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.teams.lists')
      .directive('listsMembersDirective', listsMembersDirective);

  /** @ngInject */
  function listsMembersDirective() {
    return {
      restrict: 'EA',
      controller: 'ListsTabCtrl',
      templateUrl: 'app/pages/teams/lists/listsMembersDirective.html'
    };
  }
})();