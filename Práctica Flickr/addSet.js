function addSet (value, photoTitle, set, photoset_id) {
    var div = $("div")[0];
    console.log(value);
    $("#"+set[0]).hide();
    jQuery.data( div, value );
    $('<div style="width:95px;display:inline-block;margin:5px;"><button id=\"search-set'+photoset_id+'\" onclick=\"searchSet(\''+photoset_id+'\')\"> Title: '+set+'</button><button id=\"detail\" onclick=\"seeDetails(\'' + value +'\',\''+ photoTitle +'\')\"><img src="'+ value +'_s.jpg"/></button</div>').appendTo('#selectedsets');
}

function searchSet (photoset_id){
    $('#info').html("<img src='spinner.gif'/>");
    $.ajax({
    url:"https://api.flickr.com/services/rest/"+
				"?api_key="+api_key+"&format=json"+
				"&method=flickr.photosets.getPhotos&photoset_id="+photoset_id+"&nojsoncallback=?"
    }).done(function(data) {
	    console.log(data);
        $('#value-input').val("Set: "+photoset_id);
        openTab(event, 'browser');
 	    $('#info').empty();
        $('#info').add("<div>");
	    var photoTitle = "";
 	    for(var i=0; i<data.photoset.photo.length; i++){
		    var photoUrl = "https://farm"+data.photoset.photo[i].farm+".staticflickr.com/"+data.photoset.photo[i].server+"/"+data.photoset.photo[i].id+"_"+data.photoset.photo[i].secret;
		    var photoId = data.photoset.photo[i].id;
		    photoTitle = data.photoset.photo[i].title;
		    console.log(photoTitle);
		    $('<img id ="'+ photoTitle +'" src="'+ photoUrl +'"/>').load(function() {
                var fun = "addFavorite(";
                let srcc = "1";															
  			    $('<div style="width:95px;display:inline-block;margin:5px;"><button id=\"detail\" onclick=\"seeDetails(\'' + this.src+'\',\''+ this.id +'\')\"><img src="'+ this.src +'_s.jpg"/></button><div  class=\'' + this.src + 'class\'><button id="'+ photoUrl +';" style="position:relative;top:50%; left:25%;margin:5px;" onclick="addFavourite(\'' + this.src + '\',\''+ this.id +'\')">Fav</button></div></div>').appendTo('#info');
	    });
 	}
     $('#info').add("</div>")
});
}
    