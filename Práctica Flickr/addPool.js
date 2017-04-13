function addPool (value, photoTitle, pool) {
    var div = $("div")[0];
    console.log(value);
    var poolName2 = pool.split("/");
    var idPool2 = poolName2[2];
    $("#"+idPool2).hide();
    console.log(idPool2);
    jQuery.data( div, value );
    $('<div style="width:95px;display:inline-block;margin:5px;"><p> URL:</p><a target="_blank" href="https://www.flickr.com'+pool+'">'+pool+'</a><button id=\"detail\" onclick=\"seeDetails(\'' + value +'\',\''+ photoTitle +'\')\"><img src="'+ value +'_s.jpg"/></button></div></br>').appendTo('#selectedpools');
}
   