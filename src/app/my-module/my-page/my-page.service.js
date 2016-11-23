/**
 * Created by sguilly on 22/11/16.
 */

'use strict';

angular.module('my-page')

    .service('MyPageService', function () {

        this.getText = function()
        {
            return 'MyService'
        }

    });