'use strict';

blurAdminApp.directive('sidebar', function () {
  return {
    restrict: 'E',
    templateUrl: 'app/components/sidebar/sidebar.html',
    controller: ['$scope', '$element', '$window', '$timeout', '$location', function ($scope, $element, $window, $timeout, $location) {

      var resWidthCollapseSidebar = 1120;
      var resWidthHideSidebar = 500;
      var body = $('body');
      var collapsedClass = 'collapsed-sidebar';

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
            }
          ]
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
        if (window.innerWidth > resWidthCollapseSidebar) {
          body.toggleClass(collapsedClass);
          $scope.showSidebar = false;
        } else {
          body.removeClass(collapsedClass);
          if (!$scope.selectElemTop) {
            changeSelectElemTopValue();
          }

          if ($scope.showSidebar) {
            $scope.showSidebar = false;
          } else {
            $timeout(function () {
              $scope.showSidebar = true;
            }, 20);
          }
        }
      };

      $scope.toggleSubMenu = function ($event, item) {
        var submenu = $($event.currentTarget).next();

        var isCollapsedSidebar = body.hasClass(collapsedClass) || (!$scope.showSidebar && window.innerWidth <= resWidthCollapseSidebar && window.innerWidth > resWidthHideSidebar);
        if (isCollapsedSidebar) {
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
            $scope.menuItems.map(function(val){
              return val.slideRight = false;
            });
            $scope.anySlideRight = false;
          }

        }, 10);
      };

      $scope.hoverItem = function ($event) {
        $scope.showHoverElem = true;
        $scope.hoverElemTop = ($event.currentTarget.getBoundingClientRect().top + $window.scrollY);
      };

      $scope.hideHoverElement = function () {
        $scope.showHoverElem = false;
      };
    }]
  };
});