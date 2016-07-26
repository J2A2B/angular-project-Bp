myApp.directive('customSearchbar',['$http','$routeParams', function($http, $routeParams) {
  return {
    restrict: 'E',
    scope: {
      suggestions: '=',
      clicked: '=',
      model: '=',
      typeahead: '&',
      home: '@?'
    },
    link: function(scope, elem, attrs) {
      // keeps the index of the current selected item
      scope.current = 0;
      // to know if something is selected
      scope.selected = false;
      // tracks if the search button has been pressed
      scope.buttonSearchClicked;

      console.log(scope.buttonSearchClicked);
      // tracks if an item is the current item
      scope.isCurrent = function(index) {
        return index === scope.current;
      };
      // sets the current item
      scope.setCurrent = function (index) {
        scope.current = index;
      };

      scope.onSelect = function (item) {
        scope.model = item;
        scope.current = 0;
        scope.selected = true;
      };

      scope.activity = [];

    //   $http.get('http://private-anon-d042e0f724-bplink.apiary-mock.com/api/search?q='+scope.model+'&limit=10')
    //   .then(
    //   function (response) {
    //   scope.activity = response.data.result;
    // },
    //   function (err) {
    //     console.log('Unable to retrieve data from the API :/');
    // });
      scope.error = function(){
       console.log(scope.buttonSearchClicked);

        if (scope.activity.length == 0) {
          console.log(scope.activity.length);
          scope.buttonSearchClicked = true;
          
        }
        else{
          window.location.href = "#/search-result/{{model}}";
        };
      }
      

    },
    templateUrl: 'assets/templates/searchbar.html'
  };
}]);
