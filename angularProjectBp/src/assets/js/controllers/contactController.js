myApp.controller('contactController',['$scope', '$http', '$routeParams', 'ApiFactory' function($scope, $http, $routeParams, ApiFactory){


	// $scope.activity=[
	// 	{name: "I'm so fake1"},
	// 	{name: "I'm so fake"},
	// 	{name: "I'm so fake"},
	// 	{name: "I'm so fake"},
	// 	{name: "I'm so fake"},
	// 	{name: "I'm so fake"},
	// 	{name: "I'm so fake"}
	// ];

	$scope.contacts = [];

	$http.get(ApiFactory.api + 'contacts/20')
		.then(
			function (response) {
			$scope.contacts = response.data;

			console.log($scope.contacts);
		},
			function (err) {
				console.log('Unable to retrieve data from the API :/');
		});

}]);

// +$scope.query+
