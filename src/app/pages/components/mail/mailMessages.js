/**
 * @author a.demeshko
 * created on 12/29/15
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.components.mail')
    .service('mailMessages', mailMessages);

  /** @ngInject */
  function mailMessages($sce) {
    var messages = [
      {
        "id": "4563faass",
        "name": "Nasta Linnie",
        "subject": "Great text",
        "date": "2015-08-28T07:57:09",
        "body": $sce.trustAsHtml("<p>Hey John, </p><p>Check out this cool text.</p>"),
        "pic": "img/Nasta.png",
        "email": "petraramsey@mail.com",
        "attachment": "poem.txt",
        "position": "Great Employee",
        "tag": "friend",
        "labels": ['inbox']
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
        "labels": ['inbox']
      },
      {
        "id": "4563zxcss",
        "name": "Nasta Linnie",
        "subject": "Lores ipsum",
        "date": "2015-10-19T03:30:45",
        "important": false,
        "body": $sce.trustAsHtml("<p>Hey Nasta, </p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>"),
        "pic": "img/Nasta.png",
        "email": "petraramsey@mail.com",
        "position": "Great Employee",
        "tag": "work",
        "labels": ['sent', 'important']
      },
      {
        "id": "8955sddf",
        "name": "Nick Cat",
        "subject": "New Design",
        "date": "2015-05-05T12:59:45",
        "body": $sce.trustAsHtml("<p>Hey John, Consectetur adipiscing elit</p><br>" +
          "<p>Cras rhoncus quam ipsum, vel dignissim nisl egestas sed. Aliquam erat volutpat. Integer eu nisl elit. Donec malesuada diam vitae tellus luctus tincidunt. Donec tempus blandit neque, rutrum egestas ipsum sagittis tempor. Curabitur volutpat ligula enim, nec vehicula purus molestie at. Sed a facilisis enim, nec molestie magna. Donec in augue non est viverra dapibus vel tempus risus. Nam porttitor purus sit amet hendrerit ullamcorper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>"),
        "pic": "img/Nick.png",
        "email": "barlowshort@mail.com",
        "position": "Graphical designer",
        "attachment": "design.psd",
        "tag": "work",
        "labels": ['inbox']
      },
      {
        "id": "8955sdfcc",
        "name": "Nick Cat",
        "subject": "Gift card",
        "date": "2015-07-18T10:19:01",
        "body": $sce.trustAsHtml("<p>Hey John, </p><br><p>Consectetur adipiscing elit, Lorem ipsum dolor sit amet</p>"),
        "pic": "img/Nick.png",
        "email": "barlowshort@mail.com",
        "position": "Graphical designer",
        "tag": "study",
        "labels": ['inbox']
      },
      {
        "id": "8955asewf",
        "name": "Nick Cat",
        "subject": "Some news",
        "date": "2015-09-23T03:04:10",
        "body": $sce.trustAsHtml("<p>Hey John, </p><br><p>Integer eu nisl elit. Donec malesuada diam vitae tellus luctus tincidunt. Donec tempus blandit neque, rutrum egestas ipsum sagittis tempor. Curabitur volutpat ligula enim, nec vehicula purus molestie at. Sed a facilisis enim, nec molestie magna. Donec in augue non est viverra dapibus vel tempus risus. Nam porttitor purus sit amet hendrerit ullamcorper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>"),
        "pic": "img/Nick.png",
        "email": "barlowshort@mail.com",
        "position": "Graphical designer",
        "tag": "work",
        "labels": ['inbox', 'important']
      },
      {
        "id": "2334uudsa",
        "name": "Kostya Danovsky",
        "subject": "Street Art",
        "date": "2015-11-22T10:05:09",
        "body": $sce.trustAsHtml("<p>Hey John, </p><p>Aliquam eu facilisis eros, quis varius est.</p>" +
          "<p>Consectetur adipiscing elit. Aliquam sodales sem in nibh pellentesque, ac dignissim mi dapibus.</p>" +
          "<p>Lorem ipsum dolor sit amet! Nullam imperdiet justo a ipsum laoreet euismod.</p>" +
          "<br><p>Cras tincidunt fermentum lectus, quis scelerisque lorem volutpat sed." +
          "Sed quis orci sed nisl sagittis viverra id at mauris. Nam venenatis mi nibh. Sed fringilla mattis vehic</p>"),
        "pic": "img/Kostya.png",
        "email": "schwart@mail.com",
        "position": "Technical Chef",
        "attachment": "file.doc",
        "tag": "family",
        "labels": ['inbox', 'important']
      },
      {
        "id": "2334aefvv",
        "name": "Kostya Danovsky",
        "subject": "New product",
        "date": "2015-06-22T06:26:10",
        "body": $sce.trustAsHtml("<p>Hello John, </p><p>Lorem ipsum dolor sit amet!</p>" +
          "<p>Consectetur adipiscing elit. Aliquam sodales sem in nibh pellentesque, ac dignissim mi dapibus.</p>" +
          "<p>Aliquam eu facilisis eros, quis varius est. Nullam imperdiet justo a ipsum laoreet euismod.</p>" +
          "<br><p>Nulla facilisi. Nulla congue, arcu eget blandit lacinia, leo ante ullamcorper lectus, vel pulvinar justo ipsum vitae justo." +
          "Cras tincidunt fermentum lectus, quis scelerisque lorem volutpat sed. Sed quis orci sed nisl sagittis viverra id at mauris. Nam venenatis mi nibh. Sed fringilla mattis vehic</p>"),
        "pic": "img/Kostya.png",
        "email": "schwart@mail.com",
        "position": "Technical Chef",
        "tag": "family",
        "labels": ['inbox', 'important']
      },
      {
        "id": "2334cvdss",
        "name": "Kostya Danovsky",
        "subject": "Old product",
        "date": "2015-06-22T06:26:10",
        "body": $sce.trustAsHtml("<p>Hello John, </p>" +
          "<p>Consectetur adipiscing elit. Aliquam sodales sem in nibh pellentesque, ac dignissim mi dapibus.</p>" +
          "<br>"+
          "<p>Cras tincidunt fermentum lectus, quis scelerisque lorem volutpat sed. Sed quis orci sed nisl sagittis viverra id at mauris. Nam venenatis mi nibh. Sed fringilla mattis vehic</p>"),
        "pic": "img/Kostya.png",
        "email": "schwart@mail.com",
        "position": "Technical Chef",
        "tag": "study",
        "labels": ['trash']
      },
      {
        "id": "8223xzxfn",
        "name": "Andrey Hrabouski",
        "subject": "Skype moji",
        "date": "2015-07-16T06:47:53",
        "body": $sce.trustAsHtml("<p>Hello John, </p><p>Aliquam sodales sem in nibh pellentesque</p>" +
          "<p>Lorem ipsum dolor I find moji in skype sit amet!.</p>"),
        "pic": "img/Andrey.png",
        "email": "lakeishaphillips@mail.com",
        "position": "Mobile Developer",
        "tag": 'family',
        "labels": ['trash']
      },
      {
        "id": "8223sdffn",
        "name": "Andrey Hrabouski",
        "subject": "My App",
        "date": "2015-06-20T07:05:02",
        "body": $sce.trustAsHtml("<p>Hey Vlad. </p><p>Lorem ipsum dolor sit amet!</p>" +
          "<p>Consectetur My Falasson App elit. Aliquam sodales sem in nibh pellentesque, ac dignissim mi dapibus.</p>"),
        "pic": "img/Andrey.png",
        "email": "lakeishaphillips@mail.com",
        "position": "Mobile Developer",
        "tag": 'family',
        "labels": ['spam']
      },
      {
        "id": "9391xdsff",
        "name": "Vlad Lugovsky",
        "subject": "Cool",
        "date": "2015-03-31T11:52:58",
        "body": $sce.trustAsHtml("<p>Hey Vlad. </p><p>Aliquam sodales sem in nibh pellentesque</p>" +
          "<p>Cras tincidunt fermentum lectus, quis scelerisque lorem volutpat sed.</p>"),
        "pic": "img/Vlad.png",
        "email": "carlsongoodman@mail.com",
        "position": "Fullstack man",
        "tag": "study",
        "labels": ['draft']
      },
      {
        "id": "8223xsdaa",
        "name": "Andrey Hrabouski",
        "subject": "Car rent",
        "date": "2015-02-25T10:58:58",
        "body": $sce.trustAsHtml("<p>Hey Andrey. </p>" +
          "<p>Cras tincidunt fermentum lectus, quis scelerisque lorem volutpat sed. Sed quis orci sed nisl sagittis viverra id at mauris. Nam venenatis mi nibh. Sed fringilla mattis vehic</p>"),
        "pic": "img/Andrey.png",
        "email": "lakeishaphillips@mail.com",
        "position": "Mobile Developer",
        "tag": "family",
        "labels": ['draft']
      },
      {
        "id": "9391xdsff",
        "name": "Vlad Lugovsky",
        "subject": "What next",
        "date": "2015-03-31T11:52:58",
        "body": $sce.trustAsHtml("<p>Hey Vlad. </p><p>Lorem ipsum dolor sit amet!</p>" +
          "<p>Esse esse labore tempor ullamco ullamco. Id veniam laborum c.</p>"),
        "pic": "img/Vlad.png",
        "email": "carlsongoodman@mail.com",
        "position": "Fullstack man",
        "tag": "study",
        "labels": ['sent']
      }
    ].sort(function (a, b) {
        if (a.date > b.date) return 1;
        if (a.date < b.date) return -1;
      }).reverse();
    var tabs = [{
      label: 'inbox',
      name: 'Inbox',
      newMails: 7
    }, {
      label: 'sent',
      name: 'Sent Mail'
    }, {
      label: 'important',
      name: 'Important'
    }, {
      label: 'draft',
      name: 'Draft',
      newMails: 2
    }, {
      label: 'spam',
      name: 'Spam'
    }, {
      label: 'trash',
      name: 'Trash'
    }];

    return{
      getTabs : function(){
        return tabs
      },
      getMessagesByLabel : function(label){
        return messages.filter(function(m){
          return m.labels.indexOf(label) != -1;
        });
      },
      getMessageById : function(id){
        return messages.filter(function(m){
          return m.id == id;
        })[0];
      }
    }

  }

})();