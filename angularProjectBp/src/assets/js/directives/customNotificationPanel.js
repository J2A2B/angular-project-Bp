myApp.directive('ngNotification', function () {
	return {
		restrict : "E",
		templateUrl: 'assets/templates/notification.html',
		scope: {
			notifications: '=',
			closeNews: '@'
		},
		link: function(scope, elem, attrs) {
			
		
		}
	}
});