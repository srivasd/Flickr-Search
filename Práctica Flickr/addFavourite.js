function addFavourite (value, photoTitle) {
    var div = $("div")[0];
    //var value = $(this).attr("id");
    console.log(value);
   document.getElementsByClassName(value + "class")[0].style.visibility = 'hidden';

    jQuery.data( div, value );
    $('<div class="divbrowser"><button class="imgbrowser" id=\"detail\" onclick=\"seeDetails(\'' + value +'\',\''+ photoTitle +'\')\"><img src="'+ value +'_s.jpg"/></button</div>').appendTo('#selectedphotos');
}
    