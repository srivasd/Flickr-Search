function addFavourite (value) {
    var div = $("div")[0];
    //var value = $(this).attr("id");
    console.log(value);
   document.getElementsByClassName(value + "class")[0].style.visibility = 'hidden';

    jQuery.data( div, value );
    $('<div style="width:95px;display:inline-block;margin:5px;"><button id=\"detail\" onclick=\"window.location.href=\''+ value +'_b.jpg\'\"><img src="'+ value +'_s.jpg"/></button</div>').appendTo('#favs');
}
    