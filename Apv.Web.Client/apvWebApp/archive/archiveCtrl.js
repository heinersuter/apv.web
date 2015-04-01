angular.module("apvWebApp").controller("ArchiveCtrl", ["ArchiveItemGroupService", "LoginService", function (archiveItemGroupService, loginService) {
    "use strict";

    var vm = this;
    vm.test = "Hello from ArchiveCtrl!";

    function setGroups() {
        //archiveItemGroupService.save({ name: 'test' });
        archiveItemGroupService.query(
                function (groups) {
                    vm.groups = groups;
                });
    }

    //if (!loginService.isLoggedIn()) {
    //    loginService.login(setGroups);
    //} else {

    loginService.login();
    setGroups();

    //}
}]);