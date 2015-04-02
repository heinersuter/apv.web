angular.module('apvWebApp').factory('oAuthInterceptor', ['OAuthService', function (oAuthService) {
    'use strict';

    var myInterceptor = {
        request: function (config) {
            if (config.url.indexOf('/api/') > -1) {
                config.headers.Authorization = 'Bearer ' + oAuthService.token;
            }
            return config;
        }
    };

    return myInterceptor;
}]);

angular.module('apvWebApp').config(['$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push('oAuthInterceptor');
}]);
