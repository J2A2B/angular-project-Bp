myApp.controller('activityController',['$scope', '$http', 'ApiFactory', '$routeParams', 'newsFactory', function($scope, $http, ApiFactory, $routeParams, newsFactory){
  $scope.contacts = [];
  $scope.ressources = [];
  $scope.photos = ApiFactory.media;
  console.log($scope.photos);

  $http.get(ApiFactory.api+'activities/'+$routeParams.id_activity+'/contacts')
  .then(
    function(response) {
      $scope.contacts = response.data.result;
      console.log($scope.contacts.bp_id);
    },
    function(err) {
      console.log("Couldn't retrieve contacts");
  });

  $http.get(ApiFactory.api +'activities/'+$routeParams.id_activity+'/resources')
  .then(
    function(response) {
      $scope.ressources = response.data.result;

    },
    function(err) {
      console.log("Couldn't retrieve ressources");
  });

  $scope.getImage = function(id) {
    // body...
    var img = $scope.photos + id;
    console.log(img);
    return img;
  };

}]);
