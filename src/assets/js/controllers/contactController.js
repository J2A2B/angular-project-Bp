myApp.controller('contactController',['$scope', '$http', '$routeParams', 'ApiFactory', 'newsFactory', function($scope, $http, $routeParams, ApiFactory, newsFactory){

	$scope.contact = {};
	$scope.photos = ApiFactory.media;

	$http.get(ApiFactory.api + 'contacts/'+$routeParams.id_contact)
				.then(
			function (response) {
			$scope.contact = response.data;
			console.log($scope.contact);
		},
			function (err) {
				console.log('Unable to retrieve data from the API :/');
		});

    $scope.getImage = function(id) {
    // body...
    var img = $scope.photos + id;
    return img;
  };

}]);


