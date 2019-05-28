function repeatPassword(){
  var password = document.getElementById('password')
  , confirm_password =
  document.getElementById('confirm_password');

  function validatePassword(){
    if(password.value != confirm_password.value){

      confirm_password.setCustomValidity("Lösenorden överensstämmer inte");
    } else {
      confirm_password.setCustomValidity('');
    }
  }
  password.onchange = validatePassword;
  confirm_password.onkeyup = validatePassword;
}

function checkForm(form)
  {
    if(!form.terms.checked) {
      alert("Du måste acceptera användarvillkoren för att fortsätta");
      form.terms.focus();
      return false;
    }
    return true;
  }
