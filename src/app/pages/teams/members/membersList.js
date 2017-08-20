/**
 * @author a.demeshko
 * created on 12/29/15
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.teams.members')
    .service('membersList', membersList);

  /** @ngInject */
  function membersList($sce, $stateParams) {
    var members = [
      {
        "id": "4563faass",
        "name": "Nasta Linnie",
        "pic": "img/Nasta.png",
        "email": "petraramsey@mail.com",
        "position": "Great Employee",
        "labels": ['content']
      },
      {
        "id": "4563fdfvd",
        "name": "Nasta Linnie",
        "pic": "img/Nasta.png",
        "email": "petraramsey@mail.com",
        "position": "Great Employee",
        "labels": ['content']
      },
      {
        "id": "4563zxcss",
        "name": "Nasta Linnie",
        "pic": "img/Nasta.png",
        "email": "petraramsey@mail.com",
        "position": "Great Employee",
        "labels": ['product', 'content']
      },
      {
        "id": "8955sddf",
        "name": "Nick Cat",
        "pic": "img/Nick.png",
        "email": "barlowshort@mail.com",
        "position": "Graphical designer",
        "labels": ['shops']
      },
      {
        "id": "8955sdfcc",
        "name": "Nick Cat",
        "pic": "img/Nick.png",
        "email": "barlowshort@mail.com",
        "position": "Graphical designer",
        "labels": ['innovation']
      },
      {
        "id": "8955asewf",
        "name": "Nick Cat",
        "pic": "img/Nick.png",
        "email": "barlowshort@mail.com",
        "position": "Graphical designer",
        "labels": ['shops', 'media']
      },
      {
        "id": "2334uudsa",
        "name": "Kostya Danovsky",
        "pic": "img/Kostya.png",
        "email": "schwart@mail.com",
        "position": "Technical Chef",
        "labels": ['hr', 'innovation']
      },
      {
        "id": "2334aefvv",
        "name": "Kostya Danovsky",
        "pic": "img/Kostya.png",
        "email": "schwart@mail.com",
        "position": "Technical Chef",
        "labels": ['tech', 'product']
      },
      {
        "id": "2334cvdss",
        "name": "Kostya Danovsky",
        "pic": "img/Kostya.png",
        "email": "schwart@mail.com",
        "position": "Technical Chef",
        "labels": ['product']
      },
      {
        "id": "8223xzxfn",
        "name": "Andrey Hrabouski",
        "pic": "img/Andrey.png",
        "email": "lakeishaphillips@mail.com",
        "position": "Mobile Developer",
        "labels": ['tech']
      },
      {
        "id": "8223sdffn",
        "name": "Andrey Hrabouski",
        "pic": "img/Andrey.png",
        "email": "lakeishaphillips@mail.com",
        "position": "Mobile Developer",
        "labels": ['tech']
      },
      {
        "id": "9391xdsff",
        "name": "Vlad Lugovsky",
        "pic": "img/Vlad.png",
        "email": "carlsongoodman@mail.com",
        "position": "Fullstack man",
        "labels": ['tech']
      },
      {
        "id": "8223xsdaa",
        "name": "Andrey Hrabouski",
        "pic": "img/Andrey.png",
        "email": "lakeishaphillips@mail.com",
        "position": "Mobile Developer",
        "labels": ['hr']
      },
      {
        "id": "9391xdsfd",
        "name": "Vlad Lugovsky",
        "pic": "img/Vlad.png",
        "email": "carlsongoodman@mail.com",
        "position": "Fullstack man",
        "labels": ['hr']
      }
    ];
    var tabs = [{
      label: 'hr',
      name: 'HR'
    }, {
      label: 'tech',
      name: 'Tech'
    }, {
      label: 'product',
      name: 'Product'
    }, {
      label: 'finance',
      name: 'Finance'
    }, {
      label: 'media',
      name: 'Media'
    }, {
      label: 'shops',
      name: 'Shops'
    }, {
      label: 'innovation',
      name: 'Innovation'
    }];

    return{
      getTabs : function(){
        return tabs
      },
      getMembersByLabel : function(label){
        return members.filter(function(m){
          return m.labels.indexOf(label) != -1;
        });
      },
      getAllMessages : function(){
        return members;
      },
      getMemberById : function(id){
        console.log('getMemberById');
        return members.filter(function(m){
          return m.id == id;
        })[0];
      },
      getIndexById : function(id){
        console.log('getIndexById');
        members.filter(function(m){
          if (m.id == id){
            console.log(m);
            console.log(members.indexOf(m));
            return members.indexOf(m);
          }
        })[0];
      }
    }

  }

})();