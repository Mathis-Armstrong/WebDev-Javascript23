let check = document.getElementById("check");
let check2 = document.getElementById("check2");
let check3 = document.getElementById("check3");
let radio = document.getElementById("radio");
let text = document.getElementById("text");
let submit = document.getElementById("submit");

submit.addEventListener("click", function(){
    if(!check.checked&&!check2.checked&&!check3.checked){
        check.setCustomValidity("Check at least 1 box.");
    }
    else if(radio.validity.valueMissing){
        radio.setCustomValidity("Select an option.");
    }
    else if(text.validity.valueMissing){
        text.setCustomValidity("Type something here.");
    }
    else if(text.validity.patternMismatch){
        text.setCustomValidity("Must have at least 8 characters including 1 letter and 1 number.");
    }
    else{
        check.setCustomValidity("");
        radio.setCustomValidity("");
        text.setCustomValidity("");
    }
});