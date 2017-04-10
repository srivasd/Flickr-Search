$(document).ready(function(){

$('#add-button').click(function () {
    var search = $('#value-input').val();

$('#info').html("<img src='spinner.gif'/>");

 $.ajax({
 url:"https://api.flickr.com/services/rest/"+
				"?api_key="+api_key+"&format=json"+
				"&method=flickr.photos.search&text="+search+"&nojsoncallback=?"
 }).done(function(data) {
	console.log(data);
 	$('#info').empty()
    $('#info').add("<div>")
 	for(var i=0; i<data.photos.photo.length; i++){
		var photoUrl = "https://farm"+data.photos.photo[i].farm+".staticflickr.com/"+data.photos.photo[i].server+"/"+data.photos.photo[i].id+"_"+data.photos.photo[i].secret;
		$('<img src="'+ photoUrl +'"/>').load(function() {
            var fun = "addFavorite(";
            let srcc = "1";																		
  			$('<div style="width:95px;display:inline-block;margin:5px;"><button id=\"detail\" onclick=\"seeDetails(\'' + this.src + '\')\"><img src="'+ this.src +'_s.jpg"/></button><button id="'+ photoUrl +';" style="position:relative;top:50%; left:25%;margin:5px;" onclick="addFavourite(\'' + this.src + '\')">Fav</button></div>').appendTo('#info');
	});
 	}
     $('#info').add("</div>")
});
});
});

  