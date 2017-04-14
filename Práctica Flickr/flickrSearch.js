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
 	$('#info').empty();
    $('#info').add("<div>");
	var photoTitle = "";
 	for(var i=0; i<data.photos.photo.length; i++){
		var photoUrl = "https://farm"+data.photos.photo[i].farm+".staticflickr.com/"+data.photos.photo[i].server+"/"+data.photos.photo[i].id+"_"+data.photos.photo[i].secret;
		var photoId = data.photos.photo[i].id;
		photoTitle = data.photos.photo[i].title;
		console.log(photoTitle);
		$('<img id ="'+ photoTitle +'" src="'+ photoUrl +'"/>').load(function() {
            var fun = "addFavorite(";
            let srcc = "1";															
  			$('<div class="divbrowser"><button class="imgbrowser" id=\"detail\" onclick=\"seeDetails(\'' + this.src+'\',\''+ this.id +'\')\"><img src="'+ this.src +'_s.jpg"/></button><div  class=\'' + this.src + 'class\'><button id="'+ photoUrl +';" class="btn" onclick="addFavourite(\'' + this.src + '\',\''+ this.id +'\')">Fav</button></div></div>').appendTo('#info');
	});
 	}
     $('#info').add("</div>")
});
});
    
    
    
$('#findByGallery').click(function(){
    var gallery = "house";
    $('#info').html("<img src='spinner.gif'/>");
    $.ajax({
        url:"https://api.flickr.com/services/rest/"+
				"?api_key="+api_key+"&format=json"+
				"&method=flickr.photos.search&in_gallery="+gallery+"&nojsoncallback=?"
        
    }).done(function(data){
        openTab(event, 'browser');
        $('#info').add("<div>");
        var photoTitle = "";
        for(var i=0; i< data.photos.photo.length;i++){
            var photoUrl = "https://farm"+data.photos.photo[i].farm+".staticflickr.com/"+data.photos.photo[i].server+"/"+data.photos.photo[i].id+"_"+data.photos.photo[i].secret;
            var photoId = data.photos.photo[i].id;
            photoTitle = data.photos.photo[i].title;
            $('<img id ="'+ photoTitle +'" src="'+ photoUrl +'"/>').load(function(){
                
            var fun = "addFavorite(";
            let srcc = "1";															
  			$('<div class="divbrowser"><button id=\"detail\" onclick=\"seeDetails(\'' + this.src+'\',\''+ this.id +'\')\"><img src="'+ this.src +'_s.jpg"/></button><div  class=\'' + this.src + 'class\'><button id="'+ photoUrl +';" onclick="addFavourite(\'' + this.src + '\',\''+ this.id +'\')">Fav</button></div></div>').appendTo('#info');
            });
            
        }
        $('#info').add("</div>")
    });
    
});
});

  