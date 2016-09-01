myApp.directive('ngNav',['newsFactory','$http', 'ApiFactory','$location', '$routeParams', function (newsFactory, $http, ApiFactory,$location,$routeParams) {
	return {
		restrict : "E",
		templateUrl: 'assets/templates/nav.html',
		link: function(scope, elem, attrs) {
			scope.countNews = 0;
			scope.contactActivity = [];
			var absUrl = $location.url();
			scope.back = false;


			

			$http.get(ApiFactory.api + 'news?limit=100&offset=0')
				.then(
					function (response) {
					scope.countNews = response.data.count;

				},
					function (err) {
						console.log('Unable to retrieve data from the API :/');
				});


			$http.get(ApiFactory.api +'contacts/' + $routeParams.id_contact)
		.then(
			
			function (response) {

			scope.contactActivity = response.data.id_contact;

			if (absUrl === "/contact/" + scope.contactActivity ) {
				scope.back = true;
				console.log(scope.back);
			};


			
			
		},
			function (err) {
				console.log('Unable to retrieve data from the API :/');
		});





		}
	};
}]);
