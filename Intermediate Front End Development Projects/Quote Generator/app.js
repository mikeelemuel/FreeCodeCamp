function randomQuote() {
 $.ajax({
      url: "https://api.forismatic.com/api/1.0/",
      jsonp: "jsonp",
      dataType: "jsonp",
      data: {
        method: "getQuote",
        lang: "en",
        format: "jsonp"
      },
      success: function(quote) {
        $('#quote').html('&ldquo;'+quote.quoteText+'&rdquo;')
        $('#author').html("-"+quote.quoteAuthor)
      }
    });
}

randomQuote();
$("#tweet").click(function() { /* take the text FROM #quote for twitter */
  var url = 'https://twitter.com/intent/tweet?url=https://www.codepen.io/Kornil/full/VeqGBj&text=%22' + document.getElementById('quote').innerHTML;
  window.open(url, 'twitter');

});
//Click on the button to generate another random quote

$('#getQuote').click(function() {

    randomQuote();


  });
