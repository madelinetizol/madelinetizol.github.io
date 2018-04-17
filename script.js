$('#tizol-bio').load("text/about.txt");
$('#capstone-bio').load("text/capstone.txt");


var app = angular.module('website', ['ngRoute']);
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/capstone', {
      templateUrl: 'capstone.html'
    })
    .when('/home', {
      templateUrl: 'home.html'
    })
    .when('/about', {
      templateUrl: 'about.html'
    })
    .when('/art', {
      templateUrl: 'art.html'
    })
    .otherwise( {
      redirectTo: '/home'
    });
}])

app.controller('main-controller', ['$scope', function($scope) {
}]);

