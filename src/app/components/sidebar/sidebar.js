'use strict';

blurAdminApp.directive('sidebar', function () {
  return {
    restrict: 'E',
    templateUrl: 'app/components/sidebar/sidebar.html',
    scope: {
      isMenuCollapsed: '='
    },
    controller: ['$scope', '$element', '$window', '$timeout', '$location', function ($scope, $element, $window, $timeout, $location) {
      $scope.menuItems = [
        {
          title: 'Dashboard',
          icon: 'ion-android-home',
          root: '#/dashboard'
        },
        {
          title: 'Charts',
          icon: 'ion-stats-bars',
          root: '#/charts'
        },
        {
          title: 'Tables',
          icon: 'ion-grid',
          root: '#/tables'
        },
        {
          title: 'Form Elements',
          icon: 'ion-compose',
          subMenu: [
            {
              title: 'Inputs',
              root: '#/form-inputs'
            },
            {
              title: 'Form Layouts',
              root: '#/form-layouts'
            }
          ]
        },
        {
          title: 'UI Elements',
          icon: 'ion-android-laptop',
          subMenu: [
            {
              title: 'Typography',
              root: '#/typography'
            },
            {
              title: 'Buttons',
              root: '#/buttons'
            },
            {
              title: 'Icons',
              root: '#/icons'
            },
            {
              title: 'Modals',
              root: '#/modals'
            },
            {
              title: 'Grid',
              root: '#/grid'
            },
            {
              title: 'Alerts',
              root: '#/alerts'
            },
            {
              title: 'Progress Bars',
              root: '#/progressBars'
            }
          ]
        },
        {
          title: 'Mail',
          icon: 'ion-ios-email-outline',
          root: '#/mail'
        },
        {
          title: 'Maps',
          icon: 'ion-ios-location-outline',
          root: '#/maps'
        },
        {
          title: 'User Profile',
          icon: 'ion-person',
          root: '#/profile'
        },
        {
          title: 'Login Page',
          icon: 'ion-log-out',
          root: 'auth.html'
        },
        {
          title: '404 Page',
          icon: 'ion-document',
          root: '404.html'
        }
      ];

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
        $scope.isMenuCollapsed = false;
      };

      $scope.menuCollapse = function () {
        $scope.isMenuCollapsed = true;
      };

      $scope.$watch('isMenuCollapsed', function(newValue) {
        if (!newValue && !$scope.selectElemTop) {
          changeSelectElemTopValue();
        }
      })

      // watch window resize to change menu collapsed state if needed
      $(window).resize(function () {
        var isMenuShouldCollapsed = $(window).width() <= resWidthCollapseSidebar;
        if ($scope.isMenuShouldCollapsed !== isMenuShouldCollapsed) {
          $scope.$apply(function () {
            $scope.isMenuCollapsed = isMenuShouldCollapsed;
          });
        }
        $scope.isMenuShouldCollapsed = isMenuShouldCollapsed;
      });

      $scope.toggleSubMenu = function ($event, item) {
        var submenu = $($event.currentTarget).next();

        if ($scope.isMenuCollapsed) {
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
        if (window.innerWidth <= resWidthCollapseSidebar) {
          $scope.isMenuCollapsed = true;
        }
      };
    }]
  };
});