/**
 * @author v.lugovsky
 * created on 18.11.2015
 */
(function() {
  'use strict';

  var ADMIN_STYLES = [
    {
      name: 'Default',
      bodyClass: '',
      thumbnailUrl: 'img/01_default.jpg'
    },
    {
      name: 'Transparent',
      bodyClass: 'badmin-transparent',
      thumbnailUrl: 'img/02_transparent.jpg'
    },
    {
      name: 'Blue',
      bodyClass: 'badmin-blue',
      thumbnailUrl: 'img/03_blue.jpg'
    },
    {
      name: 'Peachy',
      bodyClass: 'badmin-peachy',
      thumbnailUrl: 'img/04_peachy.jpg'
    },
    {
      name: 'Material',
      bodyClass: 'badmin-material',
      thumbnailUrl: 'img/05_material.jpg'
    },
    {
      name: 'Transblue',
      bodyClass: 'badmin-transblue',
      thumbnailUrl: 'img/06_transblue.jpg'
    },
    {
      name: 'Grey',
      bodyClass: 'badmin-grey',
      thumbnailUrl: 'img/07_grey.jpg'
    }
  ];

  blurAdminApp
      .constant('lookAndFeelEnum', ADMIN_STYLES);

})();
