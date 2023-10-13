let count = 0;
document.getElementById("DECREASE").onclick = function () {
    count--;
    document.getElementById("contlab").innerHTML = count;
    if (count < 0) {
        document.getElementById("contlab").style.color = "red";
    }
    else if (count == 0) {
        document.getElementById("contlab").style.color = "black";
    }
}
document.getElementById("INCREASE").onclick = function () {
    count++;
    document.getElementById("contlab").innerHTML = count;
    if (count > 0) {
        document.getElementById("contlab").style.color = "green";
    }
    else if (count == 0) {
        document.getElementById("contlab").style.color = "black";
    }
}
document.getElementById("RESET").onclick = function () {
    count = 0;
    document.getElementById("contlab").innerHTML = count;
    document.getElementById("contlab").style.color = "black";
}