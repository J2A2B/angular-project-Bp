myApp.controller('search-errorController', ['$scope', '$http', 'ApiFactory', '$timeout', 'newsFactory', function($scope, $http, ApiFactory, $timeout, newsFactory){
	$timeout(function(){
	        $scope.buttonSearchClicked = ApiFactory.buttonSearchClicked || false;
	}, 500);
}]);
