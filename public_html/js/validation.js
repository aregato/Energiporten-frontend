/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function(){
    $('#selectFrn').bind('change', function() {
        var frn = $("#selectFrn").val();
        if(frn === "none"){
            console.log("Fail");
            $("#frning").remove();
        }else{
            console.log(frn);
            $("#frning").remove();
            $("#frnBtn").append("<a href='done.html' id='frning' class='btn btn-success'>Vidare till nästa steg</a>");
        }
    });
});
