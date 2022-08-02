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


let headerBurger = document.querySelector('.header-burger')
let menu = document.querySelector('.menu');
let body = document.querySelector('body');
headerBurger.onclick = function() {
   headerBurger.classList.toggle('active');
   menu.classList.toggle('active');
   body.classList.toggle('no-scroll');
}

function remove() {
  const headerBurger = document.querySelector(".header-burger");
  const menu = document.querySelector(".menu");
  const body = document.querySelector("body");
  headerBurger.classList.remove("active");
  menu.classList.remove("active");
  body.classList.remove("no-scroll");
}

//contact

function SendMail() {
  var params = {
    from_name: document.getElementById("name").value,
    subject: document.getElementById("subject").value,
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("message").value
  };
  emailjs.send("service_luhs8yw", "template_5zyhuuc", params);
  /* .then(function (res) {
      alert("Success!" + res.status);
    }); */
}



//portfolio section 

let tab = document.querySelectorAll(".tab");
let source = document.querySelectorAll(".source");

for (let i = 0; i < tab.length; i++) {
  tab[i].addEventListener("click", function () {
    for (let j = 0; j < tab.length; j++) {
      tab[j].classList.remove("active");
    }
    this.classList.add("active");

    let dataFilter = this.getAttribute("data-filter");

    for (let k = 0; k < source.length; k++) {
      source[k].classList.remove("active");
      source[k].classList.add("hide");

      if (source[k].getAttribute("data-item") == dataFilter ||
        dataFilter == "All") {
        source[k].classList.remove("hide");
        source[k].classList.add("active");
      }
    }
  })
}