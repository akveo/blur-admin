/**
 * @author v.lugovsky
 * created on 15.12.2015
 */
(function () {
  'use strict';

  var IMAGES_ROOT = 'assets/img/';

  angular.module('BlurAdmin.theme')
      .constant('layoutColors', {
        primary:        '#005562',
        info:           '#6eba8c',
        success:        '#0e8174',
        warning:        '#b9f2a1',
        danger:         '#ffa76d',
        default:        '#ffffff',
        successLight:   '#85BA54',
        primaryLight:   '#5FBCBB',
        warningLight:   '#c5d36a',
        primaryDark:    '#001d21',
        dangerDark:     '#573925',
        successDark:    '#052c27',
        warningDark:    '#3f5237',

        primaryBg:      '#b3ccd0',
        successBg:      '#b7d9d5',
        dangerBg:       '#ffe5d3',
        infoBg:       '#d4eadd',
        warningBg:       '#eafbe3',

        defaultText:    '#585858'
      })
      .constant('layoutSizes', {
        resWidthCollapseSidebar: 1200,
        resWidthHideSidebar: 500
      })
      .constant('layoutPaths', {
        images: {
          root: IMAGES_ROOT,
          profile: IMAGES_ROOT + 'app/profile/',
          amChart: 'bower_components/amcharts/dist/amcharts/images/'
        }
      });

})();
