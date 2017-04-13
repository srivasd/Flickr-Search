function addSet (value, photoTitle, set) {
    var div = $("div")[0];
    //var value = $(this).attr("id");
    console.log(value);
    $("#"+set[0]).hide();
    jQuery.data( div, value );
    $('<div style="width:95px;display:inline-block;margin:5px;"><p> Title: '+set+'</p><button id=\"detail\" onclick=\"seeDetails(\'' + value +'\',\''+ photoTitle +'\')\"><img src="'+ value +'_s.jpg"/></button</div>').appendTo('#selectedsets');
}
    