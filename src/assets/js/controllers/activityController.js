myApp.controller('activityController',['$scope', '$http', 'ApiFactory', '$routeParams', 'newsFactory', function($scope, $http, ApiFactory, $routeParams, newsFactory){
  $scope.contacts = [];
  $scope.ressources = [];
  $scope.photos = ApiFactory.media;
  $scope.pict = 'assets/images/pictoActivities/';
  $scope.activities = [];

  $scope.isContact = true;
  $scope.sherlook = 'http://sherlook.ctr.ibp/search?proxystylesheet=bpri&client=bpri&sort=date%3AD%3AL%3Ad1&entsp=a__bpri&wc=200&wc_mc=1&oe=UTF-8&ie=UTF-8&ud=1&getfields=*&filter=p&access=a&getfields=*&site=default_collection&q=';



  // GET the current activity

  $http.get(ApiFactory.api +'activities/' +$routeParams.id_activity)
  .then(
    function(response) {
      $scope.activity = response.data;
      console.log($scope.activity);
    },
    function(err) {
      console.log("Couldn't retrieve ressources");
  });

  $http.get(ApiFactory.api+'activities/'+$routeParams.id_activity+'/contacts?limit=100&offset=0')
  .then(
    function(response) {
      $scope.contacts = response.data.result;
    },
    function(err) {
      console.log("Couldn't retrieve contacts");
  });

    $http.get(ApiFactory.api +'activities/'+$routeParams.id_activity+'/resources?limit=100&sort=position&order=desc')
  .then(
    function(response) {
      $scope.ressources = response.data.result;
      console.log($scope.ressources);
    },
    function(err) {
      console.log("Couldn't retrieve ressources");
  });



  $scope.getImage = function(id) {
    var img = $scope.photos + id;
    return img;
  };

  $scope.getImageService = function(serviceCode) {
      var img = $scope.pict+serviceCode+'.png';
      console.log(img);
      return img;
    }

}]);
