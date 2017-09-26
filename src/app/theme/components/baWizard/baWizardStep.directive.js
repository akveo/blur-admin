(function() {
  'use strict';

  angular.module('BlurAdmin.theme.components')
    .directive('baWizardStep', baWizardStep);

  /** @ngInject */
  function baWizardStep($http, AnswerService, $filter) {
    return {
      restrict: 'E',
      transclude: true,
      require: '^baWizard',
      scope: {
        form: '='
      },
      templateUrl:  'app/theme/components/baWizard/baWizardStep.html',
      link: function($scope, $element, $attrs, wizard) {
        $scope.selected = true;

        var tab = {
          title: $attrs.title,
          select: select,
          submit: submit,
          isComplete: isComplete,
          isAvailiable: isAvailiable,
          prevTab: undefined,
          setPrev: setPrev,
          mid: $attrs.mid
        };

        wizard.addTab(tab);

        function select(isSelected) {
          if (isSelected) {
            $scope.selected = true;
          } else {
            $scope.selected = false;
          }
        }

        function submit() {
          
          var elements = angular.fromJson($attrs.elements);
          var memberEvaluated = angular.fromJson($attrs.evaluated);
          var memberAsked = angular.fromJson($attrs.asked);

          $scope.form && $scope.form.$setSubmitted(true);
              if($scope.form && $scope.form.$invalid == false) {
                
                console.log("$attrs.elements", elements);
                console.log("inner", $scope.form.innerForm);

                angular.forEach($scope.form.innerForm, function(val, key) {

                    if((key.indexOf("_") !== -1) && (key.indexOf("_comment") == -1) && (key.indexOf("_submitted") == -1) && (key.indexOf("_question") == -1)) {
                      var res = key.split("_");
                      console.log("res", res);
                      //console.log("val", val);
                      var commentKey = key + "_comment";
                      var submittedKey = key + "_submitted";
                      //console.log("key", key);
                      //console.log("commentKey", commentKey);
                      //console.log("submittedKey", submittedKey);
                      var element = $filter('filter')(elements, {'_id':res[3]}) 
                      var answer = {
                        "value" : val.$viewValue,
                        "comment" : ($scope.form.innerForm[commentKey]) ? $scope.form.innerForm[commentKey].$viewValue : '',
                        "survey" : res[0],
                        "evaluated" : memberEvaluated,
                        "asked" : memberAsked,
                        "question": element[0]
                      }
                      console.log("$attrs",$attrs);
                      console.log("submit:answer",answer);
                      if ($scope.form.innerForm[submittedKey].$viewValue) {
                          answer.id = $scope.form.innerForm[submittedKey].$viewValue;
                          AnswerService
                            .update(answer)
                            .then(
                                function (data){
                                  console.log("answer.update",data);
                                  $scope.form.innerForm[submittedKey].$viewValue = data.data.id;
                                },
                                function (error){
                                  console.log("Error updating the answer");
                                }
                              );
                      } else {
                          //checking if the answer already exist
                          var params = {"survey":answer.survey, "asked":answer.asked.id, "evaluated":answer.evaluated.id, "question":answer.question._id}
                          AnswerService
                            .list(params)
                            .then(
                                function (data){
                                  console.log("answer.check",data);
                                  if(data.length > 0) {
                                    answer.id = data[0].id;
                                    AnswerService
                                      .update(answer)
                                      .then(
                                          function (data){
                                            console.log("answer.update",data);
                                            $scope.form.innerForm[submittedKey].$viewValue = data.data.id;
                                          },
                                          function (error){
                                            console.log("Error updating the answer");
                                          }
                                        );
                                  } else
                                    AnswerService
                                      .create(answer)
                                      .then(
                                          function (data){
                                            console.log("answer.create",data);
                                            $scope.form.innerForm[submittedKey].$viewValue = data.data.id;
                                          },
                                          function (error){
                                            console.log("Error creating the answer");
                                          }
                                        );
                                  
                                },
                                function (error){
                                  console.log("Error getting the answer");
                                }
                              );
                          
                      }
                      
                    }
                })
                
              }  
        }

        function isComplete() {
          return $scope.form ? $scope.form.$valid : true;
        }

        function isAvailiable() {
          return tab.prevTab ? tab.prevTab.isComplete() : true;
        }

        function setPrev(pTab) {
          tab.prevTab = pTab;
        }
      }
    };
  }
})();