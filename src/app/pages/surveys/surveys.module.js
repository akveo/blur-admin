/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.surveys', [
    'BlurAdmin.pages.surveys.create',
    'BlurAdmin.pages.surveys.list',
  ]).config(routeConfig).config(chartJsConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('surveys', {
          url: '/surveys',
          template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
          title: 'Surveys',
          sidebarMeta: {
          	icon: 'ion-gear-a',
            order: 1000,
          },
        }).state('surveys.create', {
          url: '/create',
          templateUrl: 'app/pages/surveys/create/create.html',
          controller: "CreateTabCtrl",
          title: 'Create new model',
          sidebarMeta: {
            order: 1000,
          },
        }).state('surveys.edit', {
          url: '/edit/:survey_id',
          templateUrl: 'app/pages/surveys/create/create.html',
          controller: "CreateTabCtrl",
          title: 'Edit a survey'
        }).state('surveys.list', {
          url: '/list',
          templateUrl: 'app/pages/surveys/list/list.html',
          controller: "list as vm",
          title: 'My surveys',
          sidebarMeta: {
            order: 2000,
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
