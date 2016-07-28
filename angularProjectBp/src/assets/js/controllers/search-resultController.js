myApp.controller('search-resultController',['$scope', '$http', '$routeParams', 'ApiFactory', function($scope, $http, $routeParams, ApiFactory){

	$scope.query = $routeParams.model;
	// $scope.activity=[
	// 	{name: "I'm so fake1"},
	// 	{name: "I'm so fake"},
	// 	{name: "I'm so fake"},
	// 	{name: "I'm so fake"},
	// 	{name: "I'm so fake"},
	// 	{name: "I'm so fake"},
	// 	{name: "I'm so fake"}
	// ];

	$scope.activity = [];

	$http.get(ApiFactory.api + 'search?q='+$scope.query+'&limit=10')
		.then(
			function (response) {
			$scope.activity = response.data.result;

			console.log($scope.activity.length);
		},
			function (err) {
				console.log('Unable to retrieve data from the API :/');
		});

}]);
