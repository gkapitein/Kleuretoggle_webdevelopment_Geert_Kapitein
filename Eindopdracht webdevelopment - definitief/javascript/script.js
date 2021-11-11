const menu = document.querySelector(".menu");
const icoon = document.querySelector(".menuButton");
const body = document.getElementById("body");

//dropdown-menu
icoon.addEventListener("click", toggleMenu);

function toggleMenu() {
    menu.classList.toggle("showMenu");
};

//voor achtergrondverandering home
const makeHome = document.querySelector(".make-home");

makeHome.addEventListener("click", veranderAchtergrondHome);

function veranderAchtergrondHome() {
    document.body.style.backgroundColor = "lightgrey";
    toggleMenu();
};

//voor achtergrondverandering rood
const makeRed = document.querySelector(".make-red");

makeRed.addEventListener("click", veranderAchtergrondRood);

function veranderAchtergrondRood() {
    document.body.style.backgroundColor = "red";
    toggleMenu();
};

//voor achtergrondverandering oranje
const makeOrange = document.querySelector(".make-orange");

makeOrange.addEventListener("click", veranderAchtergrondOranje);

function veranderAchtergrondOranje() {
    document.body.style.backgroundColor = "orange";
    toggleMenu();
};

//voor achtergrondverandering paars
const makePurple = document.querySelector(".make-purple");

makePurple.addEventListener("click", veranderAchtergrondPaars);

function veranderAchtergrondPaars() {
    document.body.style.backgroundColor = "purple";
    toggleMenu();
};

//voor achtergrondverandering groen
const makeGreen = document.querySelector(".make-green");

makeGreen.addEventListener("click", veranderAchtergrondGroen);

function veranderAchtergrondGroen() {
    document.body.style.backgroundColor = "green";
    toggleMenu();
};