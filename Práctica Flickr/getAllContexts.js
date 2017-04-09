 $(document).ready(function(){
 $('#detail').click(function () {
 
 var photo_id= 33545149930; //Temporary

 $.ajax({
 url:"https://api.flickr.com/services/rest/"+
				"?api_key="+api_key+"&format=json"+
				"&method=flickr.photos.getAllContexts&photo_id="+photo_id+"&nojsoncallback=?"
 }).done(function(data) {
	console.log(data);
});
});
});