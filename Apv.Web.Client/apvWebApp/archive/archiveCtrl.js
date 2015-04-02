angular.module('apvWebApp').controller('ArchiveCtrl', ['ArchiveItemGroupService', 'LoginService', function (archiveItemGroupService, loginService) {
    'use strict';

    var vm = this;
    vm.test = 'Hello from ArchiveCtrl!';

    if (loginService.isLoggedIn()) {
        archiveItemGroupService.query(
            function(groups) {
                vm.groups = groups;
            });
    } else {
        vm.test = 'Not logged in';
    }

}]);