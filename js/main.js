var icon = document.getElementById("icon");


icon.onclick = function () {
    document.body.classList.toggle("white-theme");
    if (document.body.classList.contains("white-theme")) {
        icon.src = "img/moon.svg";
        logo.src = "img/NOSTRA - black.svg";
    } else {
       icon.src= "img/sun.svg"; 
       logo.src= "img/NOSTRA.svg"; 
    }

    
}

