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
      thumbnailUrl: 'img/01_default.jpg'
    },
    {
      name: 'Transparent',
      bodyClass: SKIN_CLASS_PREFIX + '-transparent',
      thumbnailUrl: 'img/02_transparent.jpg'
    },
    {
      name: 'Blue',
      bodyClass: SKIN_CLASS_PREFIX + '-blue',
      thumbnailUrl: 'img/03_blue.jpg'
    },
    {
      name: 'Peachy',
      bodyClass: SKIN_CLASS_PREFIX + '-peachy',
      thumbnailUrl: 'img/04_peachy.jpg'
    },
    {
      name: 'Material',
      bodyClass: SKIN_CLASS_PREFIX + '-material',
      thumbnailUrl: 'img/05_material.jpg'
    },
    {
      name: 'Transblue',
      bodyClass: SKIN_CLASS_PREFIX + '-transblue',
      thumbnailUrl: 'img/06_transblue.jpg'
    },
    {
      name: 'Grey',
      bodyClass: SKIN_CLASS_PREFIX + '-grey',
      thumbnailUrl: 'img/07_grey.jpg'
    }
  ];

  blurAdminApp
      .constant('tplSkinClassPrefix', SKIN_CLASS_PREFIX)
      .constant('tplSkinEnum', ADMIN_STYLES);

})();
