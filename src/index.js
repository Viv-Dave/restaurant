import createRestaurantContent from "./home.js";
import createAboutContent from "./about.js";
import createMenu from "./menu.js";
import './style.css';
const homebtn = document.getElementById("item1");
const aboutbtn = document.getElementById("item2");
const menubtn = document.getElementById("item3");
window.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded event triggered");
  createRestaurantContent();
});
homebtn.addEventListener("click", () => {
    console.log("Home Button Clicked");
    createRestaurantContent();
});
menubtn.addEventListener("click", () => {
    console.log("Menu Button Clicked");
    createMenu();
});
aboutbtn.addEventListener('click', () => {
    console.log("AboutBtnClicked");
    createAboutContent();
});
