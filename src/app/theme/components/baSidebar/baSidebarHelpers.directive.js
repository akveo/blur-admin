/**
 * @author v.lugovsky
 * created on 03.05.2016
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme.components')
      .directive('baSidebarToggleMenu', baSidebarToggleMenu)
      .directive('baSidebarCollapseMenu', baSidebarCollapseMenu)
      .directive('baUiSrefTogglingSubmenu', baUiSrefTogglingSubmenu)
      .directive('baUiSrefToggler', baUiSrefToggler);

  /** @ngInject */
  function baSidebarToggleMenu(baSidebarService) {
    return {
      restrict: 'A',
      link: function(scope, elem) {
        elem.on('click', function($evt) {
          $evt.originalEvent.$sidebarEventProcessed = true;
          scope.$apply(function() {
            baSidebarService.toggleMenuCollapsed();
          });
        });
      }
    };
  }

  /** @ngInject */
  function baSidebarCollapseMenu(baSidebarService) {
    return {
      restrict: 'A',
      link: function(scope, elem) {
        elem.on('click', function($evt) {
          $evt.originalEvent.$sidebarEventProcessed = true;
          if (!baSidebarService.isMenuCollapsed()) {
            scope.$apply(function() {
              baSidebarService.setMenuCollapsed(true);
            });
          }
        });
      }
    };
  }

  /** @ngInject */
  function baUiSrefTogglingSubmenu($state) {
    return {
      restrict: 'A',
      link: function(scope, el, attrs) {
        var stateToWatch = scope.$eval(attrs.baUiSrefTogglingSubmenu);

        if (_isState($state.current)) {
          el.parent().addClass('ba-sidebar-item-expanded');
        }

        scope.$on('$stateChangeStart', function (event, toState) {
          if (!_isState(toState) && el.parent().hasClass('ba-sidebar-item-expanded')) {
            el.slideToggle();
            el.parent().removeClass('ba-sidebar-item-expanded');
          }
        });

        scope.$on('$stateChangeSuccess', function (event, toState) {
          if (_isState(toState) && !el.parent().hasClass('ba-sidebar-item-expanded')) {
            el.slideToggle();
            el.parent().addClass('ba-sidebar-item-expanded');
          }
        });

        function _isState(state) {
          return state && state.name.indexOf(stateToWatch) == 0;
        }
      }
    };
  }

  /** @ngInject */
  function baUiSrefToggler() {
    return {
      restrict: 'A',
      link: function(scope, el, attrs) {
        el.on('click', function() {
          el.next().slideToggle();
          el.parent().toggleClass('ba-sidebar-item-expanded');
        });
      }
    };
  }

})();
