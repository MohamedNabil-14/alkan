// Navbar //
$(window).scroll(function() {
    if ($(document).scrollTop() > 20) {
        $('.nav').addClass('affix');
        console.log("OK");
    } else {
        $('.nav').removeClass('affix');
    }
});

// Login //

var signupName= document.getElementById('signupName');
var signupEmail= document.getElementById('signupEmail');
var signupPhone= document.getElementById('signupPhone');
var signinEmail= document.getElementById('signinEmail');
var signinPhone= document.getElementById('signinPhone');

var signUpArray;

var username = localStorage.getItem('recordUsername')
if(username) // not equal null
{
    document.getElementById('username').innerHTML="welcome" + username;
}

// lw el user da5al 3ndy 
if( localStorage.getItem('users')==null)
{
    signUpArray=[];
}
else
{
    signUpArray= JSON.parse(localStorage.getItem('users'));
}

// lw el user 3ndo account
 function hasAccount() { 
     if(localStorage.getItem('users')==null)
     {
         return false;
     }
  }
function signUp()
{
    if (isEmpty()== false)
    {
        document.getElementById('exist').innerHTML='<span class="text-danger m-3"> All inputs are required </span>'
        return false
    }
    var signUp=
    {
        name:signupName.value,
        email:signupEmail.value,
        phone:signupPhone.value,
    }
    if ( signUpArray.length == 0)
    {
        signUpArray.push(signUp)
        localStorage.setItem('users' , JSON.stringify(signUpArray))
        document.getElementById('exist').innerHTML=`<span class="text-success m-3">success</span>`
        return true
    }
    if (isEmailExist() == false)
    {
        document.getElementById('exist').innerHTML=`<span class="text-danger m-3">Email already exist</span>`
    }
    else
    {
        
        signUpArray.push(signUp)
        localStorage.setItem('users' , JSON.stringify(signUpArray))
        document.getElementById('exist').innerHTML=`<span class="text-success m-3">success</span>`
    }
}


function isEmailExist() {
    for(var i=0 ; i<signUpArray.length; i++)
    {
        if(signUpArray[i].email.toLowerCase()== signupEmail.value.toLowerCase())
        {
            return false
        }
    }
}

function isEmpty() { 
    if(signupName.value=="" || signupEmail.value=="" || signupPhone.value==""  )
    {
        return false
    }
    else
    {
        return true
    }
 }

 function login()
 {
     if ( hasAccount() == false)
{
    document.getElementById('incorrect').innerHTML=`<span class="text-danger m-3 ">You dont have account please Sign up </span>`
    return false;
}
if ( isLoginEmpty()== false )
{
    document.getElementById('incorrect').innerHTML=`<span class="text-danger m-3 ">You dont have account please Sign up </span>`
    return false;
}
var phone = signinPhone.value
var email = signinEmail.value
for( var i =0; i < signUpArray.length; i++)
{
    if (signUpArray[i].email.toLowerCase() == email.toLowerCase() && signUpArray[i].phone.match == phone.match){
        localStorage.setItem('recordUsername', signUpArray[i].name);
        document.getElementById('incorrect').innerHTML=`<span class="text-success m-3 ">success</span>`
        location.href="logout.html";

    }  
    else
    
    {
        document.getElementById('incorrect').innerHTML=`<span class="text-danger m-3 ">incorrect email or phone</span>`

    }
}

}

function isLoginEmpty() {  
    if(signinPhone.value == "" || signinEmail.value=="")
    {
        return false;
    }
    else{
        return true;
    }
}


function logout(){
    localStorage.removeItem('sessionUsername')
}

//register => regex regular expression

// document.getElementById("register").onsubmit = function(){
//     let signupPhone = document.getElementById("signupPhone").value;
//     let phonePattern = /^01[0125][0-9]{8}$/;
//     let validationResult = phonePattern.test(signupPhone);
//     if (validationResult === false){
//         return false
//     }
//     return true;
// }
