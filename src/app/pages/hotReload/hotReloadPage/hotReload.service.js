/**
 * Created by sguilly on 22/11/16.
 */

'use strict';

angular.module('hotReloadPage')

    .service('HotReloadService', function () {

        this.getText = function()
        {
            return '[hotReload service text]'
        }

    });