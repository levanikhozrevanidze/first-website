// check for saved "WhiteTheme" in localStorage
let WhiteTheme = localStorage.getItem("white-theme");

const WhiteThemeToggle = document.querySelector("#icon");


const enableWhiteTheme = () => {
  // 1. Add the class to the body
  document.body.classList.add("white-theme");
  if (document.body.classList.contains("white-theme")) {
    icon.src = "img/moon.svg";
    logo.src = "img/NOSTRA - black.svg";
  } else {
    icon.src = "img/sun.svg";
    logo.src = "img/NOSTRA.svg";
  }
  // 2. Update WhiteTheme in localStorage
  localStorage.setItem("white-theme", "enabled");
}

const disableWhiteTheme = () => {
  // 1. Remove the class from the body
  document.body.classList.remove("white-theme");
  if (document.body.classList.contains("white-theme")) {
    icon.src = "img/moon.svg";
    logo.src = "img/NOSTRA - black.svg";
  } else {
    icon.src = "img/sun.svg";
    logo.src = "img/NOSTRA.svg";
  }
  // 2. Update WhiteTheme in localStorage 
  localStorage.setItem("white-theme", null);
}

// If the user already visited and enabled WhiteTheme
// start things off with it on
if (WhiteTheme === "enabled") {
  enableWhiteTheme();
}

// When someone clicks the button
WhiteThemeToggle.addEventListener("click", () => {
  // get their WhiteTheme setting
  WhiteTheme = localStorage.getItem("white-theme");

  // if it not current enabled, enable it
  if (WhiteTheme !== "enabled") {
    enableWhiteTheme();
    // if it has been enabled, turn it off  
  } else {
    disableWhiteTheme();
  }
});



/* header burger */

let headerBurger = document.querySelector(".header-burger");
let menu = document.querySelector(".menu");
let body = document.querySelector("body");
headerBurger.onclick = function () {
  headerBurger.classList.toggle("active");
  menu.classList.toggle("active");
  body.classList.toggle("no-scroll");
}