let answer;
function divide(){
    answer = document.getElementById("input").value/2;
    document.getElementById("answer").innerHTML = "/2 = " + answer;
}
document.getElementById("input").addEventListener("change", divide);