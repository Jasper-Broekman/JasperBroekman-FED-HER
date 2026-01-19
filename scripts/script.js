// JavaScript Document
console.log("hi");

const nietzichtbaar = document.getElementById("niet-zichtbaar");
const header = document.getElementById("header");
const hamburger = document.querySelector("#hamburger-icon");
const kruisje = document.querySelector("#sluiten");
const video = document.querySelector("section:first-of-type video");
const toggleButton = document.getElementById("video-toggle");
const speelknop = document.getElementById("speel-knop");
const pauzeknop = document.getElementById("pauze-knop");
const fontButton = document.querySelector("#font-vergroot");


//hamburger menu
function hamburgermenu() {
    nietzichtbaar.classList.add("open");
    header.style.display = "none";
};


function sluiten() {
    nietzichtbaar.classList.remove("open");
    header.style.display = "flex";
};




//video pauze knop
function triggerbutton() {
  if (video.paused) {
    video.play();
    speelknop.style.display = "none";
    pauzeknop.style.display = "block";
  } else {
    video.pause();
    speelknop.style.display = "block";
    pauzeknop.style.display = "none";
  }
};





//lettertype vergroten
let basisFont = 16;
const stap = 2;
const maxFont = 24;

function vergrootLettertype() {
    if (basisFont < maxFont) {
        basisFont += stap;
        document.documentElement.style.fontSize = basisFont + "px";
    }
}





hamburger.addEventListener('click', hamburgermenu);
kruisje.addEventListener('click', sluiten);
toggleButton.addEventListener("click", triggerbutton);
fontButton.addEventListener("click", vergrootLettertype);