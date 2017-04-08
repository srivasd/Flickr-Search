$(document).ready(function(){

$('#add-button').click(function () {
    var search = $('#value-input').val();
	var api_key = "d6d65aeb95f3fa44bd55443d92ddb5ea";

$('#info').html("<img src='spinner.gif'/>");

 $.ajax({
 url:"https://api.flickr.com/services/rest/"+
				"?api_key="+api_key+"&format=json"+
				"&method=flickr.photos.search&text="+search+"&nojsoncallback=?"
 }).done(function(data) {
 	$('#info').empty()
 	for(var i=0; i<10; i++){
		 var photoUrl = "https://farm"+data.photos.photo[i].farm+".staticflickr.com/"+data.photos.photo[i].server+"/"+data.photos.photo[i].id+"_"+data.photos.photo[i].secret+"_m.jpg";
		$('<img src="'+ photoUrl +'">').load(function() {
  			$(this).appendTo('#info');
		});
 	}
});
});
});

