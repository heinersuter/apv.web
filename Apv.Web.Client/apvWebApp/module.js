angular.module('apvWebApp', ['ngRoute', 'ngResource']);

angular.module('apvWebApp').config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'apvWebApp/archive/archive.html',
        controller: 'ArchiveCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
