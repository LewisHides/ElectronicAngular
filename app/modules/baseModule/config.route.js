/**
 * Created by R4nd0mJ0k3r on 28/08/2016.
 */
(function () {
    'use strict';

    angular.module('baseModule')
        .config(["$stateProvider", function ($stateProvider) {

            $stateProvider
                .state('helloWorld', {
                    url: "/helloWorld",
                    templateUrl: BASE_MODULE_TEMPLATES+"helloWorld.html",
                    controller: 'helloWorldCtrl',
                })
        }]);
})();