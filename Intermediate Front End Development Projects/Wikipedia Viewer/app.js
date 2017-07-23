$(document).ready(function() {
  $("#getResult").click(function() {
    $("ul").empty();
    var search = $("#search").val();
    $.ajax({
      type: 'GET',
      url: 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=' + search,
      dataType: 'jsonp',
      success: function(result) {
        var obj = result.query.pages;
        for (var prop in obj) {
          $("ul").append('<a target="_blank" href="https://en.wikipedia.org/wiki?curid=' + obj[prop].pageid + '">' +
          '<div class="jumbotron"><li><h3 class="title ">' + obj[prop].title +
          '</h3><p class="text">' + obj[prop].extract +
          '</p></li></a></div>');
        }
      }
    });
  });

  $("#search").keypress(function(e) {
    if (e.which == 13) {
      $("#getResult").click();
    }
  });


  $('#getResult, #randomResult').click(function() {
    $(this).blur();
  });
});
