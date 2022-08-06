// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const menuBar = document.querySelector(".nav-toggle");
const menu = document.querySelector(".links");

menuBar.addEventListener('click', ()=>{
    menu.classList.toggle("show-links");
})