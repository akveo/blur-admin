'use strict';

blurAdminApp.directive('blurWeather', function () {
    return {
        restrict: 'EA',
        controller: ['$scope', '$http', '$timeout', function ($scope, $http, $timeout) {
            $scope.url = 'http://api.openweathermap.org/data/2.5/weather';
            $scope.method = 'GET';
            $scope.key = '2de143494c0b295cca9337e1e96b00e0';
            $scope.units = 'metric';
            $scope.date = new Date();
            $scope.weatherIcons = {
                '01d' : 'ion-ios-sunny-outline',
                '02d' : 'ion-ios-partlysunny-outline',
                '03d' : 'ion-ios-cloud-outline',
                '04d' : 'ion-ios-cloud',
                '09d' : 'ion-ios-rainy',
                '10d' : 'ion-ios-rainy-outline',
                '11d' : 'ion-ios-thunderstorm-outline',
                '13d' : 'ion-ios-snowy',
                '50d' : 'ion-ios-cloudy-outline',
                '01n' : 'ion-ios-cloudy-night-outline',
                '02n' : 'ion-ios-cloudy-night',
                '03n' : 'ion-ios-cloud-outline',
                '04n' : 'ion-ios-cloud',
                '09n' : 'ion-ios-rainy',
                '10n' : 'ion-ios-rainy-outline',
                '11n' : 'ion-ios-thunderstorm',
                '13n' : 'ion-ios-snowy',
                '50n' : 'ion-ios-cloudy-outline'
            };
            $scope.updateWeather = function () {
                $http({
                    method: $scope.method, url: $scope.url, params: {
                        appid: $scope.key,
                        lat: $scope.geoData.geoplugin_latitude,
                        lon: $scope.geoData.geoplugin_longitude,
                        units : $scope.units
                    }
                }).then(function success(response) {
                    $scope.weatherData = response.data;
                    console.log(response.data);
                }, function error(response) {
                    console.log("WEATHER FAILED")
                });
            };

            $scope.updateGeoData = function () {
                $http.jsonp('http://www.geoplugin.net/json.gp?jsoncallback=JSON_CALLBACK').then(function success(response) {
                    $scope.geoData = response.data;
                    console.log(response.data);
                    $scope.updateWeather();
                }, function error() {
                    console.log("GEO FAILED")
                });
            };

            $timeout(function () {
                $scope.updateGeoData();
            }, 100);

        }],
        templateUrl: 'app/pages/dashboard/widgets/weather/weather.html'
    };
});