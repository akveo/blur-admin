/**
 * @author v.lugovsky
 * created on 17.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme')
      .filter('profilePicture', profilePicture);

  /** @ngInject */
  function profilePicture(layoutPaths) {
    return function(input, ext) {
      ext = ext || 'jpeg';
      //return layoutPaths.images.profile + input + '.' + ext;
      return layoutPaths.images.pictures + input + '.' + ext;
    };
  }

})();
