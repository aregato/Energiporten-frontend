window.onload = start;

function start(){
    var eye = document.getElementById("eyeButton");
    eye.addEventListener("click", eyeOpen);
}

function eyeOpen() {
    var x = document.getElementById("password");
    var eye = document.getElementById("mrEye");
    if (x.type === "password") {
        x.type = "text";
        eye.classList.remove('glyphicon-eye-open');
        eye.classList.add('glyphicon-eye-close');
    } else {
        x.type = "password";
        eye.classList.remove('glyphicon-eye-close');
        eye.classList.add('glyphicon-eye-open');
    }
}
