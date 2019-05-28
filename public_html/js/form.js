/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function(){
    $("#nextbutton").click(function(){
        var email = $("#email").val();
        var pass1 = $("#password").val();
        var pass2 =  $("#confirm_password").val();
        var namn = $("#fornamn").val();
        var efternamn = $("#efternamn").val();
        
        var street = $("#route").val();
        var street_number = $("#street_number").val();
        
        var zip = $("#postal_code").val();
        var town = $("#postal_town").val();
        var area = $("#administrative_area_level_1").val();
        var country = $("#country").val();
       
        if ($('#check_id').is(":checked"))
        {   
            if(email == ""){
                alert("Du måste fylla i en E-post");
            }else if(pass2 == ""){
                alert("Du måste fylla i ett Lösenord");
            }else if(street == ""){
                alert("Du måste ange din adress");
            }else{
                if(pass1 !== pass2){
                    alert("Du måste ange samma lösenord i båda rutorna!");
                }else{
                    localStorage.setItem("username", email);
                    localStorage.setItem("password", pass2);
                    localStorage.setItem("name", namn + " " + efternamn);
                    window.location.href = "forening.html";
                }
            }
        }else{
            alert("Du måste acceptera användarvillkoren för att fortsätta");
        }        
        
    });
    
    $("#autocomplete").change(function (){
        
        $('#address-form').show();
        $('#address-autocomplete').remove();
    });
    $('#email').change(function() {
        var email = $("#email").val();
        if(email != 0)
        {
            if(isValidEmailAddress(email))
            {
                $("#email").css({"background-color": "lightgreen"});
                $("#emailMsg").css({"display": "none"});
            } else {
                $("#email").css({"background-color": "lightcoral"});
                $("#emailMsg").css({"display": "block"});
            }
        } else {
            $("#validEmail").css({
                "background-image": "none"
            });         
        } 
    });
    $("#confirm_password").keyup(function () {
        var pass1 = $("#password").val();
        var pass2 = $("#confirm_password").val();
        
        if (pass1 === "") {
            $("#confirm_password").css({"background-color": "lightcoral"});
            
        }else if(pass2 === ""){
            $("#confirm_password").css({"background-color": "lightcoral"});
            
        }else if(pass1 !== pass2){
            $("#confirm_password").css({"background-color": "lightcoral"});
            $("#passMsg").css({"display": "block"});
        }else{
            $("#confirm_password").css({"background-color": "lightgreen"});
            $("#passMsg").css({"display": "none"});
        }
    });
    
});

function validateIt(){
    var email = $("#email").val();
    
    
    console.log(email);
    
    
    if(email === ""){
        console.log("Spika det")
    }else if(email === "test@mail.com"){
        
    }else{
        window.location.href = "forening.html";
    }
}

// This example displays an address form, using the autocomplete feature
// of the Google Places API to help users fill in the information.

// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

var placeSearch, autocomplete;
var componentForm = {
    street_number: 'short_name',
    route: 'long_name',
    postal_town: 'long_name',
    administrative_area_level_1: 'short_name',
    country: 'long_name',
    postal_code: 'short_name'
};

function initAutocomplete() {
    // Create the autocomplete object, restricting the search to geographical
    // location types.
    autocomplete = new google.maps.places.Autocomplete(
            (document.getElementById('autocomplete')),
    { types: ['geocode'] });
    
    // When the user selects an address from the dropdown, populate the address
    // fields in the form.
    autocomplete.addListener('place_changed', fillInAddress);
}

function fillInAddress() {
    // Get the place details from the autocomplete object.
    var place = autocomplete.getPlace();
    
    for (var component in componentForm) {
        document.getElementById(component).value = '';
        document.getElementById(component).disabled = false;
    }
    
    // Get each component of the address from the place details
    // and fill the corresponding field on the form.
    for (var i = 0; i < place.address_components.length; i++) {
        var addressType = place.address_components[i].types[0];
        if (componentForm[addressType]) {
            var val = place.address_components[i][componentForm[addressType]];
            document.getElementById(addressType).value = val;
            
        }
    }
}

// Bias the autocomplete object to the user's geographical location,
// as supplied by the browser's 'navigator.geolocation' object.
function geolocate() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var geolocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            var circle = new google.maps.Circle({
                center: geolocation,
                radius: position.coords.accuracy
            });
            autocomplete.setBounds(circle.getBounds());
        });
    }
}

function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
}