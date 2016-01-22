/**
 * @author v.lugovsky
 * created on 18.11.2015
 */
(function() {
  'use strict';

  var SKIN_CLASS_PREFIX = 'badmin';

  var ADMIN_STYLES = [
    {
      name: 'Default',
      bodyClass: '',
      thumbnailUrl: 'assets/img/app/skin-thumbnails/01_default.jpg',
      chartColorProfile: 'whitePanel'
    },
    {
      name: 'Peachy',
      bodyClass: SKIN_CLASS_PREFIX + '-peachy',
      thumbnailUrl: 'assets/img/app/skin-thumbnails/04_peachy.jpg',
      chartColorProfile: 'whitePanel'
    },
    {
      name: 'Blue',
      bodyClass: SKIN_CLASS_PREFIX + '-blue',
      thumbnailUrl: 'assets/img/app/skin-thumbnails/03_blue.jpg',
      chartColorProfile: 'whitePanel'
    },
    {
      name: 'Material',
      bodyClass: SKIN_CLASS_PREFIX + '-material',
      thumbnailUrl: 'assets/img/app/skin-thumbnails/05_material.jpg',
      chartColorProfile: 'whitePanel'
    },
    {
      name: 'Transblue (beta)',
      bodyClass: SKIN_CLASS_PREFIX + '-transblue',
      thumbnailUrl: 'assets/img/app/skin-thumbnails/06_transblue.jpg',
      chartColorProfile: 'transparent'
    },
    {
      name: 'Transparent (beta)',
      bodyClass: SKIN_CLASS_PREFIX + '-transparent',
      thumbnailUrl: 'assets/img/app/skin-thumbnails/02_transparent.jpg',
      chartColorProfile: 'transparent'
    }
  ];

  var SKIN_CHART_COLORS = {
    whitePanel: {
      fontColors: undefined,
      axisColors: '#7b7b7b'
    },
    transparent: {
      fontColors: '#FFFFFF',
      axisColors: '#FFFFFF'
    }
  };

  angular.module('BlurAdmin.tplSkin')
      .constant('tplSkinClassPrefix', SKIN_CLASS_PREFIX)
      .constant('tplSkinEnum', ADMIN_STYLES)
      .constant('tplSkinChartColors', SKIN_CHART_COLORS);

})();
