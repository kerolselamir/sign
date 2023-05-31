
let container=document.querySelector('.container')


function addMode1(){

   container.classList.add('sign-up-mode')
   usernameInput.value=''
   userEmailInput.value=''
   userPasswordInput.value=''
   confirmMsg.classList.add("d-none")
   tryAgainMsg.classList.add('d-none')
   nameExistMsg.classList.add('d-none')
   accountExistMsg.classList.add('d-none')
   usernameAlert.classList.add('d-none')
   userEmailAlert.classList.add('d-none')
   userPasswordAlert.classList.add('d-none')
   usernameInput.classList.remove('is-invalid')
   usernameInput.classList.remove('is-valid')
   userEmailInput.classList.remove('is-invalid')
   userEmailInput.classList.remove('is-valid')
   userPasswordInput.classList.remove('is-invalid')
   userPasswordInput.classList.remove('is-valid')
}

function removeMode1(){
   container.classList.remove('sign-up-mode')
   fillMsg.classList.add('d-none')
   wrongMsg.classList.add('d-none')   
}


function addMode2(){

   container.classList.add('sign-up-mode2')
}

function removeMode2(){

   container.classList.remove('sign-up-mode2')
}
function myFunction2() {
    var x = document.getElementById("userPasswordInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  } 
  function myFunction() {
    var x = document.getElementById("loginPassword");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  } 
// ***********************************************************************************************************************************
let usernameInput=document.getElementById('usernameInput')
let userEmailInput=document.getElementById('userEmailInput')
let userPasswordInput=document.getElementById('userPasswordInput')


let dataOFallUsers=[]

if(localStorage.getItem('Data Base of Users')!=null)
{  
   dataOFallUsers=JSON.parse(localStorage.getItem('Data Base of Users'))
}
 
function signUp()
{
  
   userInputsValidation()
   isExsit()
  if(userInputsValidation()==true &&isExsit()==false)
  {
  usersinfo=
  {
   name:usernameInput.value,
   email_user:userEmailInput.value,
   password_user:userPasswordInput.value
  }
  dataOFallUsers.push(usersinfo)
  localStorage.setItem('Data Base of Users',JSON.stringify(dataOFallUsers))
  
  var confirmMsg=document.getElementById('confirmMsg')
  confirmMsg.classList.remove('d-none')



  var tryAgainMsg=document.getElementById('tryAgainMsg')
  tryAgainMsg.classList.add('d-none')
}
else
{
   var confirmMsg=document.getElementById('confirmMsg')
   confirmMsg.classList.add('d-none')
  var tryAgainMsg=document.getElementById('tryAgainMsg')
  tryAgainMsg.classList.remove('d-none')
}
}












function userNameValidation()
{
 var usernameAlert=document.getElementById('usernameAlert')
 let regex = /^[A-Za-z]{3,10}(\s?[A-Za-z]{3,10})?$/
 if(regex.test(usernameInput.value)==true)
 {
    usernameInput.classList.add('is-valid')
    usernameInput.classList.remove('is-invalid')
    usernameAlert.classList.add('d-none')
    return true
 }
 else
 {
    usernameInput.classList.add('is-invalid')
    usernameInput.classList.remove('is-valid')
    usernameAlert.classList.remove('d-none')
    
    return false
 }
}


function userEmailValidation()
{
 var userEmailAlert=document.getElementById('userEmailAlert')
 let regex = /@[a-z]{5,10}(\.com)$/;
if(regex.test(userEmailInput.value)==true)
 {
    userEmailInput.classList.add('is-valid')
    userEmailInput.classList.remove('is-invalid')
    userEmailAlert.classList.add('d-none')
    return true
 }
 else
 {
    userEmailInput.classList.add('is-invalid')
    userEmailInput.classList.remove('is-valid')
    userEmailAlert.classList.remove('d-none')
    
    return false
 }
}

function userPasswordValidation()
{
 var userPasswordAlert=document.getElementById('userPasswordAlert')
let regex = /^.{5,15}$/;
if(regex.test(userPasswordInput.value)==true)
 {
    userPasswordInput.classList.add('is-valid')
    userPasswordInput.classList.remove('is-invalid')
    userPasswordAlert.classList.add('d-none')
    return true
 }
 else
 {
    userPasswordInput.classList.add('is-invalid')
    userPasswordInput.classList.remove('is-valid')
    userPasswordAlert.classList.remove('d-none')
    
    return false
 }
}

function userInputsValidation()
{
    userNameValidation()
    userEmailValidation()
    userPasswordValidation()
    if(userNameValidation()==true&&userEmailValidation()==true&&userPasswordValidation()==true)
    {
        return true
    }
    else
    {
        return false
    }
}




function isExsit()
{
    let accountExistMsg = document.getElementById("accountExistMsg");
    var nameExistMsg=document.getElementById('nameExistMsg')
    for(let i = 0; i < dataOFallUsers.length; i++)
    {   
        if(dataOFallUsers[i].name.toLowerCase() == usernameInput.value.toLowerCase())
        {
            nameExistMsg.classList.remove('d-none');
            usernameInput.classList.remove("is-valid");
            userEmailInput.classList.remove("is-valid");
            userPasswordInput.classList.remove("is-valid");
            usernameInput.focus()

            return true
        }
        else
        {
            nameExistMsg.classList.add('d-none');
            if(dataOFallUsers[i].email_user.toLowerCase() == userEmailInput.value.toLowerCase())
            {
                accountExistMsg.classList.remove('d-none');
                usernameInput.classList.remove("is-valid");
                userEmailInput.classList.remove("is-valid");
                userPasswordInput.classList.remove("is-valid");
                userEmailInput.focus()
    
                return true
            }
        }

    }
    accountExistMsg.classList.add('d-none')

    return false
    
}


var loginBtn=document.getElementById('loginBtn')

var ownerOfEmail=localStorage.getItem('userName')
function login()
{
    
var loginEmail=document.getElementById('loginEmail')
var loginPassword=document.getElementById('loginPassword')
var wrongMsg=document.getElementById('wrongMsg')

    if(loginEmail.value==''||loginPassword.value=='')
    {
        var fillMsg=document.getElementById('fillMsg')
        fillMsg.classList.remove('d-none')
    }
    else
    {
        var fillMsg=document.getElementById('fillMsg')
        fillMsg.classList.add('d-none')
    }
  
    for(var i=0;i<dataOFallUsers.length;i++)
    {
        if(dataOFallUsers[i].email_user.toLowerCase()==loginEmail.value.toLowerCase()&&dataOFallUsers[i].password_user==loginPassword.value)
        {
            localStorage.setItem('userName',dataOFallUsers[i].name)

            location.href='welcome.html'
        }
        else
        {
            wrongMsg.classList.remove('d-none')
        }
    }
}

function displayWelcomeUser()
{
    document.getElementById('username').innerHTML=`Hallo ${ownerOfEmail} in my site`
}

function logout()
{
    localStorage.removeItem('username')
}

