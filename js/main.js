var icon = document.getElementById("icon");

icon.onclick = function () {
    document.body.classList.toggle("white-theme");
    if (document.body.classList.contains("white-theme")) {
        icon.src = "img/moon.svg";
        logo.src = "img/NOSTRA - black.svg";
    } else {
        icon.src = "img/sun.svg";
        logo.src = "img/NOSTRA.svg";
    }


}

/* header burger */

let headerBurger = document.querySelector(".header-burger");
let menu = document.querySelector(".menu");
let body = document.querySelector("body");
headerBurger.onclick = function () {
    headerBurger.classList.toggle("active");
    menu.classList.toggle("active");
    body.classList.toggle("no-scroll");
}

