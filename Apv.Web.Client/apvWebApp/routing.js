angular.module('apvWebApp').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
	'use strict';

	$urlRouterProvider.otherwise('/archive');

	$stateProvider
		.state('index', {
			url: '/archive',
			templateUrl: 'archive/archive.html',
			controller: 'ArchiveCtrl as archive'
		})
		.state('archiveItemGroup', {
			url: '/archive/{path}',
			templateUrl: 'archive/archiveItemGroup.html',
			controller: 'ArchiveItemGroupCtrl as group'
		})
		.state('login', {
			url: '/login',
			templateUrl: 'login/login.html',
			controller: 'LoginCtrl as login'
		});
}]);
