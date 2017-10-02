(function () {
  'use strict';

  angular.module('BlurAdmin.pages.surveys.list')
      .controller('list', list);

  /** @ngInject */
  function list( SurveyService, AnswerService, MemberService, $scope, $rootScope, $log, $state, toastr, baConfig, $q, $http, $sce, $filter) {
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
      $state.go('surveys.create');
    }

    function editSurvey(id){
      $log.info("Edit");
      $state.go('surveys.edit', {'survey_id': id})
    }; 

    function removeSurvey(id){
      if (confirm("Are you sure?"))
           {
            $log.info("Remove");
            SurveyService
                .remove(id)
                .then(
                  function (data){
                    console.log('Survey deleted', data);
                    $("tr#"+id).slideUp();
                    toastr.info('The survey was deleted successfuly :)', 'Surveys', {
                      "autoDismiss": true,
                      "positionClass": "toast-bottom-right",
                      "type": "success",
                      "timeOut": "5000",
                      "extendedTimeOut": "2000"
                    })
                  },
                  function (error){
                    toastr.error('There were an error deleting the survey', 'Surveys', {
                      "autoDismiss": true,
                      "positionClass": "toast-bottom-right",
                      "type": "error",
                      "timeOut": "5000",
                      "extendedTimeOut": "2000"
                    })
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
                $http.defaults.headers.common['content-type']= 'application/pdf';
                $http.get('http://localhost:9000/pdf/regular', {params : {"survey":vm.activeSurvey.id}, responseType:'arraybuffer'})
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
            getListAnalysis();
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
        vm.s360Analysis.overall = gets360Data(vm.analysis.data.overall);
        //lists
        angular.forEach(vm.activeSurvey.list, function(list) {
            vm.s360Analysis.lists[list._id] = {}
            vm.s360Analysis.lists[list._id].labels = []
            vm.s360Analysis.lists[list._id] = gets360Data(vm.analysis.data.lists[list._id]);
          });
        //individual
        vm.s360Analysis.individual = gets360IndividualData(vm.analysis.data.overall);
          console.log("listAnalysis", vm.s360Analysis)
          
      }

      function gets360Data(listData){
        var data = {}
        data.labels = []
        data.data = []
        angular.forEach(vm.activeSurvey.elements, function(element) {
              var index = 0;
              var sumElementScore = 0; 
              data.labels.push(element.tag)
              angular.forEach(listData.data, function(asked) {
                angular.forEach(asked, function(evaluated) {
                  index++
                  sumElementScore += evaluated[element._id] ? evaluated[element._id] : 0
                  //console.log("evaluated, element._id, evaluated[element._id]", evaluated, element._id, evaluated[element._id])
                })
              })
              var average = sumElementScore / index

              data.data.push(average);
            })
        return data;
      }

      function gets360IndividualData(listData){
        //var data = {}
       

        var data = {}
        /*data.labels = []
        data.data = {}
        angular.forEach(listData.members, function(member) {
          data.data[member] = {}
          //angular.forEach(listData.members, function(m) {
            data.data[member] = {}
            angular.forEach(vm.activeSurvey.elements, function(element) {
              data.data[member][element._id] = []
            })
          //})
          })
        var askedData = {}
        angular.forEach(vm.activeSurvey.elements, function(element) {
          angular.forEach(listData.data, function(asked, a) {
            var askedScore = 0
            askedData[a] = askedData[a] ? askedData[a] : []
            angular.forEach(asked, function(evaluated, e) {
              if(e=='59b7f2d5c59b371d734ac120' && element._id =='59b7f8bbc59b371d734ac144')
                console.log("evaluated[element._id]",evaluated[element._id])

              askedScore += evaluated[element._id] ? evaluated[element._id] : 100
              
              if (a == e) {
                    var val = evaluated[element._id] ? evaluated[element._id] : 0
                    //askedData[a][element._id].push(val)
                    //console.log("a, val, askedData", a, val, askedData)
                  }

                  if(e=='59b7f2d5c59b371d734ac120' && element._id =='59b7f8bbc59b371d734ac144')
                console.log("askedScore",askedScore)
            })

            var avg = askedScore / listData.members.length
            data.data[a][element._id].push(avg);
          })
        })*/
        //console.log("data.data", data.data)
        data.data = {}
        data.labels = []
        var askedData = {}
        angular.forEach(vm.activeSurvey.elements, function(element) {
              var index = 0;
              var sumElementScore = 0; 

              data.labels.push(element.tag)
              angular.forEach(listData.data, function(asked, a) {
                var i = 0;
                var askedScore = 0
                askedData[a] = askedData[a] ? askedData[a] : []
                data.data[a] = data.data[a] ? data.data[a] : []
                angular.forEach(asked, function(evaluated, e) {
                    i++

                    askedScore = askedScore + evaluated[element._id]

                

                    if(e=='59b7f2d5c59b371d734ac120' && element._id =='59b7f8bbc59b371d734ac144')
                    {
                      console.log("evaluated[element._id], askedScore, i",evaluated[element._id], askedScore, evaluated)
                      //console.log("i, evaluated[element._id], a", i, evaluated[element._id], a)
                    }
                  if (a == e) {
                    var val = evaluated[element._id] ? evaluated[element._id] : 0
                    askedData[a].push(val)
                    if(e=='59b7f2d5c59b371d734ac120' && element._id =='59b7f8bbc59b371d734ac144')
                      console.log("a, val, askedData askedScore", a, val, askedData)
                  }
                  //console.log("evaluated, element._id, evaluated[element._id]", evaluated, element._id, evaluated[element._id])
                })
                var avg = askedScore / listData.members.length
                data.data[a].push(avg);
              })
              //var average = sumElementScore / index
              //data.data.push(average);
              
              //console.log("data.data, askedData", data.data, askedData);
              //data.data.push(average);
            })
        
        var finalData = {}
        finalData.data = {}
        angular.forEach(data.data, function(el, key) {
          finalData.data[key] = []
          angular.forEach(askedData, function(ask, k) {
            
            if(key == k) {
              finalData.data[key] = [el, ask]
            }

              
          })

        })
        finalData.labels = data.labels
        return finalData;
      }

      function getListAnalysis(){
        vm.listAnalysis = {}
        angular.forEach(vm.activeSurvey.list, function(list) {
            vm.listAnalysis[list._id] = {}
            //analysis.id = list._id
            //analysis.name = list.name
            vm.listAnalysis[list._id].labels = []
            vm.listAnalysis[list._id].data = []
            var listData = vm.analysis.data.lists[list._id]
            //console.log(vm.analysis.data.lists[list._id])
            angular.forEach(vm.activeSurvey.elements, function(element) {
              
              vm.listAnalysis[list._id].labels.push(element.tag)
              var perfectScore = listData.respondents.length * element.items.length //totalParticip * nbrChoix
              // nobreReponseN * coeficientN + ...
              var totalScore = 0;
              for ( var i = 0, _len = listData.data[element._id].length; i < _len; i++ ) {
                  totalScore += listData.data[element._id][i] * (i+1)
              }
              var percent = totalScore * 100 / perfectScore
              vm.listAnalysis[list._id].data.push(percent);
              //console.log("listData.data[element._id], perfectScore, totalScore, percent", listData.data[element._id], perfectScore, totalScore, percent)
            })
            //vm.listAnalysis.push(analysis)
          });
          console.log("listAnalysis", vm.listAnalysis)
          
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
      vm.series = ['How the others see you', 'How you evaluated yourself'];

      loadSurveys();
    }

    activate();

  }

})();
