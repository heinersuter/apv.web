angular.module('apvWebApp').controller('ArchiveItemGroupCtrl',
    ['$stateParams', 'BaseUrl', 'ArchiveItemGroupService', 'LoginService',
        function ($stateParams, baseUrl, archiveItemGroupService, loginService) {
            'use strict';

            var vm = this;

            vm.isLoggedIn = loginService.isLoggedIn();
            vm.baseUrl = baseUrl;
            vm.path = $stateParams.path;

            if (vm.isLoggedIn) {
                archiveItemGroupService.getArchiveItems(
                    $stateParams.path,
                    function (items) {
                        vm.items = items;
                    });
            }

        }]);