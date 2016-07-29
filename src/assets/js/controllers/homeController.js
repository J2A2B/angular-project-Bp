myApp.controller('homeController',['$scope', '$http', 'ApiFactory', 'newsFactory',  function($scope, $http, ApiFactory, newsFactory){

	$scope.searchbarClicked = false;
	$scope.buttonSearchClicked = false;
	$scope.suggestions = [];
	$scope.userEntry = '';

	$scope.toggleNews = function() {
		newsFactory.newsClicked = !newsFactory.newsClicked;
		console.log('yes');
	}

	// $scope.errormessage = function () {
	// 		$scope.coucou="coucou";
	// 		console.log($scope.coucou);
 //          $(function coucou () {

 //          	$('.container-error').addClass('horiz-translate');
 //    		$('.container-error').css('left');

 //          });
 //      };

}]);
