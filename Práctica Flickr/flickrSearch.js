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
 	for(var i=0; i<data.photos.photo.length; i++){
		var photoUrl = "https://farm"+data.photos.photo[i].farm+".staticflickr.com/"+data.photos.photo[i].server+"/"+data.photos.photo[i].id+"_"+data.photos.photo[i].secret;
		$('<img src="'+ photoUrl +'"/>').load(function() {
  			$('<button id=\'detail\'><img src="'+ this.src +'_s.jpg"/></button>').appendTo('#info');
			$('#detail').click(function () {
 
 			var photo_id= 33545149930; //Temporary
			//GET ALL CONTEXTS
 			$.ajax({
 				url:"https://api.flickr.com/services/rest/"+
					"?api_key="+api_key+"&format=json"+
					"&method=flickr.photos.getAllContexts&photo_id="+photo_id+"&nojsoncallback=?"
 			}).done(function(data) {
				console.log(data);
			});
			//GET LIST FOR PHOTO
			$.ajax({
 				url:"https://api.flickr.com/services/rest/"+
					"?api_key="+api_key+"&format=json"+
					"&method=flickr.galleries.getListForPhoto&photo_id="+photo_id+"&nojsoncallback=?"
 			}).done(function(data) {
				console.log(data);
		});
		});
	});
 	}
});
});
});

