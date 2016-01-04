/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.mail')
      .controller('MailTabCtrl', MailTabCtrl);

  /** @ngInject */
  function MailTabCtrl($scope, $state, $stateParams, composeModal, mailMessages) {

    $scope.selectTab = function (tab) {
      $state.go('mail.label',{
        label : tab
      })
    };

    console.log($state);

    $scope.showCompose = function(subject, to , text){
      composeModal.open({
        subject : subject,
        to: to,
        text: text
      })
    };

    $scope.tabs = mailMessages.getTabs();
    $scope.currentTabLabel = $stateParams.label ? $stateParams.label : $scope.tabs[0].label;
  }

})();
