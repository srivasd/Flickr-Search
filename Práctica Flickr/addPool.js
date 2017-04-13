function addPool (value, photoTitle, pool) {
    var div = $("div")[0];
    console.log(value);
    //$("#"+pool).hide();
    jQuery.data( div, value );
    $('<div style="width:95px;display:inline-block;margin:5px;"><p> URL:</p><a target="_blank" href="https://www.flickr.com'+pool+'">'+pool+'</a><button id=\"detail\" onclick=\"seeDetails(\'' + value +'\',\''+ photoTitle +'\')\"><img src="'+ value +'_s.jpg"/></button</div>').appendTo('#selectedpools');
}
   