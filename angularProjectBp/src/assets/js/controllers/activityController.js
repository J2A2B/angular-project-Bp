myApp.controller('activityController',['$scope', '$http', function($scope, $http){
  $scope.hello = "plop";
  $scope.contacts = [];
  $scope.ressources = [];

  $http.get('http://private-anon-20c707377a-bplink.apiary-mock.com/api/activities/1/contacts')
  .then(
    function(response) {
      $scope.contacts = response.data.result;
    },
    function(err) {
      console.log("Couldn't retrieve contacts");
  });

  $http.get('http://private-anon-20c707377a-bplink.apiary-mock.com/api/activities/1/resources')
  .then(
    function(response) {
      $scope.ressources = response.data.result;
      console.log($scope.ressources);
    },
    function(err) {
      console.log("Couldn't retrieve ressources");
  });

}]);
