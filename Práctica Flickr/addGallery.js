function addGallery(value, photoTitle, gallery_id){
    var div = $("div")[0];
    console.log(value);
    var titleMod = photoTitle.split(" ");
    var title0 = titleMod[0];
    $("#"+title0).hide();
    jQuery.data( div, value );
    $('<div style="width:95px;display:inline-block;margin:5px;"><button id=\"findByGallery'+gallery_id+'\" onclick=\"searchGallery(\''+gallery_id+'\')\"> Title: '+photoTitle+'</button><button id=\"detail\" onclick=\"seeDetails(\'' + value +'\',\''+ photoTitle +'\',\''+ gallery_id +'\')\"><img src="'+ value +'_s.jpg"/></button</div><br>').appendTo('#selectedgalleries');
}

function searchGallery(gallery_id){
    $('#info').html("<img src='spinner.gif'/>");
    $.ajax({
        url:"https://api.flickr.com/services/rest/"+
				"?api_key="+api_key+"&format=json"+
				"&method=flickr.galleries.getPhotos&gallery_id="+gallery_id+"&nojsoncallback=?"
        
    }).done(function(data){
        console.log(data);
        openTab(event, 'browser');
        $('#info').empty();
        $('#value-input').val("Gallery: "+gallery_id);
        $('#info').add("<div>");
        var photoTitle = "";
        for(var i=0; i< data.photos.photo.length;i++){
            var photoUrl = "https://farm"+data.photos.photo[i].farm+".staticflickr.com/"+data.photos.photo[i].server+"/"+data.photos.photo[i].id+"_"+data.photos.photo[i].secret;
            var photoId = data.photos.photo[i].id;
            photoTitle = data.photos.photo[i].title;
            $('<img id ="'+ photoTitle +'" src="'+ photoUrl +'"/>').load(function(){
                
            var fun = "addFavorite(";
            let srcc = "1";															
  			$('<div style="width:95px;display:inline-block;margin:5px;"><button id=\"detail\" onclick=\"seeDetails(\'' + this.src+'\',\''+ this.id +'\')\"><img src="'+ this.src +'_s.jpg"/></button><div  class=\'' + this.src + 'class\'><button id="'+ photoUrl +';" style="position:relative;top:50%; left:25%;margin:5px;" onclick="addFavourite(\'' + this.src + '\',\''+ this.id +'\')">Fav</button></div></div>').appendTo('#info');
            });
            
        }
        $('#info').add("</div>")
    });
}