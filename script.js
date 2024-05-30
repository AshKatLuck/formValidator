const submitBtn=document.querySelector("button");
const password1El=document.getElementById("password1");
const password2El=document.getElementById("password2");
const message=document.getElementById("message");
const messageContainer=document.querySelector(".message-container")
const form=document.querySelector("#form");

//global variable for checking validity
let isValid=false;
let passwordsMatch=false;

function validateForm(){
    isValid=form.checkValidity();
    if(!isValid){
        message.textContent='Please enter valid data in all fields!';
        message.style.color='red';
        messageContainer.style.borderColor='red';
        return;
    }
    if(password1El.value==password2El.value){
        passwordsMatch=true;
        password1El.style.borderColor="green";
        password2El.style.borderColor="green";
    }
    if(password1El.value!=password2El.value){
        passwordsMatch=false;
        password1El.style.borderColor="red";
        password2El.style.borderColor="red";
        message.textContent="Passwords doesn't match";
        message.style.color="red";
        messageContainer.style.borderColor="red"
        return;
    }
    if(isValid && passwordsMatch){
        message.textContent='Thank you for registering!';
        message.style.color='green';
        messageContainer.style.borderColor='green';
    }   
}


//Store Form data
function storeFormdata(){
    const user={
        name:form.name.value,
        email:form.email.value,
        phone:form.phone.value,
        website:form.website.value,
        password:form.password.value 
    }

    //Store in dbms
    console.log(user);
}

//Process the form data
function processFormData(e){
    e.preventDefault();
    validateForm();
    if(isValid && passwordsMatch){
        storeFormdata();
    }
}




//Event listener
submitBtn.addEventListener('click',processFormData)