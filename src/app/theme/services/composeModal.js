/**
 * @author a.demeshko
 * created on 12/24/15
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme')
    .service('composeModal', composeModal);

  /** @ngInject */
  function composeModal($uibModal) {
    return {
      open : function(options){
        return $uibModal.open({
          animation: false,
          templateUrl: 'app/theme/components/composeBox/compose.html',
          controller: 'composeBoxCtrl',
          size: size,
          resolve: {
            subject : options.subject
          }
        });
      }
    }
  }

})();