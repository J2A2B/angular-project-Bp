var myApp = angular.module('myApp',['ngRoute','ngAnimate']);

myApp.config(['$routeProvider', '$compileProvider', function($routeProvider, $compileProvider) {
	$routeProvider
	.when('/', {templateUrl: 'views/home.html'})
	.when('/contact/:id_contact', {templateUrl: 'views/contact.html'})
	.when('/activity/:id_activity', {templateUrl: 'views/activity.html'})
	.when('/search-error/', {templateUrl: 'views/search-error.html'})
	.when('/search-result/:id_keyword', {templateUrl: 'views/search-result.html'})
	.when('/search-result/noresult', {templateUrl: 'views/search-error.html'})
	.when('/meteo', {templateUrl: 'views/meteo.html'})
	.otherwise({redirectTo: '/'});

	$compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|xmpp|tel|javascript):/);
}]);

myApp.run(['$rootScope', '$location', '$window', function($rootScope, $location, $window) {
	$rootScope.$on('$routeChangeSuccess', function(event) {
		if (!$window.ga) {
			return;
		}
		console.log('tracking');
    $window.ga('send', 'pageview', {
			page: $location.path()
		});
	});
}]);
