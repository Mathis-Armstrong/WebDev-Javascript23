"use strict";
let picture = document.getElementById("pic");
let num = document.getElementById("input");
function changeImg(){
    switch (num.value) {
        case "1":
            picture.src = "pics/1.JPG";
            break;
        case "2":
            picture.src = "pics/2.jpg";
            break;
        case "3":
            picture.src = "pics/3.gif";
            break;
        case "4":
            picture.src = "pics/4.jpg";
            break;
        case "5":
            picture.src = "pics/5.gif";
            break;
        default:
            picture.src = "";
            window.alert("Entry must be a whole number between 1 and 5");
            break;
    }
}
num.addEventListener("input", changeImg);