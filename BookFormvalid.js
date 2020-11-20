function Valid(){
  var name=document.getElementById("nameid").value;
  var phnumber=document.getElementById("numberid").value;
  var address=document.getElementById("addressid").value;
  var dob=document.getElementById("dobid").value;
  

if(isBlank(name)){
    document.getElementById("nameMsg").innerHTML="Enter the correct name";
    document.getElementById("nameMsg").style.color=blue;
    return false;
}

if(isValidphoneNumber(number)){
    document.getElementById("numberMsg").innerHTML="Enter the correct number";
    document.getElementById("numberMsg").style.color=blue;
    return false;
}
if(isBlank(address)){
    document.getElementById("addressMsg").innerHTML="Enter the correct address";
    document.getElementById("addressMsg").style.color=blue;
    return false;
}
if(isValidDateOfBirth(dob)){
    document.getElementById("dobMsg").innerHTML="Enter the correct date of birth";
    document.getElementById("dobMsg").style.color=blue;
    return false;
}
return true;
}
function isValidphoneNumber(number){
    var phoneRegex = /^[6-9]{2}[0-9]{8}$/;
    return number.match(phoneRegex)?true:false;
}
