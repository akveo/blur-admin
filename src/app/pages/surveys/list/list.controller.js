(function () {
  'use strict';

  angular.module('BlurAdmin.pages.surveys.list')
      .controller('list', list);

  /** @ngInject */
  function list( SurveyService, AnswerService, MemberService, $scope, $rootScope, $log, $state, toastr, baConfig, $q, $http, $sce, $filter, appConfig) {
    var vm = this;
    $rootScope.$state = $state;

    function loadSurveys() {
      SurveyService
        .list()
        .then(function (data){
					vm.surveys = data;
          getSurveyCompletion();
					$log.info("Got the survey data",data);
        }, function (error){
          $log.error(error);
        });
    }

    function goToCreate() {
      $log.info("Go to create");
      $state.go('main.surveys.create');
    }

    function editSurvey(survey){
      $log.info("Edit");
      if(survey.status == 'Draft' )
        $state.go('main.surveys.edit', {'survey_id': survey.id})
      else
        toastr.error('You can only edit surveys in Draft status', 'Surveys', vm.errorToastrOptions)
    }; 

    function resendSurvey(survey){
      if (confirm("Are you sure you want to resend this survey ?"))
        SurveyService
                .send(survey)
                .then(
                  function (data){
                    console.log('Survey is being sent', data);
                    loadSurveys();
                    toastr.info('The survey is being resent :)', 'Surveys', vm.successToastrOptions)
                  },
                  function (error){
                    toastr.error('There were an error resending the survey', 'Surveys', vm.errorToastrOptions)
                  }
                );
    }; 

    function duplicateSurvey(survey){
      $log.info("Remove");
      var s = survey
      s.id = null;
      s.name = "COPY OF " + s.name
      s.status = "Draft"
      
      s.list = []
      s.respondents = []
      s.sent = []
      s.notSent = []
            SurveyService
                .create(s)
                .then(
                  function (data){
                    console.log('Survey duplicated', data);
                    loadSurveys();
                    toastr.info('The survey was duplicated successfuly :)', 'Surveys', vm.successToastrOptions)
                  },
                  function (error){
                    toastr.error('There were an error duplicating the survey', 'Surveys', vm.errorToastrOptions)
                  }
                );
    }; 

    function removeSurvey(survey){
      if (confirm("Are you sure?"))
           {
            $log.info("Remove");
            SurveyService
                .remove(survey.id)
                .then(
                  function (data){
                    console.log('Survey deleted', data);
                    loadSurveys();
                    toastr.info('The survey was deleted successfuly :)', 'Surveys', vm.successToastrOptions)
                  },
                  function (error){
                    toastr.error('There were an error deleting the survey', 'Surveys', vm.errorToastrOptions)
                  }
                );
            }
    }; 

    function getSurveyCompletion() {
      angular.forEach(vm.surveys, function(survey, key) {
        var totalMembers = 0
        var totalAnswers = survey.answers.length
        var totalQuestions = survey.elements.length
        var completion = 0

        angular.forEach(survey.list, function(list, key) {
            totalMembers = totalMembers + list.members.length
          });

        totalQuestions = survey.type == "s_360" ? totalQuestions * totalMembers : totalQuestions;

        completion = (((totalAnswers) / (totalMembers * totalQuestions))*100).toFixed(0)

        survey.completion = completion;
        //console.log('totalAnswers / TOTAL', totalAnswers, totalMembers * totalQuestions);

      });

      //console.log('getSurveyCompletion', vm.surveys);
    }

    function printPdf(){
                console.log('printing pdf...');
                getPDF().then(function(response){
                    console.log(response);
                    window.open(response);
                },function(err){
                    console.log('Error: ' + err);
                });
            };

     function getPDF(){
                vm.loading = true;
                var q = $q.defer();
                var endpoint = appConfig.apiBaseUrl+'/pdf/regular';
                $http.defaults.headers.common['content-type']= 'application/pdf';

                var paramz = {}
                paramz.survey = vm.activeSurvey.id
                paramz.survey_type = vm.activeSurvey.type
                paramz.survey_summary_labels = vm.activeSurvey.type == "s_360" ? vm.s360Analysis.overall.labels.join(', ') : vm.regularAnalysis.overall.labels.join(', ');
                paramz.survey_summary_data = vm.activeSurvey.type == "s_360" ? vm.s360Analysis.overall.data.join(', ') : vm.regularAnalysis.overall.data.join(', ');

               // paramz.lists_summary_labels = vm.activeSurvey.type == "s_360" ? vm.s360Analysis.lists.labels.join(', ') : vm.regularAnalysis.overall.labels.join(', ');
               // paramz.lists_summary_data = vm.activeSurvey.type == "s_360" ? vm.s360Analysis.lists.data.join(', ') : vm.regularAnalysis.overall.data.join(', ');

                $http.get(endpoint, {params : paramz, responseType:'arraybuffer'})
                        .success(function (response) {
                            console.log(response);
                            var file = new Blob([response], {type: 'application/pdf'});
                            var fileURL = URL.createObjectURL(file);
                            vm.loading = false;
                            q.resolve(fileURL);
                        })
                        .error(function(err){
                            vm.loading = false;
                            q.reject(err);
                        });
                return q.promise;
            };

    function analyzeSurvey(survey) {
      var params = {"survey":survey.id}
      AnswerService
        .analyze(params)
        .then(function (data){
          vm.analysis = data;
          vm.activeSurvey = survey;
          $log.info("Got answers analysis",data);
          getRespondents(survey);

          if(vm.activeSurvey.type != "s_360")
            getRegularAnalysis();
          else
            getS360Analysis();

        }, function (error){
          $log.error(error);
        });
    }

    function getRespondents(survey) {
      var members = vm.analysis.data.overall.respondents.join(', ')
      var params = {"ids":members}
      MemberService
        .list(params)
        .then(function (data){
          vm.members = data;

          $log.info("Got members",data);
          angular.forEach(vm.members, function(member, key) {
            if (survey.type == 's_incognito'){
              member.name = 'unknown'
              member.email = 'unknown'
            }
            member.answers = $filter('filter')(vm.analysis.answers, {'asked' : {'id' : member.id}})
          })
          vm.selectedMember = (vm.members.length > 0) ? vm.members[0] : [];
          console.log("getRespondents", vm.members);
        }, function (error){
          $log.error(error);
        });
    }

    function getS360Analysis(){
        vm.s360Analysis = {"lists" : {}, "overall": {}}
        //overall
        vm.s360Analysis.overall = gets360Data(vm.analysis.data.overall, vm.analysis.labels);
        //lists
        angular.forEach(vm.activeSurvey.list, function(list) {
            vm.s360Analysis.lists[list._id] = {}
            vm.s360Analysis.lists[list._id].labels = []
            vm.s360Analysis.lists[list._id] = gets360Data(vm.analysis.data.lists[list._id], vm.analysis.labels);
          });
        //individual
        vm.s360Analysis.individual = gets360IndividualData(vm.analysis.data.overall, vm.analysis.labels);
          console.log("s360Analysis", vm.s360Analysis)
          
      }

      function gets360Data(listData, labels){
          var data = {}
          data.labels = []
          data.data = []
          angular.forEach(vm.activeSurvey.elements, function(element) {
            data.labels.push(element.tag)
          })
          angular.forEach(labels, function(label, el) {
              var elemSum = 0
              var i = 0
              angular.forEach(listData.data, function(asked, a) {
                var askedSum = 0
                angular.forEach(asked, function(evaluated, e) {
                  elemSum = elemSum + evaluated[el]
                  i++
                })

              })
              var avg = elemSum / i
              //console.log("element, elemSum, i, avg",el, elemSum, i, avg)
              data.data.push(avg);
          })
          return data;

      }




      function gets360IndividualData(listData, labels){
          var data = {}
          data.labels = []
          data.data = []
          angular.forEach(vm.activeSurvey.elements, function(element) {
            data.labels.push(element.tag)
          })
          var tempAskedData = []
          var othersData = []
          angular.forEach(listData.data, function(askd, as) {
            tempAskedData[as] = []
            othersData[as] = []
            angular.forEach(labels, function(label, el) {
                var elemSum = 0
                var myVal = 0
                var i = 0
                angular.forEach(listData.data, function(asked, a) {
                  var askedSum = 0
                  angular.forEach(asked, function(evaluated, e) {
                    //others evaluation
                    if(e == as) {
                      i++
                      elemSum = elemSum + evaluated[el]
                    } 
                    //auto evaluation
                    if (e == as && e == a)
                      myVal = evaluated[el]
                    
                  })

                })
                var avg = elemSum / i
                
                othersData[as].push(avg);
                tempAskedData[as].push(myVal);

              })
            })
          //merging all together
          //console.log("here",othersData)
          angular.forEach(listData.data, function(askd, as) {
            //console.log("asasasas",as)
            data.data[as] = [othersData[as], tempAskedData[as]]
          })
          data.labels = data.labels
          //console.log("othersData[as], tempAskedData[as]",othersData, tempAskedData, data)
          return data;
      }

      

      

      function getRegularAnalysis(){
        
        vm.regularAnalysis = {"lists" : {}, "overall": {}}
        //overall
        vm.regularAnalysis.overall = getRegularData(vm.analysis.data.overall, vm.analysis.labels);
        //lists
        angular.forEach(vm.activeSurvey.list, function(list) {
            vm.regularAnalysis.lists[list._id] = {}
            vm.regularAnalysis.lists[list._id].labels = []
            vm.regularAnalysis.lists[list._id] = getRegularData(vm.analysis.data.lists[list._id], vm.analysis.labels);
          });

        console.log("regularAnalysis", vm.regularAnalysis)
        
          
      }




      function getRegularData(listData, labels){
          var data = {}
          data.labels = []
          data.data = []

          angular.forEach(vm.activeSurvey.elements, function(element) {
              
              if (element.tag)
                data.labels.push(element.tag)
              else 
                data.labels.push(element.text)

              var perfectScore = listData.respondents.length * element.items.length //totalParticip * nbrChoix
              // nobreReponseN * coeficientN + ...
              var totalScore = 0;
              for ( var i = 0, _len = listData.data[element._id].length; i < _len; i++ ) {
                  totalScore += listData.data[element._id][i] * (i+1)
              }
              var percent = totalScore * 100 / perfectScore
              data.data.push(percent);
              //console.log("listData.data[element._id], perfectScore, totalScore, percent", listData.data[element._id], perfectScore, totalScore, percent)
            })

          return data;

      }

    function activate(){
			vm.surveys = [];
      vm.activeSurvey = {};
      vm.members = [];
      vm.selectedMember = {};
      vm.goToCreate = goToCreate;
      vm.analyzeSurvey = analyzeSurvey;
      vm.editSurvey = editSurvey;
      vm.removeSurvey = removeSurvey;
      vm.printPdf = printPdf;
      vm.duplicateSurvey = duplicateSurvey;
      vm.resendSurvey = resendSurvey;

      vm.s360ChartOption = {
        scales: {
            
            yAxes: [{
              ticks: {
            
                   min: 0,
                   max: 10,
                   callback: function(value){return value}
                },  
                scaleLabel: {
                   display: false
                }
            }]
        }
      };

      vm.errorToastrOptions = {
                      "autoDismiss": true,
                      "positionClass": "toast-bottom-right",
                      "type": "error",
                      "timeOut": "5000",
                      "extendedTimeOut": "2000"
                    };
      vm.successToastrOptions = {
                      "autoDismiss": true,
                      "positionClass": "toast-bottom-right",
                      "type": "success",
                      "timeOut": "5000",
                      "extendedTimeOut": "2000"
                    };

      vm.series = appConfig.series;

      loadSurveys();
    }

    activate();

  }

})();
