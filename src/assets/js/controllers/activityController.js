myApp.controller('activityController',['$scope', '$http', 'ApiFactory', '$routeParams', 'newsFactory', function($scope, $http, ApiFactory, $routeParams, newsFactory){
  $scope.hello = "plop";
  $scope.contacts = [];
  $scope.ressources = [
  ];

  $http.get(ApiFactory.api+'activities/'+$routeParams.id_activity+'/contacts')
  .then(
    function(response) {
      $scope.contacts = response.data.result;
      console.log($scope.contacts);
    },
    function(err) {
      console.log("Couldn't retrieve contacts");
  });

  $http.get(ApiFactory.api +'activities/'+$routeParams.id_activity+'/resources')
  .then(
    function(response) {
      $scope.ressources = response.data.result;
      console.log($scope.ressources);

    },
    function(err) {
      console.log("Couldn't retrieve ressources");
  });

}]);
