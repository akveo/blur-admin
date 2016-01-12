/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme.components')
    .controller('SidebarCtrl', SidebarCtrl);

  /** @ngInject */
  function SidebarCtrl($scope, $timeout, $location, $rootScope, layoutSizes, $state) {

    var states = $state.get().filter(function(s) {
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
            root: '#/' + s.name.replace('.', '/'),
          };
        })
        .sort(function(a, b) {
          return (a.level - b.level) * 100 + a.order - b.order;
        });

    var menuItems = states.filter(function(item) {
      return item.level == 0;
    });
    menuItems.forEach(function(item) {
       var children = states.filter(function(child) {
        return child.level == 1 && child.name.indexOf(item.name) == 0;
      });
      item.subMenu = children.length ? children : null;
    });

    var staticMenuItems = [
      {
        title: 'Login Page',
        icon: 'ion-log-out',
        root: 'auth.html'
      },
      {
        title: '404 Page',
        icon: 'ion-document',
        root: '404.html'
      },
      {
        title: 'Menu Level 1',
        icon: 'ion-ios-more',
        subMenu: [
          {
            title: 'Menu Level 1.1'
          },
          {
            title: 'Menu Level 1.2',
            subMenu: [
              {
                title: 'Menu Level 1.2.1'
              }
            ]
          }
        ]
      }
    ];

    $scope.menuItems = menuItems.concat(staticMenuItems);

    function changeSelectElemTopValue() {
      $timeout(function () {
        var selectedItem = $('.al-sidebar-list-item.selected');
        if (selectedItem) {
          $scope.selectElemTop = selectedItem.position().top;
        }
      }, 101);
    }

    function selectMenuItem() {
      $.each($scope.menuItems, function (index, value) {
        value.selected = value.root === '#' + $location.$$url;

        if (value.subMenu) {
          var hasSelectedSubmenu = false;
          $.each(value.subMenu, function (subIndex, subValue) {
            subValue.selected = subValue.root === '#' + $location.$$url;
            if (subValue.selected) {
              hasSelectedSubmenu = true;
            }
          });
          value.selected = hasSelectedSubmenu;
        }
      });
      changeSelectElemTopValue();
    }

    selectMenuItem();

    $scope.$on('$locationChangeSuccess', function () {
      selectMenuItem();
    });

    $scope.menuExpand = function () {
      $rootScope.$isMenuCollapsed = false;
    };

    $scope.menuCollapse = function () {
      $rootScope.$isMenuCollapsed = true;
    };

    $rootScope.$watch('$isMenuCollapsed', function (newValue) {
      if (!newValue && !$scope.selectElemTop) {
        changeSelectElemTopValue();
      }
    });

    // watch window resize to change menu collapsed state if needed
    $(window).resize(function () {
      var isMenuShouldCollapsed = $(window).width() <= layoutSizes.resWidthCollapseSidebar;
      if ($scope.isMenuShouldCollapsed !== isMenuShouldCollapsed) {
        $scope.$apply(function () {
          $rootScope.$isMenuCollapsed = isMenuShouldCollapsed;
        });
      }
      $scope.isMenuShouldCollapsed = isMenuShouldCollapsed;
    });

    $scope.toggleSubMenu = function ($event, item) {
      var submenu = $($event.currentTarget).next();

      if ($rootScope.$isMenuCollapsed) {
        if (!item.slideRight) {
          $timeout(function () {
            item.slideRight = true;
            $scope.anySlideRight = true;
          }, 20);
        }
      } else {
        submenu.slideToggle(100);
        changeSelectElemTopValue();
      }
    };

    window.onclick = function () {
      $timeout(function () {

        if ($scope.anySlideRight) {
          $scope.menuItems.map(function (val) {
            return val.slideRight = false;
          });
          $scope.anySlideRight = false;
        }

      }, 10);
    };

    $scope.hoverItem = function ($event) {
      $scope.showHoverElem = true;
      var menuTopValue = 66;
      $scope.hoverElemTop = $event.currentTarget.getBoundingClientRect().top - menuTopValue;
    };

    $scope.collapseSidebarIfSmallRes = function () {
      if (window.innerWidth <= layoutSizes.resWidthCollapseSidebar) {
        $rootScope.$isMenuCollapsed = true;
      }
    };
  }
})();