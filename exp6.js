
function changeHeading() {
    var newHeading = document.getElementById("text").value;
    document.getElementById("heading").innerText = newHeading;
}   
function changeBackground() {
    document.body.style.backgroundColor = "lightblue";
    let input=Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor="#"+input;

}
 let fontSize=16;
function increaseFontsize() {
    // fontSize=16;
   // document.getElementById("heading").style.fontSize = "12px";
    fontSize+=2;
    document.getElementById("paragraph").style.fontSize = fontSize + "px";
    
    

}
function Showhideparagraph() {
    var paragraph = document.getElementById("paragraph");

    if (paragraph.style.display === "none") {
        paragraph.style.display = "block";
    }
    else {
        paragraph.style.display = "none";
    }
}
function Reset() {
    document.getElementById("heading").innerText = "Welcome to JavaScript Lab";
    document.body.style.backgroundColor = "white";
    document.getElementById("paragraph").style.fontSize = "16px";
    document.getElementById("paragraph").style.display = "block";
    
}