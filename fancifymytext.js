
function sAlert(){
alert("Hello World!");
}

function makeBigger() {
    document.getElementById("textInput").style.fontSize = "4em";
}

function fancify(){
    document.getElementById("textInput").style.color = "blue";
    document.getElementById("textInput").style.fontWeight = "bold";
    document.getElementById("textInput").style.textDecoration = "underline"
}

function boring(){
    document.getElementById("textInput").style.color = "";
    document.getElementById("textInput").style.fontWeight = "";
    document.getElementById("textInput").style.textDecoration = "";
    document.getElementById("textInput").style.fontSize = "";
}

function moo(){
    var input = document.getElementById("textInput");
    input.value = input.value.toUpperCase();
    var part = input.value.split(".");
    input.value = part.join("MOO");
}