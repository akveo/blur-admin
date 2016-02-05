/**
 * @author v.lugovsky
 * created on 18.11.2015
 */
(function() {
  'use strict';

  var SKIN_CLASS_PREFIX = 'badmin';

  var ADMIN_STYLES = [
    {
      name: 'Transparent (beta)',
      bodyClass: SKIN_CLASS_PREFIX + '-transparent',
      panelType: "panel-blur",
      thumbnailUrl: 'assets/img/app/skin-thumbnails/02_transparent.jpg',
      chartColorProfile: 'transparent'
    },
    {
      name: 'Default',
      bodyClass: '',
      thumbnailUrl: 'assets/img/app/skin-thumbnails/01_default.jpg',
      panelType: "panel-white",
      chartColorProfile: 'whitePanel'
    },
    {
      name: 'Peachy',
      bodyClass: SKIN_CLASS_PREFIX + '-peachy',
      thumbnailUrl: 'assets/img/app/skin-thumbnails/04_peachy.jpg',
      panelType: "panel-white",
      chartColorProfile: 'whitePanel'
    },
    {
      name: 'Blue',
      bodyClass: SKIN_CLASS_PREFIX + '-blue',
      thumbnailUrl: 'assets/img/app/skin-thumbnails/03_blue.jpg',
      panelType: "panel-white",
      chartColorProfile: 'whitePanel'
    },
    {
      name: 'Material',
      bodyClass: SKIN_CLASS_PREFIX + '-material',
      thumbnailUrl: 'assets/img/app/skin-thumbnails/05_material.jpg',
      panelType: "panel-white",
      chartColorProfile: 'whitePanel'
    },
    {
      name: 'Transblue (beta)',
      bodyClass: SKIN_CLASS_PREFIX + '-transblue',
      panelType: "panel-blur",
      thumbnailUrl: 'assets/img/app/skin-thumbnails/06_transblue.jpg',
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
