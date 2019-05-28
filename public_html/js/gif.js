/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
setTimeout(function(){  
    $("#done").fadeOut(10, function(){
        $(this).remove;
    });
    $("#mrGif").fadeIn( 10, function(){
        $("#mrGif").append("<img id='done'width: 110%'; src='img/doneImg.png' alt='img'>");  
    })
}, 6000);

function change(){
    console.log("Done");
    $(this).remove;
}

