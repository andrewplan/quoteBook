angular.module( 'quoteBook' ).service( 'dataService', function() {
  this.getData = function() {
    return quotes;
  };

  this.addData = function( data ) {
    if ( data.text && data.author ) {
      quotes.unshift( data );
      return true;
    }
    return false;
  };

  this.removeData = function( textToRemove ) {
    // quotes.forEach( function( index ) {
    //   if ( quotes[ index ].text === textToRemove ) {
    //     quotes.splice( index, 1 );
    //   }
    // });
    for ( var i = 0; i < quotes.length; i++ ) {
      if ( quotes[ i ].text.toLowerCase() === textToRemove.toLowerCase() ) {
        quotes.splice( i, 1 );
      }
    }

  };

  this.getDataFromCookies = function( arr ) {
    quotes = arr;
  };

  var quotes = [
    {
        text: 'For a songwriter, you don\'t really go to songwriting school; you learn by listening to tunes. And you try to understand them and take them apart and see what they\'re made of, and wonder if you can make one, too.'
      , author: 'Tom Waits'
    } ,
    {
        text: 'My strength was in singing and songwriting, which was a new discovery for me when I was 18. And I decided if I pursued songwriting, which is what was closest to my heart, then there would be no competition. I would just live my life being myself and living my dream.'
      , author: 'Jason Mraz'
    } ,
    {
        text: 'If anyone asks me about songwriting, I guess I\'d say that you just gotta do it.'
      , author: 'Alex Turner (Arctic Monkeys)'
    } ,
    {
        text: 'My style of songwriting is influenced by cinema. I\'m a frustrated filmmaker. A fan once said to me, "Girl, you make me see pictures in my head!" and I took that as a great compliment. That\'s exactly my intention.'
      , author: 'Joni Mitchell'
    } ,
    {
        text: 'My songwriting is like extending a hand to the listener.'
      , author: 'Dave Grohl (Foo Fighters)'
    } ,
    {
        text: 'I think songwriting is the ultimate form of being able to make anything that happens in your life productive.'
      , author: 'Taylor Swift'
    } ,
    {
        text: 'No one can attack you when you\'re songwriting; it\'s you and a song, which is a great place to be.'
      , author: 'Gin Wigmore'
    } ,
    {
        text: 'I like drawing people in the airport or on the bus or in venues. I like catching people in the moment. It\'s a similar inspiration for me in terms of songwriting.'
      , author: 'James Bay'
    } ,
  ];
} )
