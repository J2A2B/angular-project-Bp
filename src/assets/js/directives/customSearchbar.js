myApp.directive('customSearchbar', ['$http','$window','$routeParams','ApiFactory', '$timeout', '$location','orderByFilter', function($http, $window, $routeParams, ApiFactory, $timeout, $location, orderBy) {
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
      // id of selected keyword
      scope.id_keyword = '';

      scope.inputClick = function(event) {
        scope.clicked = true;
      }

      // tracks if an item is the current item
      scope.isCurrent = function(index) {
        return index === scope.current;
      };
      // sets the current item
      scope.setCurrent = function (index) {
        console.log('current is: '+ index);
        scope.current = index;
        scope.id_keyword = scope.suggestions[scope.current].id_keyword;
        scope.model = scope.suggestions[scope.current].word;
      };

      scope.onSelect = function (item) {
        // OLD SCHOOL
        // scope.model = item;
        scope.model = item.word;
        scope.id_keyword = item.id_keyword;
        scope.current = 0;
        scope.selected = true;
        scope.error();
      };

      scope.error = function() {
      ApiFactory.buttonSearchClicked = false;

      $http.get(ApiFactory.api + 'keywords/'+scope.id_keyword+'/activities')
        .then(
          function (response){
              scope.activity = response.data.result;
              if (scope.activity.length === 0) {
                  $location.path('/search-error');
                  ApiFactory.buttonSearchClicked = true;
                }
                else{
                  window.location.href = '#/search-result/' + scope.id_keyword;
                };
            },
              function (err) {
                console.log('Unable to retrieve data from the API :/');
            });

      };

      scope.typeahead = function() {
    		$http.get(ApiFactory.api+'search/complete?q='+scope.model+'&limit=100')
    		.then(
    			function (response) {
    			scope.suggestions = response.data.result;
          scope.suggestions = orderBy(scope.suggestions, 'word', false);
          console.log(scope.suggestions);
    		},
    			function (err) {
    				console.log('Unable to retrieve data from the API :/');
    		});
      }

      // Key events handler for the autocomplete panel
      scope.keyHandler = function(event) {
        // Press enter to search
        if (event.keyCode == 13) {
          if(scope.suggestions[scope.current]) {
            scope.model = scope.suggestions[scope.current].word;
            scope.id_keyword = scope.suggestions[scope.current].id_keyword;
          }
          else {
            scope.model = '';
            scope.id_keyword = -1;
          }
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
