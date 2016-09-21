(function() {
  'use strict';

  angular.module('BlurAdmin.theme.components')
      .provider('baSidebarService', baSidebarServiceProvider);

  /** @ngInject */
  function baSidebarServiceProvider() {
    var staticMenuItems = [];
    var menuItems = [];

    this.addStaticItem = function() {
      staticMenuItems.push.apply(staticMenuItems, arguments);
    };

    /** @ngInject */
    this.$get = function($state, layoutSizes) {
      return new _factory();

      function _factory() {
        var isMenuCollapsed = shouldMenuBeCollapsed();

        this.getMenuItems = function () {
          if (!menuItems.length) {
            menuItems = createMenu();
          }
          return menuItems;
        };

        this.addMenuItem = function(item) {
          menuItems.push(item);
        };

        this.shouldMenuBeCollapsed = shouldMenuBeCollapsed;
        this.canSidebarBeHidden = canSidebarBeHidden;

        this.setMenuCollapsed = function(isCollapsed) {
          isMenuCollapsed = isCollapsed;
        };

        this.isMenuCollapsed = function() {
          return isMenuCollapsed;
        };

        this.toggleMenuCollapsed = function() {
          isMenuCollapsed = !isMenuCollapsed;
        };

        this.getAllStateRefsRecursive = function(item) {
          var result = [];
          _iterateSubItems(item);
          return result;

          function _iterateSubItems(currentItem) {
            currentItem.subMenu && currentItem.subMenu.forEach(function(subItem) {
              subItem.stateRef && result.push(subItem.stateRef);
              _iterateSubItems(subItem);
            });
          }
        };

        function createMenu() {
          var parentLevel = 0;
          var states = defineMenuItemStates();
          var parents = states.filter(function(item) {
            return item.level == parentLevel;
          });

          bindMenuItems(parents, ++parentLevel);
          return parents.concat(staticMenuItems);

          function bindMenuItems(parents, childLevel) {
            var child = states.filter(function (item) {
              return item.level == childLevel;
            });
            if (child.length) {
              parents.forEach(function (p) {
                var children = child.filter(function (c) {
                  return c.name.indexOf(p.name) === 0;
                });
                p.subMenu = children.length ? children : null;
              });
              bindMenuItems(child, ++childLevel)
            }
          }
        }

        function defineMenuItemStates() {
          return $state.get()
              .filter(function(s) {
                return s.sidebarMeta;
              })
              .map(function(s) {
                var meta = s.sidebarMeta;
                return {
                  name: s.name,
                  title: s.title,
                  level: (s.name.match(/\./g) || []).length,
                  order: meta.order,
                  icon: meta.icon,
                  stateRef: s.name,
                };
              })
              .sort(function(a, b) {
                return (a.level - b.level) * 100 + a.order - b.order;
              });
        }

        function shouldMenuBeCollapsed() {
          return window.innerWidth <= layoutSizes.resWidthCollapseSidebar;
        }

        function canSidebarBeHidden() {
          return window.innerWidth <= layoutSizes.resWidthHideSidebar;
        }
      }

    };

  }
})();
