myApp.directive('ngNav',['newsFactory','$http', 'ApiFactory','$location', '$window', '$routeParams', function (newsFactory, $http, ApiFactory,$location,$window,$routeParams) {
	return {
		restrict : "E",
		templateUrl: 'assets/templates/nav.html',
		link: function(scope, elem, attrs) {
			scope.countNews = 0;
			scope.contactActivity = [];

			if ($location.url() == '/contact/'+$routeParams.id_contact) {
				scope.back = true;
			}

			$http.get(ApiFactory.api + 'news?limit=100&offset=0')
				.then(
					function (response) {
					scope.countNews = response.data.count;
				},
					function (err) {
						console.log('Unable to retrieve data from the API :/');
				});

			scope.goBack = function() {
				$window.history.back();
			}
		}
	};
}]);
