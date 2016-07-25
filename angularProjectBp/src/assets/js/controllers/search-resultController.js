myApp.controller('search-resultController',['$scope', '$http', function($scope, $http){

	$scope.userEntry = '';
	$scope.activity=[
		{name: "I'm so fake1"},
		{name: "I'm so fake"},
		{name: "I'm so fake"},
		{name: "I'm so fake"},
		{name: "I'm so fake"},
		{name: "I'm so fake"},
		{name: "I'm so fake"}
	];

	// $http.get('http://private-anon-d042e0f724-bplink.apiary-mock.com/api/search?q='+$scope.userEntry+'&limit=5')
	// 	.then(
	// 		function (response) {
	// 		$scope.activity = response.data.result;
	// 		console.log($scope.activity);
	// 	},
	// 		function (err) {
	// 			console.log('Unable to retrieve data from the API :/');
	// 	});

}]);
