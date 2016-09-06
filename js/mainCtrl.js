angular.module( 'quoteBook' ).controller( 'mainCtrl', function( $scope, $cookies, dataService ) {

  // $cookies.remove( 'quotesArray' );

  $scope.quotes = dataService.getData();

  $scope.getCookies = function() {
    $scope.quotes = $cookies.getObject( 'quotesArray' );
    // console.log( $cookies.getObject( 'quotesArray' ) );
    // console.log( $scope.quotes );
  };

  $scope.setCookies = function() {
    var expDate = new Date( 2017, 1, 1 );
    $cookies.putObject( 'quotesArray', $scope.quotes, { expires: expDate } );
    // console.log( $cookies.getObject( 'quotesArray' ) );
    // console.log( $scope.quotes );
  };

  if ( $cookies.getObject( 'quotesArray' ) ) {
    $scope.getCookies();
  }

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
