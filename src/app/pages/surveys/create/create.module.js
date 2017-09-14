/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.surveys.create',['BlurAdmin.pages.surveys', 'ui.select', 'ngSanitize', 'textAngular', 'ngTagsInput'])
      .directive('tagInput', tagInput)
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
          // add the button to the default toolbar definition
          taOptions.toolbar[1].push('colourRed');
          return taOptions;
        }]);
      }); 

  function tagInput() {
    return {
      restrict: 'A',
      link: function( $scope, elem, attr) {
        console.log("tagInput", $scope);
        $(elem).tagsinput({
          tagClass:  'label label-' + attr.tagInput,
          val: 'test'
        });
      }
    };
  }

})();
