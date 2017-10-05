/**
 * Created by k.danovsky on 13.05.2016.
 */

(function () {
  'use strict';

  var emailContentModels = {
    s_360: "<p>Dear {{MEMBER_NAME}},<br><br>You have been selected to participate in a 360 Feedback Survey.<br><br>The purpose of a 360 Feedback Survey is to provide feedback to our leaders that will enable them to develop and improve.<br><br>To gain access to the site, please click on the link below.<br><br>{{SURVEY_LINK}}<br><br>We appreciate your assistance in this process and request that you complete the 360 feedback by .<br><br>Please be sure to answer all questions as honestly and as accurately as you can - all information received is kept strictly confidential. Thank you for taking the time to participate in this survey.<br><br>If you have any questions regarding the survey process or experience any technical difficulties, please contact .<br><br>Thank you for your participation<br></p>",
    s_regular: "<p>Hello </p> <p><b>{{MEMBER_NAME}}</b>,&nbsp;</p> <div><br></div> <div>Please take a few minutes to answer this survey, your answer is mandatory.&nbsp;</div> <div><br></div> <div>{{SURVEY_LINK}}</div> <div><br></div> <div>Thanks,<br></div>",
    s_incognito: "<p>Hello,&nbsp;</p> <div><br></div> <div>Please take a few minutes to answer this survey, your answer is mandatory.&nbsp;</div> <div><br></div> <div>{{SURVEY_LINK}}</div> <div><br></div> <div>Thanks,<br></div>"
  };

  // main functional color scheme
  var tags = [
          "Share of expertise with the company" ,
          "Acceptable work demands" ,
          "Good relations with management" ,
          "Team work" ,
          "Happiness",
          "Innovation",
          "Leadership",
          "Supportiveness",
          "Determination",
          "Trust",
          "Spirituality / my life",
          "Environnement respect"
        ]; 

  var series = ['How the others see you', 'How you evaluated yourself'];

  var survey = {
    defaultTitle: "Survey Title",
    defaultDescription: "Survey Description",
    defaultType: "s_360",
  };

  // dashboard colors for charts
  var apiBaseUrl = "http://localhost:9000"

  var tabs = [{
      label: 'management',
      name: 'Top management'
    },{
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

  angular.module('BlurAdmin.pages')
    .provider('appConfig', appConfigProvider);

  /** @ngInject */
  function appConfigProvider(colorHelper) {
    var conf = {
      emailContentModels : emailContentModels,
      apiBaseUrl : apiBaseUrl,
      tags : tags,
      survey : survey,
      series : series,
      tabs:tabs
    };

    conf.$get = function () {
      delete conf.$get;
      return conf;
    };
    return conf;
  }
})();
