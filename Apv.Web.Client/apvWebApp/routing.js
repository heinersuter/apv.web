angular.module("apvWebApp").config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
	"use strict";

	$urlRouterProvider.otherwise("/");

	$stateProvider
		.state("index", {
			url: "/",
			templateUrl: "apvWebApp/archive/archive.html",
			controller: "ArchiveCtrl"
		});
}]);
