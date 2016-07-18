myApp.controller('testController',['$scope', '$http', function($scope, $http){
	
	$scope.searchbarClicked = false;
	$scope.data;

	$scope.userEntry = '';

	$scope.autocomplete = function() {
		$http.get('http://private-anon-d042e0f724-bplink.apiary-mock.com/api/search/complete?q='+$scope.userEntry+'&limit=5')
		.then(
			function (response) {
			$scope.data = response.data.result;
			console.log($scope.data);
		}, 
			function (err) {
				console.log('lol nope');
		});

	}


	$scope.toggleSearchbarClicked = function(){
    	$scope.searchbarClicked = true;
  	};


}]);