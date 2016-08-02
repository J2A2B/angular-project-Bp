myApp.directive('ngNav',['newsFactory','$http', 'ApiFactory', function (newsFactory, $http, ApiFactory) {
	return {
		restrict : "E",
		templateUrl: 'assets/templates/nav.html',
		link: function(scope, elem, attrs) {
			scope.countNews = 0;

			$http.get(ApiFactory.api + 'news?limit=10&offset=0')
				.then(
					function (response) {
					scope.countNews = response.data.count;
					
					
				},
					function (err) {
						console.log('Unable to retrieve data from the API :/');
				});

		}
	};
}]);
