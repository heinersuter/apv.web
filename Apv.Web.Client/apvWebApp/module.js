angular.module("apvWebApp", ["ngResource", "ui.router"]);

angular.module("apvWebApp").config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/initState");

    $stateProvider
        .state("initState", {
            ulr: "/initState",
            templateUrl: "apvWebApp/archive/archive.html"
            //controller: "ArchiveCtrl"
        });
}]);
