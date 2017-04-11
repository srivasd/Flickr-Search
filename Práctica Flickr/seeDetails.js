function seeDetails (value, photoTitle) {
        console.log(value);  
        var splitUrl = value.split("/");   
        var splitUrl2 = splitUrl[4].split("_");
        var id = splitUrl2[0];
        console.log(id); 
         $.ajax({
                url:"https://api.flickr.com/services/rest/"+
			"?api_key="+api_key+"&format=json"+
			"&method=flickr.galleries.getListForPhoto&photo_id="+id+"&nojsoncallback=?"
        }).done(function(data) {
                var galleries = data;
                console.log(galleries);
	        $.ajax({
                        url:"https://api.flickr.com/services/rest/"+
			        "?api_key="+api_key+"&format=json"+
			        "&method=flickr.photos.getAllContexts&photo_id="+id+"&nojsoncallback=?"
                }).done(function(data) {
                        var groups = data;
	                console.log(groups);
                        $( "#infoDetails" ).empty();
                        $( "#galleries" ).empty();
                        $( "#groups" ).empty();
                        $( "#description" ).empty();
                        $('<div col-md-9><div style="width:95px;display:inline-block;margin:5px;"><img src="'+ value +'_b.jpg"/></div></div>').appendTo('#infoDetails');               
                        if(photoTitle){
                                $('<p>'+photoTitle+'</p>').appendTo('#description'); 
                        }
                        if(galleries.galleries.gallery.length!==0){
                                for(var i=0; i<galleries.galleries.gallery.length; i++){   
                                        $('<p>'+galleries.galleries.gallery[0].title+'</p>').appendTo('#galleries'); 
                                } 
                        }else{
                                $('<p>No gallery available</p>').appendTo('#galleries'); 
                        }
                        
                        if(groups.set){
                                $('<h3>Sets</h3>').appendTo('#groups'); 
                                for(var i=0; i<groups.set.length; i++){   
                                        $('<p> Title: '+groups.set[i].title+'</p>').appendTo('#groups'); 
                                } 
                        }else{
                                $('<h3>No set available</h3>').appendTo('#groups'); 
                        }
                        if(groups.pool){
                                $('<h3>Pools</h3>').appendTo('#groups');
                                for(var i=0; i<groups.pool.length; i++){   
                                        $('<p>Title: '+groups.pool[i].title+'</p>').appendTo('#groups'); 
                                        $('<p>URL: '+groups.pool[i].url+'</p>').appendTo('#groups');                                        
                                } 
                        }else{
                                $('<h3>No pool available</h3>').appendTo('#groups'); 
                        }
                        openTab(event, 'infoDetail');
                });
        });                            
        
}