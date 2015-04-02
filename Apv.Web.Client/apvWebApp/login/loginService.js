angular.module("apvWebApp").factory("LoginService", ['$resource', '$http', 'OAuthService', function ($resource, $http, oAuthService) {
    "use strict";

    var service = {};

    service.login = function (callback) {
        console.log("login " + oAuthService.token);
        $resource("http://localhost:49538/token", {}, {
            post: {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            }
        }).post(
            'grant_type=password&username=heiner&password=secret',
        function (tokenObject) {
            oAuthService.token = tokenObject.access_token;
            callback();
        });
    };

    service.isLoggedIn = function () {
        return oAuthService.token !== null;
    };

    return service;
}]);