let check = document.getElementById("check");
let check2 = document.getElementById("check2");
let check3 = document.getElementById("check3");
let check4 = document.getElementById("check4");
let check5 = document.getElementById("check5");
let radio = document.getElementById("radio");
let text = document.getElementById("text");
let submit = document.getElementById("submit");
let selections = [];
check.addEventListener("click", function() {
    if(check.checked){
        selections.push("1");
    }
    else{
        selections.splice(selections.indexOf("1"),1);
    }
});
check2.addEventListener("click", function() {
    if(check2.checked){
        selections.push("2");
    }
    else{
        selections.splice(selections.indexOf("2"),1);
    }
});
check3.addEventListener("click", function() {
    if(check3.checked){
        selections.push("3");
    }
    else{
        selections.splice(selections.indexOf("3"),1);
    }
});
check4.addEventListener("click", function() {
    if(check4.checked){
        selections.push("4");
    }
    else{
        selections.splice(selections.indexOf("4"),1);
    }
});
check5.addEventListener("click", function() {
    if(check5.checked){
        selections.push("5");
    }
    else{
        selections.splice(selections.indexOf("5"),1);
    }
});

submit.addEventListener("click", function(){
    if(selections.length<1){
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
    document.getElementById("result").innerHTML = "You picked: "+selections;
});