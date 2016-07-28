myApp.controller('contactController',['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){


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

	$http.get('http://private-anon-d042e0f724-bplink.apiary-mock.com/api/contacts/20')
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