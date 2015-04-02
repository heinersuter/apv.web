angular.module('apvWebApp').controller('LoginCtrl', ['LoginService', function (loginService) {
    'use strict';

    var vm = this;
    vm.test = 'Hello from LoginCtrl!';
    
    loginService.login();
}]);