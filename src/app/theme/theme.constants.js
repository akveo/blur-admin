/**
 * @author v.lugovsky
 * created on 15.12.2015
 */
(function () {
  'use strict';

  var IMAGES_ROOT = 'assets/img/';

  angular.module('BlurAdmin.theme')
      .constant('layoutColors', {
        primary:        '#41bee9',
        info:           '#5bc0de',
        danger:         '#9d498c',
        success:        '#348779',
        warning:        '#bbcb50',
        default:        '#e1e1e1',
        successLight:   '#85BA54',
        primaryLight:   '#5FBCBB',
        warningLight:   '#c5d36a',
        primaryDark:    '#1488b0',
        dangerDark:     '#632e58',
        successDark:    '#1c4a42',
        warningDark:    '#8b992d',

        primaryBg:      '#C5ECF9',
        successBg:      '#C1DBD7',
        dangerBg:       '#E1C8DD',

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
