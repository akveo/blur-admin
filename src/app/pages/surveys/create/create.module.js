/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.surveys.create',['BlurAdmin.pages.surveys', 'ui.select', 'ngSanitize', 'textAngular', 'ngTagsInput'])
      .config(function($provide){
        $provide.decorator('taOptions', ['taRegisterTool', '$delegate', 'appConfig', function(taRegisterTool, taOptions, appConfig){
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

                function getAppConfig(appConfig) {
                    return appConfig
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
                //var appConfig = getAppConfig()
                return this.$editor().wrapSelection('insertHTML', appConfig.emailContentModels.s_360, true);
            }
          });

          taRegisterTool('regularModel', {
            iconclass: "fa fa-file",
            tooltiptext: "Insert a regular survey text model",
            action: function(){
              //var appConfig = getAppConfig()
                return this.$editor().wrapSelection('insertHTML', appConfig.emailContentModels.s_regular, true);
            }
          });

          taRegisterTool('incognitoModel', {
            iconclass: "fa fa-eye-slash",
            tooltiptext: "Insert an incognito survey text model",
            action: function(){
              //var appConfig = getAppConfig()
                return this.$editor().wrapSelection('insertHTML', appConfig.emailContentModels.s_incognito, true);
            }
          });
          // add the button to the default toolbar definition
          taOptions.toolbar[1].push('colourRed');
          return taOptions;
        }]);
      }); 

  

})();
