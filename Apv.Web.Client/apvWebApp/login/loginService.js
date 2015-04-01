angular.module("apvWebApp").factory("LoginService", ['$resource', '$http', 'OAuthService', function ($resource, $http, oAuthService) {
    "use strict";

    var service = {};

    service.login = function () {
        $resource("http://heinersuter.ch/apvwebapi/token", {}, {
            post: {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            }
        }).post(
            'grant_type=password&username=heiner&password=secret',
        //}).post({
        //    'grant_type': 'password',
        //    'username': 'heiner',
        //    'password': 'secret'
        //},
        function (tokenObject) {
            oAuthService.token = tokenObject.access_token;
        });
    };

    service.isLoggedIn = function () {
        return oAuthService.token !== null;
    };

    return service;
}]);