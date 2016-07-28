var myApp = angular.module('myApp',['ngRoute','ngAnimate']);

myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/', {templateUrl: 'views/home.html'})
	.when('/contact/:id_contact', {templateUrl: 'views/contact.html'})
	.when('/activity/:id_activity', {templateUrl: 'views/activity.html'})
	.when('/search-error', {templateUrl: 'views/search-error.html'})
	.when('/search-result/:model', {templateUrl: 'views/search-result.html'})
	.otherwise({redirectTo: '/'});
}]);
