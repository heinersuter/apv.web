angular.module('apvWebApp').factory('LoginService', ['$resource', 'BaseUrl', '$http', 'OAuthService', function ($resource, baseUrl, $http, oAuthService) {
    'use strict';

    var service = {};

    service.login = function (callback) {
        $resource(baseUrl + '/token', {}, {
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