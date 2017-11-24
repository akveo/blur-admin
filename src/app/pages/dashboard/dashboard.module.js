/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard', [])
      .config(routeConfig).config(chartJsConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('dashboard', {
          url: '/dashboard',
          templateUrl: 'app/pages/dashboard/dashboard.html',
          title: 'Dashboard',
          sidebarMeta: {
            icon: 'ion-android-home',
            order: 0,
          },
        });
  }

  function chartJsConfig(ChartJsProvider, baConfigProvider) {
    var layoutColors = baConfigProvider.colors;
    // Configure all charts
    ChartJsProvider.setOptions({
        chartColors: [
            layoutColors.primary, layoutColors.danger, layoutColors.warning, layoutColors.success, layoutColors.info, layoutColors.default, layoutColors.primaryDark, layoutColors.successDark, layoutColors.warningLight, layoutColors.successLight, layoutColors.primaryLight],
        responsive: true,
        maintainAspectRatio: false,
        animation: {
            duration: 2500
        },
        scale: {
            gridLines: {
                color: layoutColors.border
            },
            scaleLabel: {
                fontColor: layoutColors.defaultText
            },
            ticks: {
                fontColor: layoutColors.defaultText,
                showLabelBackdrop: false
            }
        }
    });
    // Configure all line charts
    ChartJsProvider.setOptions('Line', {
        datasetFill: false
    });
    // Configure all radar charts
    ChartJsProvider.setOptions('radar', {
        scale: {
            pointLabels: {
                fontColor: layoutColors.defaultText
            },
            ticks: {
                maxTicksLimit: 5,
                display: false
            }
        }
    });
    // Configure all bar charts
    ChartJsProvider.setOptions('bar', {
        tooltips: {
            enabled: false
        }
    });
}

})();