'use strict';

angular.module('BlurAdmin.iconsPage', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/icons', {
        templateUrl: '/app/pages/icons/icons.html',
        controller: 'iconsPageCtrl'
      });
    }])
    .controller('iconsPageCtrl', ['$scope', function ($scope) {
      $scope.widgetBlocks = [
        {
          widgets: [
            [
              {
                title: "Kameleon SVG Icons",
                url: "/app/pages/icons/widgets/kameleon.html"
              },
              {
                title: "Socicon",
                url: "/app/pages/icons/widgets/socicon.html"
              }
            ],
            [
              {
                title: "Icons With Rounded Background",
                url: "/app/pages/icons/widgets/kameleonRounded.html"
              },
              {
                title: "ionicons",
                url: "/app/pages/icons/widgets/ionicons.html"
              },
              {
                title: "Font Awesome Icons",
                url: "/app/pages/icons/widgets/fontAwesomeIcons.html"
              }
            ]
          ]
        }
      ];

      $scope.icons = {
        kameleonIcons: [
          {
            name: "Beach",
            img: "Beach.svg"
          },
          {
            name: "Bus",
            img: "Bus.svg"
          },
          {
            name: "Cheese",
            img: "Cheese.svg"
          },
          {
            name: "Desert",
            img: "Desert.svg"
          },
          {
            name: "Images",
            img: "Images.svg"
          },
          {
            name: "Magician",
            img: "Magician.svg"
          },
          {
            name: "Makeup",
            img: "Makeup.svg"
          },
          {
            name: "Programming",
            img: "Programming.svg"
          },
          {
            name: "Shop",
            img: "Shop.svg"
          },
          {
            name: "Surfer",
            img: "Surfer.svg"
          },
          {
            name: "Phone Booth",
            img: "Phone-Booth.svg"
          },
          {
            name: "Ninja",
            img: "Ninja.svg"
          },
          {
            name: "Apartment",
            img: "Apartment.svg"
          },
          {
            name: "Batman",
            img: "Batman.svg"
          },
          {
            name: "Medal",
            img: "Medal-2.svg"
          },
          {
            name: "Money",
            img: "Money-Increase.svg"
          },
          {
            name: "Street View",
            img: "Street-View.svg"
          },
          {
            name: "Student",
            img: "Student-3.svg"
          },
          {
            name: "Bell",
            img: "Bell.svg"
          },
          {
            name: "Woman",
            img: "Boss-5.svg"
          },
          {
            name: "Euro",
            img: "Euro-Coin.svg"
          },
          {
            name: "Chessboard",
            img: "Chessboard.svg"
          },
          {
            name: "Burglar",
            img: "Burglar.svg"
          },
          {
            name: "Dna",
            img: "Dna.svg"
          },
          {
            name: "Clipboard Plan",
            img: "Clipboard-Plan.svg"
          },
          {
            name: "Boss",
            img: "Boss-3.svg"
          },
          {
            name: "Key",
            img: "Key.svg"
          },
          {
            name: "Surgeon",
            img: "Surgeon.svg"
          },
          {
            name: "Hacker",
            img: "Hacker.svg"
          },
          {
            name: "Santa",
            img: "Santa.svg"
          }
        ],
        kameleonRoundedIcons: [
          {
            color: "success",
            img: "Apartment.svg",
            name: "Apartment"
          },
          {
            color: "warning",
            img: "Bus.svg",
            name: "Bus"
          },
          {
            color: "primary",
            img: "Checklist.svg",
            name: "Checklist"
          },
          {
            color: "warning",
            img: "Desert.svg",
            name: "Desert"
          },
          {
            color: "danger",
            img: "Laptop-Signal.svg",
            name: "Laptop Signal"
          },
          {
            color: "info",
            img: "Love-Letter.svg",
            name: "Love Letter"
          },
          {
            color: "success",
            img: "Makeup.svg",
            name: "Makeup"
          },
          {
            color: "primary",
            img: "Santa.svg",
            name: "Santa"
          },
          {
            color: "success",
            img: "Surfer.svg",
            name: "Surfer"
          },
          {
            color: "info",
            img: "Vector.svg",
            name: "Vector"
          },
          {
            color: "warning",
            img: "Money-Increase.svg",
            name: "Money Increase"
          },
          {
            color: "info",
            img: "Alien.svg",
            name: "Alien"
          },
          {
            color: "danger",
            img: "Online-Shopping.svg",
            name: "Online Shopping"
          },
          {
            color: "warning",
            img: "Euro-Coin.svg",
            name: "Euro"
          },
          {
            color: "info",
            img: "Boss-3.svg",
            name: "Boss"
          }
        ],
        ionicons: ["ion-ionic", "ion-arrow-right-b", "ion-arrow-down-b", "ion-arrow-left-b", "ion-arrow-up-c", "ion-arrow-right-c", "ion-arrow-down-c", "ion-arrow-left-c", "ion-arrow-return-right", "ion-arrow-return-left", "ion-arrow-swap", "ion-arrow-shrink", "ion-arrow-expand", "ion-arrow-move", "ion-arrow-resize", "ion-chevron-up", "ion-chevron-right", "ion-chevron-down", "ion-chevron-left", "ion-navicon-round", "ion-navicon", "ion-drag", "ion-log-in", "ion-log-out", "ion-checkmark-round", "ion-checkmark", "ion-checkmark-circled", "ion-close-round", "ion-plus-round", "ion-minus-round", "ion-information", "ion-help", "ion-backspace-outline", "ion-help-buoy", "ion-asterisk", "ion-alert", "ion-alert-circled", "ion-refresh", "ion-loop", "ion-shuffle", "ion-home", "ion-search", "ion-flag", "ion-star", "ion-heart", "ion-heart-broken", "ion-gear-a", "ion-gear-b", "ion-toggle-filled", "ion-toggle", "ion-settings", "ion-wrench", "ion-hammer", "ion-edit", "ion-trash-a", "ion-trash-b", "ion-document", "ion-document-text", "ion-clipboard", "ion-scissors", "ion-funnel", "ion-bookmark", "ion-email", "ion-email-unread", "ion-folder", "ion-filing", "ion-archive", "ion-reply", "ion-reply-all", "ion-forward"],
        fontAwesomeIcons: ["fa fa-adjust", "fa fa-anchor", "fa fa-archive", "fa fa-area-chart", "fa fa-arrows", "fa fa-arrows-h", "fa fa-arrows-v", "fa fa-asterisk", "fa fa-at", "fa fa-automobile", "fa fa-ban", "fa fa-bank", "fa fa-bar-chart", "fa fa-bar-chart-o", "fa fa-barcode", "fa fa-bars", "fa fa-bed", "fa fa-beer", "fa fa-bell", "fa fa-bell-o", "fa fa-bell-slash", "fa fa-bell-slash-o", "fa fa-bicycle", "fa fa-binoculars", "fa fa-birthday-cake", "fa fa-bolt", "fa fa-bomb", "fa fa-book", "fa fa-bookmark", "fa fa-bookmark-o", "fa fa-briefcase", "fa fa-bug", "fa fa-building", "fa fa-building-o", "fa fa-bullhorn"],
        socicon: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", ",", ";", ":", "+", "@", "=", "-", "^", "¨", "$", "*", "&", "(", "#", ".", "_", "]", ")", "£", "'", "\"", "}", "{"]
      }

    }]);