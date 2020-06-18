let body = document.getElementsByTagName("body");
let blue = document.querySelectorAll(".blue");
let bg = document.querySelector(".flexC");
let shadow = document.querySelectorAll(".LSHC");
let arcade = document.querySelector(".arcadeC");
let boton = document.querySelector(".slider");
boton.addEventListener("click",colors);
function colors(){
    console.log("color");
    blue[0].classList.toggle("pink");
    blue[1].classList.toggle("pink");
    blue[2].classList.toggle("pink");
    blue[3].classList.toggle("pink");
    blue[4].classList.toggle("pink");
    blue[5].classList.toggle("pink");
    blue[6].classList.toggle("pink");
    bg.classList.toggle("flexC2");
    shadow[0].classList.toggle("LSHC2");
    shadow[1].classList.toggle("LSHC2");
    shadow[2].classList.toggle("LSHC2");
    arcade.classList.toggle("arcadeC2");
    window.location.reload;
}
