var myApp = angular.module('myApp',['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/', {templateUrl: 'views/home.html'})
	.when('/contact', {templateUrl: 'views/contact.html'})
	.when('/ressources', {templateUrl: 'views/ressources.html'})
	.when('/search-error', {templateUrl: 'views/search-error.html'})
	.when('/search-result', {templateUrl: 'views/search-result.html'})
	.otherwise({redirectTo: '/'});
}]);