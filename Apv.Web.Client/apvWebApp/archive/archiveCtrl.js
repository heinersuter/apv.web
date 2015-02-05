angular.module('apvWebApp').controller('ArchiveCtrl', ['ArchiveItemGroupService', function (archiveItemGroupService) {
    'use strict';

    var vm = this;
    vm.test = "Hello from ArchiveCtrl!";

    archiveItemGroupService.query(
        function (groups) {
            // Assign the response INSIDE the callback
            vm.groups = groups;
            console.log(vm.test);
        });
}]);