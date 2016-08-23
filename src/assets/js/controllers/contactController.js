myApp.controller('contactController',['$scope', '$http', '$routeParams', 'ApiFactory', 'newsFactory', function($scope, $http, $routeParams, ApiFactory, newsFactory){

	$scope.contacts = [];
	$scope.photos = ApiFactory.media;

	$http.get(ApiFactory.api + 'contacts/'+$routeParams.id_contact)
				.then(
			function (response) {
			$scope.contacts = response.data;

			console.log($scope.contacts);
		},
			function (err) {
				console.log('Unable to retrieve data from the API :/');
		});

	$scope.getImage = function(id) {
    // body...
    var img = $scope.photos + id +'.gif';
    console.log(img);
    return img;
  };

    $scope.getImage = function(id) {
    // body...
    var img = $scope.photos + id;
    console.log(img);
    return img;
  };

}]);

// +$scope.query+
