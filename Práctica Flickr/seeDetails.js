function seeDetails (value) {

        console.log(value);                                      
        $( "#infoDetails" ).empty();

        $('<div col-md-9><div style="width:95px;display:inline-block;margin:5px;"><img src="'+ value +'_b.jpg"/></div></div>').appendTo('#infoDetails');
        openTab(event, 'infoDetail');
}