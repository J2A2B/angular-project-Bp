myApp.controller('activityController',['$scope', '$http', 'ApiFactory', '$routeParams', 'newsFactory', function($scope, $http, ApiFactory, $routeParams, newsFactory){
  $scope.contacts = [];
  $scope.ressources = [];
  $scope.photos = ApiFactory.media;
  $scope.pict = 'assets/images/pictoActivities/';
  $scope.activities = [];

  $scope.isContact = true;
  $scope.sherlook = 'http://sherlook.ctr.ibp/search?site=default_collection&proxystylesheet=bpri&client=bpri&q=';

  $http.get(ApiFactory.api+'activities/'+$routeParams.id_activity+'/contacts')
  .then(
    function(response) {
      $scope.contacts = response.data.result;

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

  $http.get(ApiFactory.api +'activities/' +$routeParams.id_activity)
  .then(
    function(response) {
      $scope.activity = response.data;
      console.log($scope.activity);
    },
    function(err) {
      console.log("Couldn't retrieve ressources");
  });


  $scope.getImage = function(id) {

    var img = $scope.photos + id;
    return img;
  };

  $scope.getImageService = function(serviceCode) {

      return $scope.pict+serviceCode+'.png';
    }

}]);
