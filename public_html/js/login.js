/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
    var inputEmail = $("#email").val()
    var inputPassword = $("#password").val()
    
    var username = localStorage.getItem('username');
    var password = localStorage.getItem('password');
    var name = localStorage.getItem('name');
    
    console.log("Email: " + username + ". Lösenord: " + password + ". Personens namn: " + name);
    
    $("#login").click(function(){
        if(inputEmail === username){
            console.log("Email är rätt");
            if(inputPassword === password){
                console.log("Lösenord rätt!");
            }else{
                console.log("Lösenord är fel!")
            }
        }else{
            console.log("Email är fel!")
        }
    });
});
