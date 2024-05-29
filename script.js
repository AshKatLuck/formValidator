const submitBtn=document.querySelector("button");
const password1El=document.querySelector("#password1");
const password2El=document.querySelector("#password");
const message=document.getElementById("message");
const messageContainer=document.querySelector(".message-container")
const form=document.querySelector("#form");

//global variable for checking validity
let isValid=false;

function validateForm(){
    isValid=form.checkValidity();
    if(isValid){
        message.textContent='Thank you for registering!';
        message.style.color='green';
        messageContainer.style.color='green';
    }else{
        message.textContent='Please enter valid data in all fields!';
        message.style.color='red';
        messageContainer.style.color='red';
    }
}

//Process the form data
function processFormData(e){
    e.preventDefault();
    validateForm();
}




//Event listener
submitBtn.addEventListener('click',processFormData)