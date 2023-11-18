const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

//function entrar(){
    //console.log("La función entrar() se ha llamado correctamente.");
    //window.location.replace("home.html");
//}//

//login.js

const form = document.getElementById("login-form");

form.addEventListener("click", (event) => {
event.preventDefault();
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

// Here you would typically send the email and password to a server for authentication
// For this example, we'll just check if the email and password match a hardcoded value
function entrar(){
if (email === "example@email.com" && password === "password123") {
entrar(); // Call the entrar() function to redirect to the home page
} else {
alert("Invalid email or password"); // Show an error message if the email or password is incorrect
}
}});

//User Menu 
var UserMenuArray = [
  {
    userImg: "img/reloj2.jpg"
  }
]

var UserDiv = document.getElementById("user-icon");

UserMenuArray.forEach(function(userImg){
  UserDiv.innerHTML += "<img src'" + userImg + "' />"
});

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
document.getElementById("user-icon").addEventListener("click", openNav);
