angular.module('apvWebApp').factory('LoginService', ['$resource', 'BaseUrl', '$http', 'OAuthService', function ($resource, baseUrl, $http, oAuthService) {
    'use strict';

    var service = {};

    service.login = function (username, password, callback) {
        $resource(baseUrl + '/token', {}, {
            post: {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            }
        }).post(
            'grant_type=password&username=' + username + '&password=' + password,
            function (tokenObject) {
                oAuthService.token = tokenObject.access_token;
                callback(service.isLoggedIn());
            }, function (error) {
                console.log(error);
                oAuthService.token = null;
                callback(service.isLoggedIn());
            });
    };

    service.isLoggedIn = function () {
        return oAuthService.token !== null;
    };

    return service;
}]);