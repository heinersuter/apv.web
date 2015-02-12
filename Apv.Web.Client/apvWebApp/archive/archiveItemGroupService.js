angular.module("apvWebApp").factory("ArchiveItemGroupService", function ($resource) {
    "use strict";

    //return $resource("http://localhost:49538/api/ArchiveItemGroup/:id/");
    return $resource("/apvwebapi/api/ArchiveItemGroup/:id/");
});