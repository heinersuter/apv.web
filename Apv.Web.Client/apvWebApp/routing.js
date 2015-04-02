angular.module('apvWebApp').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
	'use strict';

	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('index', {
			url: '/',
			templateUrl: 'archive/archive.html',
			controller: 'ArchiveCtrl as archive'
		})
		.state('login', {
			url: '/login',
			templateUrl: 'login/login.html',
			controller: 'LoginCtrl as login'
		});
}]);
