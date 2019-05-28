/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function(){
    $("#step1").click(function(){
        $("#form-id-1").css("display", "none");
        $("#form-id-2").css("display", "block");
    });
    $("#stepback1").click(function(){
        $("#form-id-2").css("display", "none");
        $("#form-id-1").css("display", "block");
    });
    $("#step2").click(function(){
        $("#form-id-2").css("display", "none");
        $("#form-id-3").css("display", "block");
    });
    $("#stepback2").click(function(){
        $("#form-id-3").css("display", "none");
        $("#form-id-2").css("display", "block");
    });
    $("#step3").click(function(){
        window.location.href = "done.html";
    });
  
});

