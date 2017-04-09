 /*$(document).ready(function(){

 var photo_id= 33545149930; //Temporary

$.ajax({
 method: "POST",
 url:"https://api.flickr.com/services/rest/"+
				"?api_key="+api_key+"&format=json"+
				"&method=flickr.favorites.add&+photo_id="+photo_id+"&nojsoncallback=?",
 data: JSON.stringify({}),
 processData: false,
 headers: {
 "Content-type":"application/json"
 }
 }).done(function(data, textStatus, jqXHR) {
    console.log(textStatus+" "+jqXHR.statusCode());
 }).fail(function(data, textStatus, jqXHR){
    console.log(textStatus+" "+jqXHR.statusCode());
 });
 });*/