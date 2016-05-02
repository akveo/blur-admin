(function() {
  'use strict';

  angular.module('BlurAdmin.theme.components')
      .service('baSidebarService', baSidebarService);

  /** @ngInject */
  function baSidebarService($state, layoutSizes) {

    var isMenuCollapsed = shouldMenuBeCollapsed();

    var staticMenuItems = [ {
        title: 'Pages',
        icon: 'ion-document',
        subMenu: [{
            title: 'Sign In',
            root: 'auth.html',
            blank: true
          }, {
            title: 'Sign Up',
            root: 'reg.html',
            blank: true
          }, {
            title: 'User Profile',
            root: '#/profile'
          }, {
            title: '404 Page',
            root: '404.html',
            blank: true
          }]
      }, {
        title: 'Menu Level 1',
        icon: 'ion-ios-more',
        subMenu: [{
            title: 'Menu Level 1.1',
            root: '#',
            disabled: true
          }, {
            title: 'Menu Level 1.2',
            subMenu: [{
              title: 'Menu Level 1.2.1',
              root: '#',
              disabled: true
            }]
          }]
      }];

    this.getMenuItems = function() {
      var states = defineMenuItemStates();
      var menuItems = states.filter(function(item) {
        return item.level == 0;
      });

      menuItems.forEach(function(item) {
        var children = states.filter(function(child) {
          return child.level == 1 && child.name.indexOf(item.name) === 0;
        });
        item.subMenu = children.length ? children : null;
      });

      return menuItems.concat(staticMenuItems);
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
})();
