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
        primaryDark:    '#003e4b',
        dangerDark:     '#c37350',
        successDark:    '#18524b',
        warningDark:    '#8adc68',

        primaryBg:      '#0d8da2',
        successBg:      '#02b6a2',
        dangerBg:       '#ffcd92',
        infoBg:       '#a8e6b3',
        warningBg:       '#e4fbd3',

        defaultText:    '#ffffff'
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
