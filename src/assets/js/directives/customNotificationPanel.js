myApp.directive('ngNotification',['newsFactory','$http', 'ApiFactory', function (newsFactory, $http, ApiFactory) {
	return {
		restrict : "E",
		templateUrl: 'assets/templates/notification.html',
		link: function(scope, elem, attrs) {
			scope.notifications = [];
			scope.show = false;
			scope.filtre = "";
			scope.sizeSearch = false;

			$http.get(ApiFactory.api + 'news?limit=100&offset=0')
				.then(
					function (response) {
					scope.notifications = response.data.result;
					console.log(scope.notifications);

				},
					function (err) {
						console.log('Unable to retrieve data from the API :/');
				});

				scope.toggleNews = function() {



					// console.log(scope.show);

					scope.search = angular.element( '.container-input' ).width();
					// console.log("hey " + scope.search);

					scope.parentSearch = angular.element( '.container-input').offsetParent().width();

					// console.log("BBBBB " + scope.parentSearch);

					scope.percentSearch = 100*(scope.search/scope.parentSearch);

					if (scope.percentSearch>40) {
						scope.sizeSearch = true;
					}

					newsFactory.newsClicked = !newsFactory.newsClicked;
					scope.show = newsFactory.newsClicked;





// var parentWidth = $('#someElt').offsetParent().width();
// var percent = 100*width/parentWidth;


					// scope.search2 = angular.element( '.searchbar-centered' ).width();
					// console.log("coucou" + scope.search2);


				}


				// angular.element( '#myDivId' ).css( 'background-color', 'red' );

		}


	};


}]);
