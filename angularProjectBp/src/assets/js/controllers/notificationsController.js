myApp.controller('notificationsController',['$scope', '$http', '$routeParams', 'ApiFactory', 'newsFactory', function($scope, $http, $routeParams, ApiFactory, newsFactory){

	$scope.notifications = [];


	$http.get(ApiFactory.api + 'news?limit=10&offset=0')
		.then(
			function (response) {
			$scope.notifications = response.data.result;

			console.log($scope.notifications);
		},
			function (err) {
				console.log('Unable to retrieve data from the API :/');
		});



}]);
