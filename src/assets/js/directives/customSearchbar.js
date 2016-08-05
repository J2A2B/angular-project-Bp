myApp.directive('customSearchbar', ['$http','$routeParams','ApiFactory', '$timeout', '$location', function($http, $routeParams, ApiFactory, $timeout, $location) {
  return {
    restrict: 'E',
    scope: {
      suggestions: '=',
      clicked: '=',
      model: '=',
      home: '@?'
    },
    link: function(scope, elem, attrs) {
      // keeps the index of the current selected item
      scope.current = 0;
      // to know if something is selected
      scope.selected = false; 

      
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

      scope.error = function() {
      ApiFactory.buttonSearchClicked = false;
      console.log("coucou" + ApiFactory.buttonSearchClicked );
      $http.get(ApiFactory.api + 'search?q='+scope.model+'&limit=10')
        .then(
          function (response) {
              scope.activity = response.data.result;
              if (scope.activity.length === 0) {
                  $location.path('/search-error');
                  ApiFactory.buttonSearchClicked = true; 
                }
                else{
                  window.location.href = '#/search-result/' + scope.model;
                };
            },
              function (err) {
                console.log('Unable to retrieve data from the API :/');
            });
        
      };

      scope.typeahead = function() {
    		$http.get(ApiFactory.api+'search/complete?q='+scope.model+'&limit=5')
    		.then(
    			function (response) {
    			scope.suggestions = response.data.result;
    		},
    			function (err) {
    				console.log('Unable to retrieve data from the API :/');
    		});
      }
    },
    templateUrl: 'assets/templates/searchbar.html'
  };

}]);
