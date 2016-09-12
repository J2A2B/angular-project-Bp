var myApp = angular.module('myApp',['ngRoute','ngAnimate']);

myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/', {templateUrl: 'views/home.html'})
	.when('/contact/:id_contact', {templateUrl: 'views/contact.html'})
	.when('/activity/:id_activity', {templateUrl: 'views/activity.html'})
	.when('/search-error/', {templateUrl: 'views/search-error.html'})
	.when('/search-result/:id_keyword', {templateUrl: 'views/search-result.html'})
	.when('/search-result/noresult', {templateUrl: 'views/search-error.html'})
	.otherwise({redirectTo: '/'});
}]);

myApp.run(['$rootScope', '$location', '$window', function($rootScope, $location, $window) {
	$rootScope.$on('$routeChangeSuccess', function(event) {
		if (!$window.ga) {
			return;
		}
    $window.ga('send', 'pageview', {
			page: $location.path()
		});
	});
}]);
