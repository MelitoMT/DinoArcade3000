let body = document.getElementsByTagName("body");
let boton = document.querySelector(".slider");
let blue = document.querySelectorAll(".blue");
let infopink = document.querySelectorAll(".infor");
let puntuac = document.querySelectorAll(".puntuac");
let credi = document.querySelector(".credi");
boton.addEventListener("click",colors);
function colors(){
    blue[0].classList.toggle("pink");
    blue[1].classList.toggle("pink");
    blue[2].classList.toggle("pink");
    blue[3].classList.toggle("pink");
    blue[4].classList.toggle("pink");
    infopink[0].classList.toggle("infopink");
    infopink[1].classList.toggle("infopink");
    infopink[2].classList.toggle("infopink");
    puntuac[0].classList.toggle("puntuac2");
    puntuac[1].classList.toggle("puntuac2");
    puntuac[2].classList.toggle("puntuac2");
    credi.classList.toggle("credi2");
}