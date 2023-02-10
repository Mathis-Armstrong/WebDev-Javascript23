let picture = document.getElementById("pic");
let num = document.getElementById("input");
function changeImg(){
    switch (num.value) {
        case "1":
            picture.src = "images/1.JPG";
            break;
        case "2":
            picture.src = "images/2.jpg";
            break;
        case "3":
            picture.src = "images/3.gif";
            break;
        case "4":
            picture.src = "images/4.jpg";
            break;
        case "5":
            picture.src = "images/5.gif";
            break;
        default:
            break;
    }
}
num.addEventListener("input", changeImg);