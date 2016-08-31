myApp.controller('search-resultController',['$scope', '$http', '$routeParams', 'ApiFactory', 'newsFactory', function($scope, $http, $routeParams, ApiFactory, newsFactory){

	$scope.query = $routeParams.id_keyword;
	$scope.pict = '/assets/images/pictoActivities/';
	$scope.activity = [];
	$scope.activities = [];

	console.log($scope.pict);

	// $http.get(ApiFactory.api + 'search?q='+$scope.query+'&limit=10')
	$http.get(ApiFactory.api + 'keywords/'+$scope.query+'/activities')
		.then(
			function (response) {
			$scope.activity = response.data.result;
			console.log($scope.activity);
			// $scope.serviceCode = $scope.activity.service_code;
			// $scope.urlServiceCode = $scope.pict + $scope.serviceCode + ".png"; 
			

		},
			function (err) {
				console.log('Unable to retrieve data from the API :/');
		});



		$http.get(ApiFactory.api +'/activities')
		.then(
			function (response) {
			$scope.activities = response.data.result;
			
		},
			function (err) {
				console.log('Unable to retrieve data from the API :/');
		});

		$scope.getImage = function(serviceCode) {
			// body...
			return $scope.pict+serviceCode+'.png';
		}

}]);
