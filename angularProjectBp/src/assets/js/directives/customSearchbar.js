myApp.directive('customSearchbar', function() {
  return {
    restrict: 'E',
    scope: {
      suggestions: '=',
      clicked: '=',
      model: '=',
      typeahead: '&'
    },
    link: function(scope, elem, attrs) {
      console.log(scope.suggestions);
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
    },
    templateUrl: 'assets/templates/searchbar.html'
  };
});
