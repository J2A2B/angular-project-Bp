myApp.directive('customSearchbar', ['$http','$window','$routeParams','ApiFactory', '$timeout', '$location', function($http, $routeParams,$window, ApiFactory, $timeout, $location) {
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

      scope.inputClick = function(event) {
        scope.clicked = true;
        console.log(scope.clicked);
      }

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
        console.log(ApiFactory.api);
    		$http.get(ApiFactory.api+'search/complete?q='+scope.model+'&limit=100')
    		.then(
    			function (response) {
    			scope.suggestions = response.data.result;
    		},
    			function (err) {
    				console.log('Unable to retrieve data from the API :/');
    		});
      }
      // Key events handler for the autocomplete panel
      scope.keyHandler = function(event) {
        // Press enter to search
        if (event.keyCode == 13) {
          scope.model = scope.suggestions[scope.current];
          scope.error();
        }
        if (event.keyCode == 40) {
          scope.setCurrent((scope.current+1)%scope.suggestions.length);
        }
        if (event.keyCode == 38) {
          if (scope.current == 0) {
            scope.setCurrent(scope.suggestions.length-1);
          }
          else {
            scope.setCurrent(scope.current-1);
          }

        }
      }
    },
    templateUrl: 'assets/templates/searchbar.html'
  };

}]);
