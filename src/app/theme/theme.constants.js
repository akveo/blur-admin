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

      primaryCharts: '#218d9d',
      successCharts: '#c2eb70',
      infoCharts: '#59c3b8',
      warningCharts: '#f9d673',
      dangerCharts: '#faad74',
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
        amChart: 'bower_components/ammap/dist/ammap/images/'
      }
    });

})();
