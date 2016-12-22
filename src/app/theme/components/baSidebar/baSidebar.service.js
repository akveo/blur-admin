(function() {
  'use strict';

  angular.module('BlurAdmin.theme.components')
      .provider('baSidebarService', baSidebarServiceProvider);

  /** @ngInject */
  function baSidebarServiceProvider() {
    var staticMenuItems = [];

    this.addStaticItem = function() {
      staticMenuItems.push.apply(staticMenuItems, arguments);
    };

    /** @ngInject */
    this.$get = function($state, layoutSizes) {
      return new _factory();

      function _factory() {
        var isMenuCollapsed = shouldMenuBeCollapsed();

        this.getMenuItems = function() {
          var states = defineMenuItemStates();
          //result shoud like [0,1,2]
					var levels = states.map(function(e){
						return e.level;
					}).filter(function(e, i, arr){
						return i === arr.indexOf(e);
					});
					//add subMenu for each level item
					levels.forEach(function(level){
						var menuItems = states.filter(function(e){
							return e.level === level;
						});
						menuItems.forEach(function(item){
							var children = states.filter(function(child){
								return child.level - level === 1 && child.name.indexOf(item.name) === 0;
							});
							item.subMenu = children.length ? children : null;
						});
					});
					return states.filter(function(e){
						return e.level === 0;
					}).concat(staticMenuItems);
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
