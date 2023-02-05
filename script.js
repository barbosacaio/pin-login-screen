// Selects all of the program's buttons
const PINInput = document.getElementById('PINInput');
const number1 = document.getElementById('number1');
const number2 = document.getElementById('number2');
const number3 = document.getElementById('number3');
const number4 = document.getElementById('number4');
const number5 = document.getElementById('number5');
const number6 = document.getElementById('number6');
const number7 = document.getElementById('number7');
const number8 = document.getElementById('number8');
const number9 = document.getElementById('number9');
const number0 = document.getElementById('number0');
const del = document.getElementById('delete');
const newPassword = document.getElementById('newPassword');

/* Text to save the current situation of the input field */
let text;
/* Text to save the password */
let password = "";

/* Function to write on the input field */
function writeNumber(key){
    // Checks if the input is empty
    if(PINInput.value == ""){
        text = "";
    }else{
        text = PINInput.value;
    }

    // If we already have max digits
    if(text.length == 8){
        alert("Maximum digits reached!");
    }else{
        PINInput.value = text + key;
        // If we have the correct amount of digits and the password is set
        if(PINInput.value.length == 8 && password != ""){
            if(PINInput.value == password){
                alert("Password correct! Access granted.");
                PINInput.value = "";
            }else{
                alert("Password incorrect! Try again.");
                PINInput.value = "";
            }
        }
    }
}

/* Function to clear the field */
function deleteNumbers(){
    PINInput.value = "";
}

/* Function to create a password */
function createPassword(){
    text = PINInput.value;

    if(text.length == 8){
        password = text;
        alert("Password set!");
        PINInput.value = "";
    }else{
        alert("A password must have 8 digits.");
    }
}