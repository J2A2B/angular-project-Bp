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

	$scope.contact = [];

	$http.get('http://private-anon-d042e0f724-bplink.apiary-mock.com/api/contacts/id')
		.then(
			function (response) {
			$scope.contact = response.data.result;

			console.log($scope.contact.length);
		},
			function (err) {
				console.log('Unable to retrieve data from the API :/');
		});

}]);

// +$scope.query+