angular.module('apvWebApp').factory('ArchiveItemGroupService', ['$resource', 'BaseUrl', function ($resource, baseUrl) {
    'use strict';

    return $resource(baseUrl + '/api/ArchiveItemGroup/:id/', {});
}]);