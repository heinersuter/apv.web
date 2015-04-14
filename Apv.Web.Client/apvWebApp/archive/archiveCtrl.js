angular.module('apvWebApp').controller('ArchiveCtrl',
    ['ArchiveItemGroupService', 'LoginService',
        function (archiveItemGroupService, loginService) {
            'use strict';

            var vm = this;
            vm.isLoggedIn = loginService.isLoggedIn();

            if (vm.isLoggedIn) {
                archiveItemGroupService.getArchiveItemGroups(
                    function (groups) {
                        vm.groups = groups;
                    });
            }

        }]);