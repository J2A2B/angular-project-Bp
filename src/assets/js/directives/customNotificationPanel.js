myApp.directive('ngNotification',['newsFactory','$http', 'ApiFactory', function (newsFactory, $http, ApiFactory) {
	return {
		restrict : "E",
		templateUrl: 'assets/templates/notification.html',
		link: function(scope, elem, attrs) {
			scope.notifications = [];
			scope.show = false;
			$http.get(ApiFactory.api + 'news?limit=10&offset=0')
				.then(
					function (response) {
					scope.notifications = response.data.result;
				},
					function (err) {
						console.log('Unable to retrieve data from the API :/');
				});

				scope.toggleNews = function() {
					newsFactory.newsClicked = !newsFactory.newsClicked;
					scope.show = newsFactory.newsClicked;
					console.log('no');
				}

		}
	};
}]);
