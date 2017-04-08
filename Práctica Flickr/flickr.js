$(document).ready(function(){

$("#add-button").click(function () {
    var search = $('#value-input').val();

$('#info').html("<img src='spinner.gif'/>");

 $.ajax({
 url:"https://api.flickr.com/services/rest/"+
				"?api_key="+"d6d65aeb95f3fa44bd55443d92ddb5ea"+"&format=json"+
				"&method=flickr.photos.search&text="+search+"&nojsoncallback=?"
 }).done(function(data) {
 console.log(data);
 });
});
});
