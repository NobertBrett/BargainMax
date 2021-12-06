// Navbar
// the full navbar javascript code

//const menu = document.querySelector(".menu");
//const navbar = document.querySelector(".navbar");

//menu.addEventListener("click", () => {
    //navbar.classList.toggle("change");
    //menu.classList.toggle('change')});
// End of Navbar

//Navbar compressed Javascript code
const e=document.querySelector(".menu"),c=document.querySelector(".navbar");e.addEventListener("click",(()=>{c.classList.toggle("change"),e.classList.toggle("change")}));

//form validation
//form validation full javascript code

//const form = document.getElementById("form");
//const name = document.getElementById("name");
//const email = document.getElementById("email");
//const message = document.getElementById("message");

//form.addEventListener("submit", (e) => {
  //  e.preventDefault();
//});

//const error = (element, message) => {
  //  const formControl = element.parentElement;
  //  const displayError = formControl.querySelector(".error");

  // displayError.innerText = message;
  // formControl.classList.add("error");
  // formControl.classList.remove("success");}

//const success = (element) => {
  //  const formControl = element.parentElement;
   // const displayError = formControl.querySelector(".error");
   // displayError.innerText = "";
  //  formControl.classList.add("success");
  //  formControl.classList.remove("error");}

//const isValidEmail = (email) => {
  //  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   // return re.test(String(email).toLowerCase());}

//const validateDetails = () => {
  //  const nameValue = name.value.trim();
  //  const phoneValue = phone.value.trim();
  //  const emailValue = email.value.trim();
  //  const messageValue = message.value.trim();

  //  if (nameValue === "") {
    //    error(name, "Name cannot be empty");
  //  } else {
   //     success(name);}

   // if (emailValue === "") {
     //   error(email, "Email cannot be empty");
  //  } else if (!isValidEmail(emailValue)) {
   //     error(email, "Email is not valid");
  //  } else {
    //    success(email);}

   // if (messageValue === "") {
     //   error(message, "Message cannot be empty");
   // } else {
     //   success(message);
   // }

 // if (phoneValue === "") {
   //     error(phoneValue, "Telephone cannot be empty");
  //  } else {
    //    success(phoneValue);}}

//form validation compressed javascript code
const e=document.getElementById("form");document.getElementById("name"),document.getElementById("email"),document.getElementById("message");e.addEventListener("submit",(e=>{e.preventDefault()}));
