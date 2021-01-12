// https://stackoverflow.com/a/49333949
function mySummary() {
    var a = document.getElementById("name").value;
    var b = document.getElementById("phone").value;
    var radioBtn = document.getElementsByName("contact");
    var c;
    for(i=0; i<radioBtn.length; i++){
     if(radioBtn[i].checked){
       c = radioBtn[i].value;
     }
    }

document.legendYear.innerHTML = 
"Name: " + a + "\n" +
"Phone: " + b + "\n" +
"Contacted How: " + c + "\n" +
"Additional information" + d;