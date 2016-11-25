/**
 * @author p.maslava
 * created on 28.11.2016
 */

(function() {
  'use strict';

  angular.module('BlurAdmin.pages.form')
    .filter('groupSelectpickerOptions', GroupSelectpickerOptions);

  /** @ngInject */
  function GroupSelectpickerOptions() {
    return function (items, props) {
      var out = [];

      if (angular.isArray(items)) {
        var keys = Object.keys(props);

        items.forEach(function (item) {
          var itemMatches = false;

          for (var i = 0; i < keys.length; i++) {
            var prop = keys[i];
            var text = props[prop].toLowerCase();
            if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
              itemMatches = true;
              break;
            }
          }

          if (itemMatches) {
            out.push(item);
          }
        });
      } else {
        // Let the output be the input untouched
        out = items;
      }

      return out;
    };
  }
})();