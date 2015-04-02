angular.module("apvWebApp").factory('oAuthInterceptor', ['OAuthService', function (oAuthService) {

    return {
        request: function (config) {
            // This is just example logic, you could check the URL (for example)
            console.log("interceptor " + oAuthService.token);
            if (config.url.indexOf("/api/") > -1) {
                console.log("interceptor add header " + oAuthService.token);
                config.headers.Authorization = 'Bearer ' + oAuthService.token;
            }
            return config;
        }
    };

    //var myInterceptor = {

    //};

    //return myInterceptor;
}]);

angular.module("apvWebApp").config(['$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push('oAuthInterceptor');
}]);
