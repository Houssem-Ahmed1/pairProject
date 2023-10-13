//login 

document.getElementById("button").addEventListener("click",function(){
var username = document.getElementById("username").value
var password = document.getElementById("password").value
var localuser=localStorage.getItem("username")
var localPass=localStorage.getItem("password")
if(username===localuser && password===localPass){
    window.location.href='./index.html'
} else{
    alert("check your information")
}
})