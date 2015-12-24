/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.mail')
      .controller('MailCtrl', MailCtrl);

  /** @ngInject */
  function MailCtrl($scope, $location, $sce) {

    $scope.showMail = false;

    $scope.messages = [
      {
        "id": "4563faass",
        "name": "Nasta Linnie",
        "subject": "Great text",
        "date": "2015-08-28T07:57:09",
        "important": true,
        "body": $sce.trustAsHtml("<p>Hey John, </p><p>Check out this cool text.</p>"),
        "pic": "img/Nasta.png",
        "email": "petraramsey@mail.com",
        "attachment": "poem.txt",
        "draft": false,
        "trash": false,
        "position": "Great Employee",
        "tag": "friend"
      },
      {
        "id": "4563fdfvd",
        "name": "Nasta Linnie",
        "subject": "Lores ipsum",
        "date": "2015-11-19T03:30:45",
        "important": false,
        "body": $sce.trustAsHtml("<p>Hey John, </p><br><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ex mauris, ultrices vel lectus quis, scelerisque hendrerit ipsum. Suspendisse ullamcorper turpis neque, eget dapibus magna placerat ac. Suspendisse rhoncus ligula ac mi tempus varius ut sed lacus. Sed et commodo nulla, et placerat leo. Nam rhoncus vulputate sem non pharetra. Praesent fringilla massa in laoreet convallis. Aliquam lobortis dui a congue facilisis. Aenean dapibus semper semper. Quisque aliquam, nibh dapibus interdum condimentum, ex velit tempor tortor, at vestibulum magna leo quis leo. Morbi pulvinar varius erat ac rutrum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst.</p>" +
            "<br><p>Cras rhoncus quam ipsum, vel dignissim nisl egestas sed. Aliquam erat volutpat. Integer eu nisl elit. Donec malesuada diam vitae tellus luctus tincidunt. Donec tempus blandit neque, rutrum egestas ipsum sagittis tempor. Curabitur volutpat ligula enim, nec vehicula purus molestie at. Sed a facilisis enim, nec molestie magna. Donec in augue non est viverra dapibus vel tempus risus. Nam porttitor purus sit amet hendrerit ullamcorper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>"),
        "pic": "img/Nasta.png",
        "email": "petraramsey@mail.com",
        "position": "Great Employee",
        "tag": "study",
        "draft": false,
        "trash": false
      },
      {
        "id": "4563zxcss",
        "name": "Nasta Linnie",
        "subject": "Lores ipsum",
        "date": "2015-10-19T03:30:45",
        "important": false,
        "body": $sce.trustAsHtml("<p>Hey John, </p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>"),
        "pic": "img/Nasta.png",
        "email": "petraramsey@mail.com",
        "position": "Great Employee",
        "tag": "work",
        "draft": false,
        "trash": true
      },
      {
        "id": "8955sddf",
        "name": "Nick Cat",
        "subject": "New Design",
        "date": "2015-05-05T12:59:45",
        "important": true,
        "body": $sce.trustAsHtml("<p>Hey John, Consectetur adipiscing elit</p><br>" +
            "<p>Cras rhoncus quam ipsum, vel dignissim nisl egestas sed. Aliquam erat volutpat. Integer eu nisl elit. Donec malesuada diam vitae tellus luctus tincidunt. Donec tempus blandit neque, rutrum egestas ipsum sagittis tempor. Curabitur volutpat ligula enim, nec vehicula purus molestie at. Sed a facilisis enim, nec molestie magna. Donec in augue non est viverra dapibus vel tempus risus. Nam porttitor purus sit amet hendrerit ullamcorper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>"),
        "pic": "img/Nick.png",
        "email": "barlowshort@mail.com",
        "position": "Graphical designer",
        "attachment": "design.psd",
        "draft": false,
        "trash": false,
        "tag": "work"
      },
      {
        "id": "8955sdfcc",
        "name": "Nick Cat",
        "subject": "Gift card",
        "date": "2015-07-18T10:19:01",
        "important": false,
        "body": $sce.trustAsHtml("<p>Hey John, </p><br><p>Consectetur adipiscing elit, Lorem ipsum dolor sit amet</p>"),
        "pic": "img/Nick.png",
        "email": "barlowshort@mail.com",
        "position": "Graphical designer",
        "draft": false,
        "trash": false,
        "tag": "study"
      },
      {
        "id": "8955asewf",
        "name": "Nick Cat",
        "subject": "Some news",
        "date": "2015-09-23T03:04:10",
        "important": true,
        "body": $sce.trustAsHtml("<p>Hey John, </p><br><p>Integer eu nisl elit. Donec malesuada diam vitae tellus luctus tincidunt. Donec tempus blandit neque, rutrum egestas ipsum sagittis tempor. Curabitur volutpat ligula enim, nec vehicula purus molestie at. Sed a facilisis enim, nec molestie magna. Donec in augue non est viverra dapibus vel tempus risus. Nam porttitor purus sit amet hendrerit ullamcorper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>"),
        "pic": "img/Nick.png",
        "email": "barlowshort@mail.com",
        "position": "Graphical designer",
        "draft": false,
        "trash": false,
        "tag": "work"
      },
      {
        "id": "8955asdff",
        "name": "Nick Cat",
        "subject": "Some news ",
        "date": "2015-09-23T03:04:10",
        "important": false,
        "body": $sce.trustAsHtml("<p>Hey John, </p><br><p>Integer eu nisl elit. Donec malesuada diam vitae tellus luctus tincidunt. Donec tempus blandit neque, rutrum egestas ipsum sagittis tempor. Curabitur volutpat ligula enim, nec vehicula purus molestie at. Sed a facilisis enim, nec molestie magna. Donec in augue non est viverra dapibus vel tempus risus. Nam porttitor purus sit amet hendrerit ullamcorper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>"),
        "pic": "img/Nick.png",
        "email": "barlowshort@mail.com",
        "position": "Graphical designer",
        "draft": true,
        "trash": false,
        "tag": "work"
      },
      {
        "id": "2334uudsa",
        "name": "Kostya Danovsky",
        "subject": "Street Art",
        "date": "2015-11-22T10:05:09",
        "important": false,
        "body": $sce.trustAsHtml("<p>Hey John, </p><p>Aliquam eu facilisis eros, quis varius est.</p>" +
            "<p>Consectetur adipiscing elit. Aliquam sodales sem in nibh pellentesque, ac dignissim mi dapibus.</p>" +
            "<p>Lorem ipsum dolor sit amet! Nullam imperdiet justo a ipsum laoreet euismod.</p>" +
            "<br><p>Cras tincidunt fermentum lectus, quis scelerisque lorem volutpat sed." +
            "Sed quis orci sed nisl sagittis viverra id at mauris. Nam venenatis mi nibh. Sed fringilla mattis vehic</p>"),
        "pic": "img/Kostya.png",
        "email": "schwartzalford@mail.com",
        "position": "Technical Chef",
        "draft": false,
        "attachment": "file.doc",
        "trash": false,
        "tag" : "family"
      },
      {
        "id": "2334aefvv",
        "name": "Kostya Danovsky",
        "subject": "New product",
        "date": "2015-06-22T06:26:10",
        "important": true,
        "body": $sce.trustAsHtml("<p>Hello John, </p><p>Lorem ipsum dolor sit amet!</p>" +
            "<p>Consectetur adipiscing elit. Aliquam sodales sem in nibh pellentesque, ac dignissim mi dapibus.</p>" +
            "<p>Aliquam eu facilisis eros, quis varius est. Nullam imperdiet justo a ipsum laoreet euismod.</p>" +
            "<br><p>Nulla facilisi. Nulla congue, arcu eget blandit lacinia, leo ante ullamcorper lectus, vel pulvinar justo ipsum vitae justo." +
            "Cras tincidunt fermentum lectus, quis scelerisque lorem volutpat sed. Sed quis orci sed nisl sagittis viverra id at mauris. Nam venenatis mi nibh. Sed fringilla mattis vehic</p>"),
        "pic": "img/Kostya.png",
        "email": "schwartzalford@mail.com",
        "position": "Technical Chef",
        "draft": false,
        "trash": false,
        "tag" : "family"
      },
      {
        "id": "8223xzxfn",
        "name": "Andrey Hrabouski",
        "subject": "Skype moji",
        "date": "2015-07-16T06:47:53",
        "important": false,
        "body": $sce.trustAsHtml("<p>Hello John, </p><p>Aliquam sodales sem in nibh pellentesque</p>" +
            "<p>Lorem ipsum dolor I find moji in skype sit amet!.</p>"),
        "pic": "img/Andrey.png",
        "email": "lakeishaphillips@mail.com",
        "position": "Mobile Developer",
        "tag" : 'family',
        "draft": false,
        "trash": true
      },
      {
        "id": "8223sdffn",
        "name": "Andrey Hrabouski",
        "subject": "My App",
        "date": "2015-06-20T07:05:02",
        "important": false,
        "body": $sce.trustAsHtml("<p>Hey Vlad. </p><p>Lorem ipsum dolor sit amet!</p>" +
            "<p>Consectetur My Falasson App elit. Aliquam sodales sem in nibh pellentesque, ac dignissim mi dapibus.</p>"),
        "pic": "img/Andrey.png",
        "email": "lakeishaphillips@mail.com",
        "position": "Mobile Developer",
        "draft": false,
        "trash": false,
        "tag" : 'family',
        "spam": true
      },
      {
        "id": "9391xdsff",
        "name": "Vlad Lugovsky",
        "subject": "Cool",
        "date": "2015-03-31T11:52:58",
        "important": false,
        "body": $sce.trustAsHtml("<p>Hey Vlad. </p><p>Aliquam sodales sem in nibh pellentesque</p>" +
            "<p>Cras tincidunt fermentum lectus, quis scelerisque lorem volutpat sed.</p>"),
        "pic": "img/Vlad.png",
        "email": "carlsongoodman@mail.com",
        "my": true,
        "position": "Fullstack man",
        "tag": "study",
        "draft": false,
        "trash": false,
        "spam": false
      },
      {
        "id": "9391xdsff",
        "name": "Vlad Lugovsky",
        "subject": "What next",
        "date": "2015-03-31T11:52:58",
        "important": false,
        "body": $sce.trustAsHtml("<p>Hey Vlad. </p><p>Lorem ipsum dolor sit amet!</p>" +
            "<p>Esse esse labore tempor ullamco ullamco. Id veniam laborum c.</p>"),
        "pic": "img/Vlad.png",
        "email": "carlsongoodman@mail.com",
        "my": true,
        "position": "Fullstack man",
        "tag": "study",
        "draft": true,
        "trash": false,
        "spam": false
      }
    ].sort(function (a, b) {
          if (a.date > b.date) return 1;
          if (a.date < b.date) return -1;
        }).reverse();

    $scope.tabs = [
      {
        label: 'inbox',
        name: 'Inbox',
        "newMails" : 7,
        filter: function (messages) {
          return messages.filter(function (m) {
            return !m.trash && !m.draft && !m.spam && !m.my
          });
        }
      },
      {
        label: 'sentMail',
        name: 'Sent Mail',
        filter: function (messages) {
          return messages.filter(function (m) {
            return m.my && !m.trash && !m.draft
          });
        }
      },
      {
        label: 'important',
        name: 'Important',
        filter: function (messages) {
          return messages.filter(function (m) {
            return m.important && !m.trash && !m.draft
          });
        }
      },
      {
        label: 'draft',
        name: 'Draft',
        "newMails" : 2,
        filter: function (messages) {
          return messages.filter(function (m) {
            return m.draft && !m.trash
          });
        }
      },
      {
        label: 'spam',
        name: 'Spam',
        filter: function (messages) {
          return messages.filter(function (m) {
            return m.spam && !m.trash
          });
        }
      },
      {
        label: 'trash',
        name: 'Trash',
        filter: function (messages) {
          return messages.filter(function (m) {
            return m.trash
          });
        }
      }];

    $scope.selectTab = function (tab) {
      $scope.tab = tab;
      $scope.currentMessages = $scope.tabs[tab].filter($scope.messages);
      $scope.mail = $scope.currentMessages[0];
      $scope.showMail = false;
      //var mailId = $scope.mail ? $scope.mail.id : '';
      //$location.path("/mail/"+$scope.tabs[tab].label+"/"+ mailId);
    };

    $scope.selectMail = function (mail) {
      $scope.mail = mail;
      $scope.showMail = true;
      //$location.path("/mail/"+$scope.tabs[$scope.tab].label+"/"+ mail.id);
    };

    $scope.isSelectedTab = function (tab) {
      return $scope.tab === tab;
    };

    function findTabByLabel(label) {
      var i = 0;
      while (label && i < $scope.tabs.length && $scope.tabs[i].label.toLowerCase() !== label.toLowerCase())i++;
      return i === $scope.tabs.length ? 0 : i;
    }

    function findMessageById(id) {
      var i = 0;
      while (id && i < $scope.currentMessages.length && $scope.currentMessages[i].id !== id)i++;
      return i === $scope.currentMessages.length ? 0 : i;
    }

    $scope.tab = findTabByLabel(0);
    $scope.currentMessages = $scope.tabs[$scope.tab].filter($scope.messages);
    $scope.mail = $scope.currentMessages[findMessageById(0)];
  }

})();
