//signup

var button=document.getElementById("button").addEventListener("click",function(){
var username = document.getElementById('username').value
var email = document.getElementById('email').value
var password= document.getElementById('password').value

if(password.length<6){
    alert("your password is too low")
}else{
    window.location.href='./login.html'
    localStorage.setItem("username",username)
    localStorage.setItem("email",email)
    localStorage.setItem("password",password)   
}

})