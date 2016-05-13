/**
 * @author v.lugovsky
 * created on 15.12.2015
 */
(function () {
  'use strict';

  var IMAGES_ROOT = 'assets/img/';

  var blurTheme = true;

  var basic = {
    default: 'rgba(#000000, 0.2)',
    defaultText: '#ffffff',
    border: '#dddddd',
    borderDark: '#aaaaaa',
  };

  // main functional color scheme
  var colorScheme = {
    primary: '#209e91',
    info: '#2dacd1',
    success: '#90b900',
    warning: '#dfb81c',
    danger: '#e85656',
  };

  // dashboard colors for charts
  var dashboardColors = {
    blueStone: '#005562',
    surfieGreen: '#0e8174',
    silverTree: '#6eba8c',
    gossip: '#b9f2a1',
    white: '#ffffff',
  };

  angular.module('BlurAdmin.theme')
    .constant('layoutTheme', {
      blur: blurTheme,
    })
    .constant('layoutColors', {
      default: basic.default,
      defaultText: basic.defaultText,
      border: basic.border,
      borderDark: basic.borderDark,

      primary: colorScheme.primary,
      info: colorScheme.info,
      success: colorScheme.success,
      warning: colorScheme.warning,
      danger: colorScheme.danger,

      primaryLight: tint(colorScheme.primary, 30),
      infoLight: tint(colorScheme.info, 30),
      successLight: tint(colorScheme.success, 30),
      warningLight: tint(colorScheme.warning, 30),
      dangerLight: tint(colorScheme.danger, 30),

      primaryDark: shade(colorScheme.primary, 15),
      infoDark: shade(colorScheme.info, 15),
      successDark: shade(colorScheme.success, 15),
      warningDark: shade(colorScheme.warning, 15),
      dangerDark: shade(colorScheme.danger, 15),

      dashboard: {
        blueStone: dashboardColors.blueStone,
        surfieGreen: dashboardColors.surfieGreen,
        silverTree: dashboardColors.silverTree,
        gossip: dashboardColors.gossip,
        white: dashboardColors.white,

        blueStoneDark: shade(dashboardColors.blueStone, 15),
        surfieGreenDark: shade(dashboardColors.surfieGreen, 15),
        silverTreeDark: shade(dashboardColors.silverTree, 15),
        gossipDark: shade(dashboardColors.gossip, 15),
        whiteDark: shade(dashboardColors.white, 5),
      },
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

  function shade(color, weight) {
    return mix('#000000', color, weight);
  }

  function tint(color, weight) {
    return mix('#ffffff', color, weight);
  }

  //SASS mix function
  function mix(color1, color2, weight) {
    // convert a decimal value to hex
    function d2h(d) {
      return d.toString(16);
    }
    // convert a hex value to decimal
    function h2d(h) {
      return parseInt(h, 16);
    }

    var result = "#";
    for(var i = 1; i < 7; i += 2) {
      var color1Part = h2d(color1.substr(i, 2));
      var color2Part = h2d(color2.substr(i, 2));
      var resultPart = d2h(Math.floor(color2Part + (color1Part - color2Part) * (weight / 100.0)));
      result += ('0' + resultPart).slice(-2);
    }
    return result;
  }
})();
