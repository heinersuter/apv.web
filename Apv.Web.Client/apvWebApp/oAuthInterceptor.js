angular.module("apvWebApp").factory('oAuthInterceptor', ['OAuthService', function (oAuthService) {

    return {
        request: function (config) {
            // This is just example logic, you could check the URL (for example)
            //if (config.headers.Authorization === 'Bearer') {
                //config.headers.Authorization = 'Bearer ' + oAuthService.token;
            //}
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
