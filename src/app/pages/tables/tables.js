'use strict';

angular.module('BlurAdmin.tablesPage', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/tables', {
        templateUrl: 'app/pages/tables/tables.html',
        controller: 'tablesPageCtrl'
      });
    }])
    .controller('tablesPageCtrl', ['$scope', function ($scope) {
      $scope.widgetBlocks = [
        {
          widgets: [
            [
              {
                title: 'Smart Table',
                url: 'app/pages/tables/widgets/smartTable.html'
              }
            ]
          ]
        },
        {
          widgets: [
            [
              {
                title: 'Hover Tows and Fix Headers',
                url: 'app/pages/tables/widgets/hoverRows.html'
              },
              {
                title: 'Condensed Table',
                url: 'app/pages/tables/widgets/condensedTable.html'
              }
            ],
            [
              {
                title: 'Striped Rows',
                url: 'app/pages/tables/widgets/stripedRows.html'
              },
              {
                title: 'Bordered Table',
                url: 'app/pages/tables/widgets/borderedTable.html'
              }
            ]
          ]
        }
      ];

      $scope.smartTableData = [
        {
          id: 1,
          firstName: 'Mark',
          lastName: 'Otto',
          username: '@mdo',
          email: 'mdo@gmail.com',
          age: '28'
        },
        {
          id: 2,
          firstName: 'Jacob',
          lastName: 'Thornton',
          username: '@fat',
          email: 'fat@yandex.ru',
          age: '45'
        },
        {
          id: 3,
          firstName: 'Larry',
          lastName: 'Bird',
          username: '@twitter',
          email: 'twitter@outlook.com',
          age: '18'
        },
        {
          id: 4,
          firstName: 'John',
          lastName: 'Snow',
          username: '@snow',
          email: 'snow@gmail.com',
          age: '20'
        },
        {
          id: 5,
          firstName: 'Jack',
          lastName: 'Sparrow',
          username: '@jack',
          email: 'jack@yandex.ru',
          age: '30'
        },
        {
          id: 6,
          firstName: 'Ann',
          lastName: 'Smith',
          username: '@ann',
          email: 'ann@gmail.com',
          age: '21'
        },
        {
          id: 7,
          firstName: 'Barbara',
          lastName: 'Black',
          username: '@barbara',
          email: 'barbara@yandex.ru',
          age: '43'
        },
        {
          id: 8,
          firstName: 'Sevan',
          lastName: 'Bagrat',
          username: '@sevan',
          email: 'sevan@outlook.com',
          age: '13'
        },
        {
          id: 9,
          firstName: 'Ruben',
          lastName: 'Vardan',
          username: '@ruben',
          email: 'ruben@gmail.com',
          age: '22'
        },
        {
          id: 10,
          firstName: 'Karen',
          lastName: 'Sevan',
          username: '@karen',
          email: 'karen@yandex.ru',
          age: '33'
        },
        {
          id: 11,
          firstName: 'Mark',
          lastName: 'Otto',
          username: '@mark',
          email: 'mark@gmail.com',
          age: '38'
        },
        {
          id: 12,
          firstName: 'Jacob',
          lastName: 'Thornton',
          username: '@jacob',
          email: 'jacob@yandex.ru',
          age: '48'
        },
        {
          id: 13,
          firstName: 'Haik',
          lastName: 'Hakob',
          username: '@haik',
          email: 'haik@outlook.com',
          age: '48'
        },
        {
          id: 14,
          firstName: 'Garegin',
          lastName: 'Jirair',
          username: '@garegin',
          email: 'garegin@gmail.com',
          age: '40'
        },
        {
          id: 15,
          firstName: 'Krikor',
          lastName: 'Bedros',
          username: '@krikor',
          email: 'krikor@yandex.ru',
          age: '32'
        }
      ];

      $scope.peopleTableData = [
        {
          id: 1,
          firstName: 'Mark',
          lastName: 'Otto',
          username: '@mdo',
          email: 'mdo@gmail.com',
          age: '28'
        },
        {
          id: 2,
          firstName: 'Jacob',
          lastName: 'Thornton',
          username: '@fat',
          email: 'fat@yandex.ru',
          age: '45'
        },
        {
          id: 3,
          firstName: 'Larry',
          lastName: 'Bird',
          username: '@twitter',
          email: 'twitter@outlook.com',
          age: '18'
        },
        {
          id: 4,
          firstName: 'John',
          lastName: 'Snow',
          username: '@snow',
          email: 'snow@gmail.com',
          age: '20'
        },
        {
          id: 5,
          firstName: 'Jack',
          lastName: 'Sparrow',
          username: '@jack',
          email: 'jack@yandex.ru',
          age: '30'
        }
      ];

      $scope.metricsTableData = [
        {
          image: 'img/chrome.svg',
          browser: 'Google Chrome',
          visits: '10,392',
          isVisitsUp: true,
          purchases: '4,214',
          isPurchasesUp: true,
          percent: '45%',
          isPercentUp: true
        },
        {
          image: 'img/firefox.svg',
          browser: 'Mozilla Firefox',
          visits: '7,873',
          isVisitsUp: true,
          purchases: '3,031',
          isPurchasesUp: false,
          percent: '28%',
          isPercentUp: true
        },
        {
          image: 'img/ie.svg',
          browser: 'Internet Explorer',
          visits: '5,890',
          isVisitsUp: false,
          purchases: '2,102',
          isPurchasesUp: false,
          percent: '17%',
          isPercentUp: false
        },
        {
          image: 'img/safari.svg',
          browser: 'Safari',
          visits: '4,001',
          isVisitsUp: false,
          purchases: '1,001',
          isPurchasesUp: false,
          percent: '14%',
          isPercentUp: true
        },
        {
          image: 'img/opera.svg',
          browser: 'Opera',
          visits: '1,833',
          isVisitsUp: true,
          purchases: '83',
          isPurchasesUp: true,
          percent: '5%',
          isPercentUp: false
        }
      ];
    }]);