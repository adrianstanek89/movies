$(document).ready(function(){
    
    $("#searchMovies").click(function(){
       $(this).addClass("rubberBand animated");
        return getMovies();
    });
     $("#inputMovies").keyup(function(e) {
    if(e.keyCode == 13) {
          return getMovies();
     }
}); 
    
});


function getMovies(){
    var inMovies = $("#inputMovies").val();
    var seMovies = $("#searchMovies").val();
    var apiKey   = "46ba6546f1215981a70723fa97097e9b";
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.themoviedb.org/3/search/movie?api_key=" + apiKey  + "&query=+" + inMovies,
        "method": "GET",
        "headers": {},
        "data": "{}"
        
}
    var imgMovies= "https://image.tmdb.org/t/p/w500/${path}"

    if(inMovies != ''){
        
        $.ajax(settings).done(function (response) {
            console.log(response);
            
             var header = '<div class="blue" role="alert"><h4>Movies: ' + results[{title}]  + '</h4></div>'
             
             
             
             
             
            $("#header").html(header);
            
            
            });
        
    }
    
}



