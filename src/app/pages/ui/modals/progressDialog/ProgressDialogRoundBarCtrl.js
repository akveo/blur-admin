/**
 * Created by n.poltoratsky
 * on 24.06.2016.
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.ui.modals')
        .controller('ProgressDialogRoundBarCtrl', ProgressDialogRoundBarCtrl);

    function ProgressDialogRoundBarCtrl($scope, $timeout, progressDialog) {

        $scope.max = 100;
        $scope.value = 40;

        (function changeValue() {
            if ($scope.value >= $scope.max) {
                progressDialog.close();
            } else {
                $scope.value++;
                $timeout(changeValue, 300);
            }
        })();
    }

})();
