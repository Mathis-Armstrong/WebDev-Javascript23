let burger = document.getElementsByClassName("burger");
let navbar = document.getElementById("navbar");
let header = document.getElementById("header");
function hamburger(){
    if(header.style.display == "block" && navbar.style.display == "none"){
        header.style.display = "none";
        navbar.style.display = "block";
        
    }
    else{
        header.style.display = "block";
        navbar.style.display = "none";
    }
}