/**
 * @author v.lugovsky
 * created on 15.12.2015
 */
(function () {
  'use strict';

  var IMAGES_ROOT = 'assets/img/';

  angular.module('BlurAdmin.theme')
    .constant('layoutColors', {
      primary: '#209e91',
      info: '#2dacd1',
      success: '#90b900',
      warning: '#dfb81c',
      danger: '#e85656',
      default: '#ffffff',
      successLight: '#85BA54',
      primaryLight: '#5FBCBB',
      warningLight: '#c5d36a',

      primaryDark: '#17857a',
      dangerDark: '#c24848',
      successDark: '#7b9e00',
      warningDark: '#c6a315',
      infoDark: '#258ead',

      primaryBg: '#63cec3',
      infoBg: '#5abfdd',
      successBg: '#b5d448',
      warningBg: '#e8ca52',
      dangerBg: '#f67171',

      primaryCharts: '#005562',
      successCharts: '#6eba8c',
      infoCharts: '#0e8174',
      warningCharts: '#b9f2a1',
      dangerCharts: '#ffa76d',
      defaultCharts: '#ffffff',

      defaultText: '#ffffff'
    })
    .constant('layoutSizes', {
      resWidthCollapseSidebar: 1200,
      resWidthHideSidebar: 500
    })
    .constant('layoutPaths', {
      images: {
        root: IMAGES_ROOT,
        profile: IMAGES_ROOT + 'app/profile/',
        amMap: 'assets/img/theme/vendor/ammap//dist/ammap/images/',
        amChart: 'assets/img/theme/vendor/amcharts/dist/amcharts/images/'
      }
    });

})();
