//capturing the DOM elements

const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.querySelector('#email');
const phone = document.getElementById('phone');
const psswd = document.getElementById('password');
const confirmP = document.getElementById('cPassword')
const form = document.querySelector('form');
const textError = document.querySelector('.error');


//validing the users input as they type in Data

email.addEventListener('input', (event) => {
    if(email.validity.valid){
         //clear any error message
         textError.contentText = "";
         //restore the visual display of the input
         textError.contentText = "error";
    }else{
        showError();
    }
})

form.addEventListener('submit', (event) => {
    if(!email.validity.valid){
        showError();
        event.preventDefault;
    }
})


function showError(){
 if(email.validity.valueMissing){
    //when no data is typed in
    textError.contentText = "Please fill in your email address here!" 

 }else if(email.validity.typeMismatch){
    //when its not an email
    textError.contentText = "Enter a correct email address!"
 }else if(email.validity.tooShort){
    //when it's shorter than required value
    textError.content =   `The email you entered is too short with ${email.length} characters whie ${email.length} characters are required! `
 }
} 

