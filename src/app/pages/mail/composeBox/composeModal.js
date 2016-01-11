/**
 * @author a.demeshko
 * created on 12/24/15
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.mail')
    .service('composeModal', composeModal);

  /** @ngInject */
  function composeModal($uibModal) {
    return {
      open : function(options){
        return $uibModal.open({
          animation: false,
          templateUrl: 'app/pages/mail/composeBox/compose.html',
          controller: 'composeBoxCtrl',
          size: 'slim',
          resolve: {
            subject: function () {
              return options.subject;
            },
            to: function () {
              return options.to;
            },
            text: function () {
              return options.text;
            }
          }
        });
      }
    }
  }

})();