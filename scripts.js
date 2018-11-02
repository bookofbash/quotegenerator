$(document).ready(function() {
  //colors for background change
  var colors = ["#50d143", "#a868a1", "#d43450","#750d14", "#ea1a28", "#3a868a", "#0750d1", "#83a868", "#c1d434", "#f0750d", "#783a86", "#c783a8", "#63c1d4", "#6158f0", "#30ac78", "#e9a4c2"];
  $("#getQuote").on("click", function() {
   //gets api and appends to html elements
    $.getJSON("https://cors-anywhere.herokuapp.com/http://quotes.stormconsultancy.co.uk/random.json?dataType='jsonp'&type='GET'", function(json) {
      var randomQuoteString = json.quote;
      var authorString = JSON.stringify(json.author);
      $(".message").html(JSON.stringify(json.quote));
      $(".author").html(JSON.parse(authorString));
      $('a').on('click', function() {
        $(this).attr('href', 'https://twitter.com/intent/tweet?text=' + encodeURI('"'+randomQuoteString +'"' +  ' -' + json.author ));
      });
    });
    //changes background color
    setTimeout( function(){
     	var color = colors.shift();
	    colors.push(color);
      $("body").css("background-color", color);
      }, 500);
  });
});



//$("body").css({"background-color": color, "transition":"background-color 500ms ease"});
