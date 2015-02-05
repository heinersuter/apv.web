angular.module('apvWebApp').factory('ArchiveItemGroupService', function ($resource) {
    return $resource('http://localhost:49538/api/ArchiveItemGroup/:id/'); // Note the full endpoint address
});