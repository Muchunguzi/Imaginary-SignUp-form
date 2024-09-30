//capturing the DOM elements

const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('mail');
const phone = document.getElementById('phone');
const psswd = document.getElementById('password');
const confirmP = document.getElementById('cPassword')
const form = document.querySelector('form');
const textError = document.querySelector('#mail + span.error');
const fnameError = document.querySelector('#firstName + span.error');


//validing the users input as they type in Data 

email.addEventListener('input', (event) => {
    if(email.validity.valid){
         //clear any error message
         textError.textContent = "";
         //restore the visual display of the error message
         textError.class = "error";
    }else{ 
        showError();
    }
})

firstName.addEventListener('input', (e) => {
    if(firstName.validity.valid){
        fnameError.textContent = '';
        fnameError.class = 'error';
    } else {
        showNameError();
    }
} )


form.addEventListener('submit', (event) => {
    if(!email.validity.valid){
        showError();
        event.preventDefault;
    }
})


function showError(){
 if(email.validity.valueMissing){
    //when no data is typed in
    textError.textContent = "Please fill in your email address here!" 

 }else if(email.validity.typeMismatch){
    //when its not an email
    textError.textContent = "Enter a correct email address!"
 }else if(email.validity.tooShort){
    //when it's shorter than required value
    textError.textContent =   `The email you entered is too short with ${email.length} characters whie ${email.minLength} characters are required! `
 }
} 

function showNameError(){
    if(firstName.validity.valueMissing){
        fnameError.textContent = "You need to enter your name here please!";
    }
}

