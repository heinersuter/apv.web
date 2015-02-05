angular.module("apvWebApp").controller("ArchiveCtrl", ["ArchiveItemGroupService", function (archiveItemGroupService) {
    "use strict";

    var vm = this;
    vm.test = "Hello from ArchiveCtrl!";

    archiveItemGroupService.query(
        function (groups) {
            vm.groups = groups;
        });
}]);