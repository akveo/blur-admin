(function() {
  'use strict';

  angular.module('BlurAdmin.theme.components')
    .directive('baWizardStep', baWizardStep);

  /** @ngInject */
  function baWizardStep($http) {
    return {
      restrict: 'E',
      transclude: true,
      require: '^baWizard',
      scope: {
        form: '='
      },
      templateUrl:  'app/theme/components/baWizard/baWizardStep.html',
      link: function($scope, $element, $attrs, wizard, AnswerService) {
        $scope.selected = true;

        var tab = {
          title: $attrs.title,
          select: select,
          submit: submit,
          isComplete: isComplete,
          isAvailiable: isAvailiable,
          prevTab: undefined,
          setPrev: setPrev
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
          var apiBaseUrl = "http://localhost:9000"
          var endpoint = apiBaseUrl + "/answers";

          $scope.form && $scope.form.$setSubmitted(true);
              if($scope.form && $scope.form.$invalid == false) {
                
                //console.log("inner", $scope.form.innerForm);
                angular.forEach($scope.form.innerForm, function(val, key) {
                    if((key.indexOf("_") !== -1) && (key.indexOf("_comment") == -1)) {
                      var res = key.split("_");
                      //console.log("res", res);
                      //console.log("val", val);
                      var commentKey = key + "_comment";
                      var answer = {
                        "value" : val.$viewValue,
                        "comment" : $scope.form.innerForm[commentKey].$viewValue,
                        "survey" : res[0],
                        "memberEvaluated" : res[1],
                        "memberAsked" : res[2]
                      }
                      console.log($scope);
                      //AnswerService.create(answer);
                      /*$http.post(endpoint, answer).success(function(data) { 
                          console.log(data.data);
                          //return response.data;
                       }).error(function(msg, code) {
                          //deferred.reject(msg);
                       });*/
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