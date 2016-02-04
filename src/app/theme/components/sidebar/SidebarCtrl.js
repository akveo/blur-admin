/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme.components')
    .controller('SidebarCtrl', SidebarCtrl);

  /** @ngInject */
  function SidebarCtrl($scope, $rootScope, $timeout, $location, layoutSizes, sidebarService, $element) {

    $scope.menuItems = sidebarService.getMenuItems();
    $scope.menuHeight = $element[0].childNodes[0].clientHeight - 84;

    function changeSelectElemTopValue() {
      $timeout(function () {
        var selectedItem = $('.al-sidebar-list-item.selected');
        if (selectedItem.length) {
          $scope.selectElemTop = selectedItem.position().top;
        }
      }, 101);
    }

    function selectMenuItem() {
      $.each($scope.menuItems, function (index, menu) {
        menu.selected = ('#' + $location.$$url).indexOf(menu.root) == 0;
        menu.expanded = menu.selected;
        if (menu.subMenu) {
          $.each(menu.subMenu, function (subIndex, subMenu) {
            subMenu.selected = ('#' + $location.$$url).indexOf(subMenu.root) == 0;
          });
        }
      });
      changeSelectElemTopValue();
    }

    selectMenuItem();

    $scope.$on('$locationChangeSuccess', function () {
      selectMenuItem();
    });

    $scope.menuExpand = function () {
      $scope.$isMenuCollapsed = false;
    };

    $scope.menuCollapse = function () {
      $scope.$isMenuCollapsed = true;
    };

    $scope.$watch('$isMenuCollapsed', function (newValue) {
      if (!newValue && !$scope.selectElemTop) {
        changeSelectElemTopValue();
      }
    });

    // watch window resize to change menu collapsed state if needed
    $(window).resize(function () {
      var isMenuShouldCollapsed = $(window).width() <= layoutSizes.resWidthCollapseSidebar;
      var scopeApplied = false;
      if ($scope.isMenuShouldCollapsed !== isMenuShouldCollapsed) {
        $scope.$apply(function () {
          $scope.menuHeight = $element[0].childNodes[0].clientHeight - 84;
          $scope.$isMenuCollapsed = isMenuShouldCollapsed;
          scopeApplied = true;
        });
      }
      if (!scopeApplied) {
        $scope.$apply(function () {
          $scope.menuHeight = $element[0].childNodes[0].clientHeight - 84;
        });
      }
      $scope.isMenuShouldCollapsed = isMenuShouldCollapsed;

    });

    $scope.toggleSubMenu = function ($event, item) {
      var submenu = $($event.currentTarget).next();
      if ($scope.$isMenuCollapsed) {
        $scope.menuExpand();
        if (!item.selected) {
          $timeout(function () {
            item.selected = !item.selected;
            changeSelectElemTopValue();
            submenu.slideToggle();
          });
        }
      } else {
        item.selected = !item.selected;
        changeSelectElemTopValue();
        submenu.slideToggle();
      }

    };

    function toggleExpandedSubmenu() {

      $timeout(function () {

      }, 200);
    }

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
  }
})();