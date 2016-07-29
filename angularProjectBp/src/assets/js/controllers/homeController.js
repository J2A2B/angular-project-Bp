myApp.controller('homeController',['$scope', '$http', 'ApiFactory', 'newsFactory',  function($scope, $http, ApiFactory, newsFactory){

	$scope.searchbarClicked = false;
	$scope.buttonSearchClicked = false;
	$scope.suggestions = [];
	$scope.userEntry = '';

	$scope.toggleNews = function() {
		newsFactory.newsClicked = !newsFactory.newsClicked;
		console.log('yes');
	}

	$scope.typeahead = function() {
		$http.get(ApiFactory.api+'search/complete?q='+$scope.userEntry+'&limit=5')
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
