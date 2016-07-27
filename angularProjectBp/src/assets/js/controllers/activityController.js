myApp.controller('activityController',['$scope', '$http', 'ApiFactory', function($scope, $http, ApiFactory){
  $scope.hello = "plop";
  $scope.contacts = [];
  $scope.ressources = [];

  $http.get(ApiFactory.api+'activities/1/contacts')
  .then(
    function(response) {
      $scope.contacts = response.data.result;
    },
    function(err) {
      console.log("Couldn't retrieve contacts");
  });

  $http.get(ApiFactory.api +'activities/1/resources')
  .then(
    function(response) {
      $scope.ressources = response.data.result;
      console.log($scope.ressources);
    },
    function(err) {
      console.log("Couldn't retrieve ressources");
  });

}]);
