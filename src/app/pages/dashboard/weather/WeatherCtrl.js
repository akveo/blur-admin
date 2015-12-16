/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .controller('WeatherCtrl', WeatherCtrl);

  /** @ngInject */
  function WeatherCtrl($scope, $http, $timeout, $element) {
    var url = 'http://api.openweathermap.org/data/2.5/forecast';
    var method = 'GET';
    var key = '2de143494c0b295cca9337e1e96b00e0';
    var middleOfTheDay = 15;
    $scope.units = 'metric';
    $scope.weatherIcons = {
      '01d': 'ion-ios-sunny-outline',
      '02d': 'ion-ios-partlysunny-outline',
      '03d': 'ion-ios-cloud-outline',
      '04d': 'ion-ios-cloud',
      '09d': 'ion-ios-rainy',
      '10d': 'ion-ios-rainy-outline',
      '11d': 'ion-ios-thunderstorm-outline',
      '13d': 'ion-ios-snowy',
      '50d': 'ion-ios-cloudy-outline',
      '01n': 'ion-ios-cloudy-night-outline',
      '02n': 'ion-ios-cloudy-night',
      '03n': 'ion-ios-cloud-outline',
      '04n': 'ion-ios-cloud',
      '09n': 'ion-ios-rainy',
      '10n': 'ion-ios-rainy-outline',
      '11n': 'ion-ios-thunderstorm',
      '13n': 'ion-ios-snowy',
      '50n': 'ion-ios-cloudy-outline'
    };
    $scope.weather = {};

    $scope.switchUnits = function (name) {
      $scope.units = name;
      $scope.updateWeather();
    };

    $scope.switchDay = function (day) {
      $scope.weather.current = day;
      makeChart($scope.weather.days[$scope.weather.current].timeTemp)
    };

    $scope.updateWeather = function () {
      $http({
        method: method, url: url, params: {
          appid: key,
          lat: $scope.geoData.geoplugin_latitude,
          lon: $scope.geoData.geoplugin_longitude,
          units: $scope.units
        }
      }).then(function success(response) {
        saveWeatherData(response.data);
        makeChart($scope.weather.days[$scope.weather.current].timeTemp)
      }, function error() {
        console.log("WEATHER FAILED")
      });
    };

    function updateGeoData() {
      $http.jsonp('http://www.geoplugin.net/json.gp?jsoncallback=JSON_CALLBACK').then(function success(response) {
        $scope.geoData = response.data;
        $scope.updateWeather();
      }, function error() {
        console.log("GEO FAILED")
      });
    }

    function makeChart(data) {
      AmCharts.makeChart('tempChart', {
        type: 'serial',
        theme: 'blur',
        handDrawn: true,
        categoryField: 'time',
        dataProvider: data,
        valueAxes: [
          {
            axisAlpha: 0.3,
            gridAlpha: 0
          }
        ],
        graphs: [
          {
            bullet: 'square',
            fillAlphas: 0.3,
            fillColorsField: 'lineColor',
            legendValueText: '[[value]]',
            lineColorField: 'lineColor',
            title: 'Temp',
            valueField: 'temp'
          }
        ],
        categoryAxis: {
          gridAlpha: 0,
          axisAlpha: 0.3
        }
      }).write('tempChart');
    }

    function saveWeatherData(data) {
      var firstItem = data.list[0];
      var weather = {
        days: [{
          date: new Date(),
          timeTemp: [],
          main: firstItem.weather[0].main,
          description: firstItem.weather[0].description,
          icon: firstItem.weather[0].icon,
          temp: firstItem.main.temp
        }], current: 0
      };
      data.list.forEach(function (item, i) {
        var itemDate = new Date(item.dt_txt);
        if (itemDate.getDate() !== weather.days[weather.days.length - 1].date.getDate()) {
          weather.days.push({date: itemDate, timeTemp: []});
        }
        var lastItem = weather.days[weather.days.length - 1];
        lastItem.timeTemp.push({
          time: itemDate.getHours(),
          temp: item.main.temp
        });
        if ((weather.days.length > 1 && itemDate.getHours() == middleOfTheDay) || i == data.list.length - 1) {
          lastItem.main = item.weather[0].main;
          lastItem.description = item.weather[0].description;
          lastItem.icon = item.weather[0].icon;
          lastItem.temp = item.main.temp;
          lastItem.date.setHours(i == data.list.length - 1 ? 0 : middleOfTheDay);
          lastItem.date.setMinutes(0);
        }
      });
      console.log(weather.days[weather.current].date);
      weather.days = weather.days.slice(0, $element.attr('forecast') || 5);
      $scope.weather = weather;
    }

    updateGeoData();
  }
})();