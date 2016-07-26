myApp.controller('homeController',['$scope', '$http', function($scope, $http){

	$scope.searchbarClicked = false;
	$scope.buttonSearchClicked = false;
	$scope.suggestions = [];
	$scope.userEntry = '';

	$scope.typeahead = function() {
		$http.get('http://private-anon-d042e0f724-bplink.apiary-mock.com/api/search/complete?q='+$scope.userEntry+'&limit=5')
		.then(
			function (response) {
			$scope.suggestions = response.data.result;
		},
			function (err) {
				console.log('Unable to retrieve data from the API :/');
		});
	};



	// $scope.errormessage = function () {
	// 		$scope.coucou="coucou";
	// 		console.log($scope.coucou);
 //          $(function coucou () {
            
 //          	$('.container-error').addClass('horiz-translate');
 //    		$('.container-error').css('left');

 //          });



          
 //      };



}]);
