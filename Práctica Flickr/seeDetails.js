function seeDetails (value, photoTitle) { 
        var splitUrl = value.split("/");   
        var splitUrl2 = splitUrl[4].split("_");
        var id = splitUrl2[0];
         $.ajax({
                url:"https://api.flickr.com/services/rest/"+
			"?api_key="+api_key+"&format=json"+
			"&method=flickr.galleries.getListForPhoto&photo_id="+id+"&nojsoncallback=?"
        }).done(function(data) {
                var galleries = data;
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
                        $('<div><div><img class="imgdetail" src="'+ value +'_b.jpg"/></div></div>').appendTo('#infoDetails');               
                        if(photoTitle){
                                $('<p>'+photoTitle+'</p>').appendTo('#description'); 
                        }
                        if(galleries.galleries.gallery.length!==0){
                                for(var i=0; i<galleries.galleries.gallery.length; i++){   
                                        $('<p>'+galleries.galleries.gallery[0].title+'</p><button class="btn2" id="'+ galleries.galleries.gallery[0].title +';" onclick="addGallery(\'' + galleries.galleries.gallery[0].title + '\')">Add Gallery</button>').appendTo('#galleries');
                                } 
                        }else{
                                $('<p>No gallery available</p>').appendTo('#galleries'); 
                        }
                        
                        if(groups.set){
                                $('<h3>Sets</h3>').appendTo('#groups'); 
                                for(var i=0; i<groups.set.length; i++){   
                                        var photoset_id = groups.set[i].id;
                                        $('<button class="btn2" id=\"search-set'+photoset_id+'\" onclick=\"searchSet(\''+photoset_id+'\')\"> Title: '+groups.set[i].title+'</button><button class="btn2"  id="'+ groups.set[i].title[0] +'"  onclick="addSet(\'' + value + '\',\''+ photoTitle +'\',\''+ groups.set[i].title +'\',\''+ photoset_id +'\')">Add Set</button><br>').appendTo('#groups');
                                } 
                        }else{
                                $('<h3>No set available</h3>').appendTo('#groups'); 
                        }
                        if(groups.pool){
                                $('<h3>Pools</h3>').appendTo('#groups');
                                for(var i=0; i<groups.pool.length; i++){   
                                        var poolName1 = groups.pool[i].url.split("/");
                                        var idPool = poolName1[2];
                                        var splitGroup_id = groups.pool[i].id.split("@");
                                        var group_id0 = splitGroup_id[0];
                                        var group_id1 = splitGroup_id[1];
                                        $('<div><button class="btn2" id=\"search-pool'+group_id0+'\" onclick=\"searchPool(\''+group_id0+'\',\''+group_id1+'\')\">'+groups.pool[i].url+'</button></div><button class="btn2" id="'+ idPool +'"  onclick="addPool(\'' + value + '\',\''+ photoTitle +'\',\''+ groups.pool[i].url +'\',\''+ groups.pool[i].id +'\')">Add Pool</button>').appendTo('#groups');
                                } 
                        }else{
                                $('<h3>No pool available</h3>').appendTo('#groups'); 
                        }
                        openTab(event, 'infoDetail');
                });
        });                            
        
}