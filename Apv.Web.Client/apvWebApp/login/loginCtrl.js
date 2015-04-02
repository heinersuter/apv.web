angular.module('apvWebApp').controller('LoginCtrl', ['$state', 'LoginService', function ($state, loginService) {
    'use strict';

    var vm = this;
    vm.test = 'Hello from LoginCtrl!';
    
    vm.login = function() {
        loginService.login(vm.username, vm.password, function (isLoggedIn) {
            if (isLoggedIn) {
                vm.isInvalidAttemt = false;
                $state.go('index');
            } else {
                vm.isInvalidAttemt = true;
            }
        });
    }

}]);