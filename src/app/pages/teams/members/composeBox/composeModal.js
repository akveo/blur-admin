/**
 * @author a.demeshko
 * created on 12/24/15
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.teams.members')
    .service('composeModal', composeModal);

  /** @ngInject */
  function composeModal($uibModal) {
      this.open = function(options){
        return $uibModal.open({
          animation: false,
          templateUrl: 'app/pages/teams/members/composeBox/compose.html',
          controller: 'composeBoxCtrl',
          controllerAs: 'boxCtrl',
          size: 'compose',
          resolve: {
            member: function () {
              return options.member;
            }/*,
            actualIndex: function () {
              return options.actualIndex;
            }*/
          }
        });
      }

      this.cancel = function () {
        this.dismiss({$value: 'cancel'});
      };

  }

})();