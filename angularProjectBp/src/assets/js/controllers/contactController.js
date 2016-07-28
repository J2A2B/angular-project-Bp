myApp.controller('contactController',['$scope', '$http', '$routeParams', 'ApiFactory', function($scope, $http, $routeParams, ApiFactory){

	$scope.contacts = [];

	$http.get(ApiFactory.api + 'contacts/'+$routeParams.id_contact)
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
