myApp.directive('ngNotification', function () {
	return {
		scope: {
			notifications: "="
		},
		restrict : "E",
		templateUrl: 'assets/templates/notification.html'
	}
})