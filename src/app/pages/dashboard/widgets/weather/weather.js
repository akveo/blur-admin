'use strict';

blurAdminApp.directive('blurWeather', function () {
    return {
        restrict: 'EA',
        controller: ['$scope', '$http', '$timeout', '$element', function ($scope, $http, $timeout, $element) {
            $scope.url = 'http://api.openweathermap.org/data/2.5/forecast';
            $scope.method = 'GET';
            $scope.key = '2de143494c0b295cca9337e1e96b00e0';
            $scope.units = 'metric';
            $scope.date = new Date();
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
                    method: $scope.method, url: $scope.url, params: {
                        appid: $scope.key,
                        lat: $scope.geoData.geoplugin_latitude,
                        lon: $scope.geoData.geoplugin_longitude,
                        units: $scope.units
                    }
                }).then(function success(response) {
                    $scope.weatherData = response.data;
                    saveWeatherData(response.data);
                    makeChart($scope.weather.days[$scope.weather.current].timeTemp)
                }, function error() {
                    console.log("WEATHER FAILED")
                });
            };

            $scope.updateGeoData = function () {
                $http.jsonp('http://www.geoplugin.net/json.gp?jsoncallback=JSON_CALLBACK').then(function success(response) {
                    $scope.geoData = response.data;
                    $scope.updateWeather();
                }, function error() {
                    console.log("GEO FAILED")
                });
            };

            $timeout(function () {
                $scope.updateGeoData();
            }, 100);

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
                var weather = {
                    days: [{
                        date: new Date(data.list[0].dt_txt),
                        timeTemp: [],
                        main: data.list[0].weather[0].main,
                        description: data.list[0].weather[0].description,
                        icon: data.list[0].weather[0].icon,
                        temp: data.list[0].main.temp
                    }], current: 0
                };
                data.list.forEach(function (item, i) {
                    var itemDate = new Date(item.dt_txt);
                    if (itemDate.getDate() !== weather.days[weather.days.length - 1].date.getDate()) {
                        weather.days.push({date: itemDate, timeTemp: []});
                    }
                    weather.days[weather.days.length - 1].timeTemp.push({
                        time: itemDate.getHours(),
                        temp: item.main.temp
                    });
                    if ((i && itemDate.getHours() == 15) || i == data.list.length - 1) {
                        weather.days[weather.days.length - 1].main = item.weather[0].main;
                        weather.days[weather.days.length - 1].description = item.weather[0].description;
                        weather.days[weather.days.length - 1].icon = item.weather[0].icon;
                        weather.days[weather.days.length - 1].temp = item.main.temp;
                    }
                });
                weather.days = weather.days.slice(0, $element.attr('forecast') || 5);
                $scope.weather = weather;
            }

        }],
        templateUrl: 'app/pages/dashboard/widgets/weather/weather.html'
    };
});