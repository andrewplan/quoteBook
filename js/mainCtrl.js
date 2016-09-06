angular.module( 'quoteBook' ).controller( 'mainCtrl', function( $scope, $cookies, dataService ) {

  // $cookies.remove( 'quotesArray' );

  $scope.getCookies = function() {
    dataService.getDataFromCookies( $cookies.getObject( 'quotesArray' ) );
    // $scope.quotes = $cookies.getObject( 'quotesArray' );
  };

  $scope.setCookies = function() {
    var expDate = new Date( 2017, 1, 1 );
    $cookies.putObject( 'quotesArray', $scope.quotes, { expires: expDate } );
  };

  if ( $cookies.getObject( 'quotesArray' ) ) {
    $scope.getCookies();
  }

  $scope.quotes = dataService.getData();

  $scope.addNewQuote = function( quoteObj ) {
    if ( dataService.addData( quoteObj ) ) {
      $scope.text = '';
      $scope.author = '';
    }
    $scope.setCookies();
  };

  $scope.deleteMe = function( textToRemove ) {
    dataService.removeData( textToRemove );
    $scope.setCookies();
  };

} )
