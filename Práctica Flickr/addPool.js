function addPool (value, photoTitle, pool, group_id) {
    var div = $("div")[0];
    var poolName2 = pool.split("/");
    var idPool2 = poolName2[2];
    $("#"+idPool2).hide();
    var splitGroup_id = group_id.split("@");
    var group_id0 = splitGroup_id[0];
    var group_id1 = splitGroup_id[1];
    jQuery.data( div, value );
    $('<div class="divbrowser"><p> URL:</p><button class="btn2" id=\"search-pool'+group_id0+'\" onclick=\"searchPool(\''+group_id0+'\',\''+group_id1+'\')\">'+pool+'</button><button class="imgbrowser" id=\"detail\" onclick=\"seeDetails(\'' + value +'\',\''+ photoTitle +'\')\"><img src="'+ value +'_s.jpg"/></button></div></br>').appendTo('#selectedpools');
}

function searchPool (group_id0, group_id1){
    $('#info').html("<img src='spinner.gif'/>");
    var new_id = group_id0+"@"+group_id1;
    $.ajax({
    url:"https://api.flickr.com/services/rest/"+
				"?api_key="+api_key+"&format=json"+
				"&method=flickr.groups.pools.getPhotos&group_id="+new_id+"&nojsoncallback=?"
    }).done(function(data) {
        console.log("entra");
	    console.log(data);
        $('#value-input').val("Pool: "+new_id);
        openTab(event, 'browser');
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
  			    $('<div class="divbrowser"><button class="imgbrowser" id=\"detail\" onclick=\"seeDetails(\'' + this.src+'\',\''+ this.id +'\')\"><img src="'+ this.src +'_s.jpg"/></button><div  class=\'' + this.src + 'class\'><button class="btn" id="'+ photoUrl +';" onclick="addFavourite(\'' + this.src + '\',\''+ this.id +'\')">Fav</button></div></div>').appendTo('#info');
	    });
 	}
     $('#info').add("</div>")
});
}
   