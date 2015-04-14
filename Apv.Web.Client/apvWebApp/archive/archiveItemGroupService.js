angular.module('apvWebApp').factory('ArchiveItemGroupService', ['$resource', 'BaseUrl', function ($resource, baseUrl) {
    'use strict';

    var groupResource = $resource(baseUrl + '/api/ArchiveItemGroup/:group/', {});

    var archiveItemResource = $resource(baseUrl + '/api/ArchiveItemGroup/:group/ArchiveItem/', {});

    var service = {};

    service.getArchiveItemGroups = function (callback) {
        groupResource.query(callback);
    }

    service.getArchiveItemGroup = function (group, callback) {
        groupResource.query({ group: group }, callback);
    }

    service.getArchiveItems = function (group, callback) {
        archiveItemResource.query({ group: group }, callback);
    }

    return service;
}]);