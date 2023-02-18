/*  JavaScript 7th Edition
    Chapter 1
    Hands-On Project 1-4

    Author: Mathis Armstrong
    Date:   1/14/23

    Filename: project01-04.js
*/

let homeStreet = '1 Main St.';
let homeCity = 'Sicilia';
let homeState = 'MA';
let homeCode = '02103';
let workStreet = '15 Oak Ln.';
let workCity = 'Central City';
let workState = 'MA';
let workCode = '02104';
function work(){
    document.getElementById("street").value=workStreet;
    document.getElementById("city").value=workCity;
    document.getElementById("state").value=workState;
    document.getElementById("code").value=workCode;
}

function home(){
    document.getElementById("street").value=homeStreet;
    document.getElementById("city").value=homeCity;
    document.getElementById("state").value=homeState;
    document.getElementById("code").value=homeCode;
}