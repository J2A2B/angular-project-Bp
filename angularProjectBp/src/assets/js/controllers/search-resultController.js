myApp.controller('search-resultController',['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){

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

	$http.get('http://private-anon-d042e0f724-bplink.apiary-mock.com/api/search?q='+$scope.query+'&limit=10')
		.then(
			function (response) {
			$scope.activity = response.data.result;

			console.log($scope.activity.length);
		},
			function (err) {
				console.log('Unable to retrieve data from the API :/');
		});

}]);
