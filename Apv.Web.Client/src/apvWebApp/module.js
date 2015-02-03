angular.module('apvWebApp', ['ngRoute']);

angular.module('apvWebApp').config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/archive', {
        templateUrl: 'apvWebApp/archive/archive.html',
        controller: 'ArchiveCtrl'
      }).
      otherwise({
        redirectTo: '/archive'
      });
  }]);
