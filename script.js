var app = angular.module('website', ['ngRoute']);
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/about', {
      templateUrl: 'about.html'
    })
    .when('/art', {
      templateUrl: 'art.html'
    })
    .when('/capstone', {
      templateUrl: 'capstone.html'
    })
    .otherwise( {
      redirectTo: '/about'
    });
}])

app.controller('main-controller', ['$scope', function($scope) {
}]);
