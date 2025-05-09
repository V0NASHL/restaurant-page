import "./style.css"
import { populateHome } from "./home";
import { populateMenu } from "./menu";
import { populateAbout } from "./about";

const content = document.getElementById("content");
const home = document.getElementById("homeBtn");
const menu = document.getElementById("menuBtn");
const about = document.getElementById("aboutBtn");

(() => {
    content.appendChild(populateHome());

    home.addEventListener("click", () => {
        content.innerHTML = "";
        content.appendChild(populateHome());
    });

    menu.addEventListener("click", () => {
        content.innerHTML = "";
        content.appendChild(populateMenu());
    })

    about.addEventListener("click", () => {
        content.innerHTML = "";
        content.appendChild(populateAbout());
    })
})()

console.log("Hello, Mate!")