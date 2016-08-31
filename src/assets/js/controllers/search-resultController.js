myApp.controller('search-resultController',['$scope', '$http', '$routeParams', 'ApiFactory', 'newsFactory', function($scope, $http, $routeParams, ApiFactory, newsFactory){

	$scope.query = $routeParams.id_keyword;

	$scope.activity = [];
	$scope.activities = [];

	// $http.get(ApiFactory.api + 'search?q='+$scope.query+'&limit=10')
	$http.get(ApiFactory.api + 'keywords/'+$scope.query+'/activities')
		.then(
			function (response) {
			$scope.activity = response.data.result;
			console.log($scope.activity);
		},
			function (err) {
				console.log('Unable to retrieve data from the API :/');
		});



		$http.get(ApiFactory.api +'/activities')
		.then(
			function (response) {
			$scope.activities = response.data.result;
			console.log($scope.activities);
		},
			function (err) {
				console.log('Unable to retrieve data from the API :/');
		});

}]);
