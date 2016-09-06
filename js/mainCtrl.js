angular.module( 'quoteBook' ).controller( 'mainCtrl', function( $scope, dataService ) {

  $scope.quotes = dataService.getData();

  $scope.addNewQuote = function( quoteObj ) {
    if ( dataService.addData( quoteObj ) ) {
      $scope.text = '';
      $scope.author = '';
    }
  };

  $scope.deleteMe = function( textToRemove ) {
    dataService.removeData( textToRemove );
  };

} )
