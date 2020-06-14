let numFilas = 9;
let numColumnas = 10;
let nums = (numFilas)*(numColumnas);
let increm = 0;
let autos = " ";
let paraCads = 0;
let ancho = window.innerWidth;
let alto = window.innerHeight;
let pasoArr = 0;

var arrEsc = new Array(30,20,10,11,1,2,3,4,5,15,16,17,18,19,29,39,38,48,47,46,36,
  35,34,33,43,53,54,64,65,66,67,68,78,88,87,86,85,84,83,82,81,71,70,60,50,40);

let posP1 = Math.round(Math.random()*(arrEsc.length-1));
console.log(posP1);

console.log(alto);
console.log(ancho);

while (paraCads < numColumnas )
{
  autos = autos + "auto ";
  paraCads = paraCads + 1;
}

var conten = document.createElement("div");
conten.setAttribute("style","display: grid; grid-template-columns:" + autos + "; width:" + (ancho)*(0.30) + "px; height:" + (alto)*(.56) + "px");
conten.classList.add("tamano");
let body = document.getElementsByTagName("body");
body[0].appendChild(conten);

while(increm < nums)
{
  var casilla = document.createElement("div");
  pasoArr = 0;
  while(pasoArr < 90)
  {
    if(arrEsc[pasoArr] === increm)
    {
      if(pasoArr === posP1)
      {
        casilla.setAttribute("class","filaN");
        casilla.innerText = pasoArr + 1;
      }
      else
      {
        casilla.setAttribute("class","filaP1");
        casilla.innerText = pasoArr + 1;
      }
    }
    pasoArr = pasoArr + 1;
  }
  let div = document.getElementsByTagName("div");
  div[0].prepend(casilla);
  increm = increm + 1;
}
