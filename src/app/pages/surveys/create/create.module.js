/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.surveys.create',['BlurAdmin.pages.surveys', 'ui.select', 'ngSanitize', 'textAngular', 'ngTagsInput'])
      .config(function($provide){
        $provide.decorator('taOptions', ['taRegisterTool', '$delegate', function(taRegisterTool, taOptions){
          // $delegate is the taOptions we are decorating
          // register the tool with textAngular
          function insertTextAtCursor(text) {
                    var sel, range;
                    if (window.getSelection) {
                        sel = window.getSelection();
                        if (sel.getRangeAt && sel.rangeCount) {
                            range = sel.getRangeAt(0);
                            range.deleteContents();
                            range.insertNode(document.createTextNode(text));
                        }
                    } else if (document.selection && document.selection.createRange) {
                        document.selection.createRange().text = text;
                    }
                }

                function moveCaret(charCount) {
                    var sel, range;
                    if (window.getSelection) {
                        sel = window.getSelection();
                        if (sel.rangeCount > 0) {
                            var textNode = sel.focusNode;
                            sel.collapse(textNode.nextSibling, charCount);
                        }
                    } else if ((sel = window.document.selection)) {
                        if (sel.type != "Control") {
                            range = sel.createRange();
                            range.move("character", charCount);
                            range.select();
                        }
                    }
                }

          taRegisterTool('userName', {
            iconclass: "fa fa-user",
            tooltiptext: "Insert the member name",
            action: function(){
                insertTextAtCursor("{{MEMBER_NAME}}");
                return moveCaret(1);
            }
          });
          taRegisterTool('surveyLink', {
            iconclass: "fa fa-external-link",
            tooltiptext: "Insert the Survey link",
            action: function(){
                insertTextAtCursor("{{SURVEY_LINK}}");
                return moveCaret(1);
            }
          });

          taRegisterTool('360Model', {
            iconclass: "fa fa-circle-o-notch",
            tooltiptext: "Insert a 360 survey text model",
            action: function(){
                var model = "<p>Dear {{MEMBER_NAME}},<br><br>You have been selected to participate in a 360 Feedback Survey.<br><br>The purpose of a 360 Feedback Survey is to provide feedback to our leaders that will enable them to develop and improve.<br><br>To gain access to the site, please click on the link below.<br><br>{{SURVEY_LINK}}<br><br>We appreciate your assistance in this process and request that you complete the 360 feedback by .<br><br>Please be sure to answer all questions as honestly and as accurately as you can - all information received is kept strictly confidential. Thank you for taking the time to participate in this survey.<br><br>If you have any questions regarding the survey process or experience any technical difficulties, please contact .<br><br>Thank you for your participation<br></p>";
                return this.$editor().wrapSelection('insertHTML', model, true);
            }
          });

          taRegisterTool('regularModel', {
            iconclass: "fa fa-file",
            tooltiptext: "Insert a regular survey text model",
            action: function(){
                insertTextAtCursor("REGULAR");
                return moveCaret(1);
            }
          });

          taRegisterTool('incognitoModel', {
            iconclass: "fa fa-eye-slash",
            tooltiptext: "Insert an incognito survey text model",
            action: function(){
                insertTextAtCursor("INCOGNITO");
                return moveCaret(1);
            }
          });
          // add the button to the default toolbar definition
          taOptions.toolbar[1].push('colourRed');
          return taOptions;
        }]);
      }); 

  

})();
