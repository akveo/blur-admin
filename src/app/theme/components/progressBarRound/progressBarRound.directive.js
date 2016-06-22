/**
 * Created by n.poltoratsky
 * on 28.06.2016.
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.theme.components')
        .directive('progressBarRound', progressBarRound);

    /** @ngInject */
    function progressBarRound() {
        return {
            restrict: 'E',
            templateUrl: 'app/theme/components/progressBarRound/progressBarRound.html',
            link:function($scope, element, attrs) {
                attrs.$observe('value', function(value) {
                    animateBar();
                });

                function animateBar() {
                    var circle = document.getElementById('loader');
                    var percentage = document.getElementById('percentage');
                    circle.setAttribute("stroke-dasharray", attrs.value * 180 * Math.PI / attrs.max + ", 20000");
                    percentage.childNodes[0].data = parseInt(attrs.value) + '%';
                }
            }
        }
    }
})();