

//Checking password function
function checkpass() {
  var pass = document.getElementById('password').value;
  var passconfirm = document.getElementById('confirm_password').value;

  if (pass == passconfirm) {
    document.getElementById('passmessage').innerHTML = null;

    if (pass == "" && passconfirm == "") {
      document.getElementById('passmsg').innerHTML = '*';
      document.getElementById('confmessage').innerHTML = '*';
    }
  } else {
    document.getElementById('passmsg').innerHTML = null;
    document.getElementById('confmessage').innerHTML = null;
    document.getElementById('passmessage').style.color = 'red';
    document.getElementById('passmessage').innerHTML = 'Password does not match *';
  }
}



function checkname() {
  var name = document.getElementById('username').value;

  if (name == "") {
    document.getElementById('usermsg').innerHTML = '*';
  } else {
    document.getElementById('usermsg').innerHTML = null;
  }
}



function checkPhone() {
  var phone = document.getElementById('phone-number').value;
  if (phone == "") {
    document.getElementById('phonemsg').innerHTML = '*';
  } else {
    document.getElementById('phonemsg').innerHTML = null;
  }
}
//Checking if the input is a number
function isNumberKey(evt) {
  var charCode = (evt.which) ? evt.which : evt.keyCode
  return !(charCode > 31 && (charCode < 48 || charCode > 57));
}


// Checking for ContactUs page
document.getElementById("c").onsubmit = function() {
  checkCon()
};

function checkCon() {

  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  if (email == ""  || message == "") {
    alert("رجاءًأدخل جميع الحقول");
    return false;
  } 
  else {

    alert("تم أستلام رسالتك بنجاح");
    return true;
  }
}


var faq = document.getElementsByClassName("faq-page");
var i;

for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}
