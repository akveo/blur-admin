/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.notifications')
      .controller('NotificationsPageCtrl', NotificationsPageCtrl);

  /** @ngInject */
  function NotificationsPageCtrl($scope, toastr, toastrConfig) {
    $scope.types = ['success', 'error', 'info', 'warning'];

    $scope.quotes = [
      {
        title: 'Come to Freenode',
        message: 'We rock at <em>#angularjs</em>',
        options: {
          allowHtml: true
        }
      },
      {
        title: 'Looking for bootstrap?',
        message: 'Try ui-bootstrap out!'
      },
      {
        title: 'Wants a better router?',
        message: 'We have you covered with ui-router'
      },
      {
        title: 'Angular 2',
        message: 'Is gonna rock the world'
      },
      {
        title: null,
        message: 'Titles are not always needed'
      },
      {
        title: null,
        message: 'Toastr rock!'
      },
      {
        title: 'What about nice html?',
        message: '<strong>Sure you <em>can!</em></strong>',
        options: {
          allowHtml: true
        }
      },
      {
        title: 'Ionic is <em>cool</em>',
        message: 'Best mobile framework ever',
        options: {
          allowHtml: true
        }
      }
    ];

    var openedToasts = [];
    $scope.options = {
      autoDismiss: false,
      position: 'toast-top-right',
      type: 'success',
      timeout: '5000',
      extendedTimeout: '1000',
      html: false,
      closeButton: false,
      tapToDismiss: true,
      progressBar: false,
      newestOnTop: true,
      maxOpened: 0,
      preventDuplicates: false,
      preventOpenDuplicates: false,
      title: "Some title here",
      msg: "Type your message here"
    };

    $scope.$watchCollection('options', function (newValue) {
      toastrConfig.autoDismiss = newValue.autoDismiss;
      toastrConfig.allowHtml = newValue.html;
      toastrConfig.extendedTimeOut = parseInt(newValue.extendedTimeout, 10);
      toastrConfig.positionClass = newValue.position;
      toastrConfig.timeOut = parseInt(newValue.timeout, 10);
      toastrConfig.closeButton = newValue.closeButton;
      toastrConfig.tapToDismiss = newValue.tapToDismiss;
      toastrConfig.progressBar = newValue.progressBar;
      toastrConfig.newestOnTop = newValue.newestOnTop;
      toastrConfig.maxOpened = newValue.maxOpened;
      toastrConfig.preventDuplicates = newValue.preventDuplicates;
      toastrConfig.preventOpenDuplicates = newValue.preventOpenDuplicates;
    });


    $scope.clearLastToast = function () {
      var toast = openedToasts.pop();
      toastr.clear(toast);
    };

    $scope.clearToasts = function () {
      toastr.clear();
    };

    $scope.openRandomToast = function () {
      var type = Math.floor(Math.random() * 4);
      var quote = Math.floor(Math.random() * 7);
      var toastType = $scope.types[type];
      var toastQuote = $scope.quotes[quote];
      openedToasts.push(toastr[toastType](toastQuote.message, toastQuote.title, toastQuote.options));
      $scope.optionsStr = "toastr." + toastType + "(\'" + toastQuote.message + "\', \'" + toastQuote.title + "', " + JSON.stringify(toastQuote.options || {}, null, 2) + ")";
    };

    $scope.openToast = function () {
      openedToasts.push(toastr[$scope.options.type]($scope.options.msg, $scope.options.title));
      var strOptions = {};
      for (var o in  $scope.options) if (o != 'msg' && o != 'title')strOptions[o] = $scope.options[o];
      $scope.optionsStr = "toastr." + $scope.options.type + "(\'" + $scope.options.msg + "\', \'" + $scope.options.title + "\', " + JSON.stringify(strOptions, null, 2) + ")";
    };
  }

})();
