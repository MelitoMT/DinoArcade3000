let numFilas = 9;
let numColumnas = 10;
let nums = (numFilas)*(numColumnas);
let increm = 0;
let autos = " ";
let paraCads = 0;
let ancho = window.innerWidth;
let alto = window.innerHeight;
let pasoArr = 0;
let dadoNum = Math.round(Math.random()*5)+1;
let pase = false;
let stand = 0;
let enter = 0;
let turno = "P1";
let pasoAdelante = 0;

var arrEsc = new Array(30,20,10,11,1,2,3,4,5,15,16,17,18,19,29,39,38,48,47,46,36,
  35,34,33,43,53,54,64,65,66,67,68,78,88,87,86,85,84,83,82,81,71,70,60,50,40);

let posP1 = 0;

console.log(alto);
console.log(ancho);

var avanceP1 = document.createElement("h3");
avanceP1.setAttribute("id","avanceDado");
avanceP1.innerText = pasoAdelante;
let body = document.getElementsByTagName("body");
body[0].appendChild(avanceP1);

function creaTablero()
{
  var borrando = document.getElementById("contenedorgen");
  borrando.remove();
  var borrandoCif = document.getElementById("avanceDado");
  borrandoCif.remove();

  nums = (numFilas)*(numColumnas);
  increm = 0;
  autos = " ";
  paraCads = 0;
  ancho = window.innerWidth;
  alto = window.innerHeight;
  pasoArr = 0;
  arrEsc = new Array(30,20,10,11,1,2,3,4,5,15,16,17,18,19,29,39,38,48,47,46,36,
  35,34,33,43,53,54,64,65,66,67,68,78,88,87,86,85,84,83,82,81,71,70,60,50,40);

  document.onkeyup = teclado;

  var avanceP1 = document.createElement("h3");
  avanceP1.setAttribute("id","avanceDado");
  avanceP1.innerText = pasoAdelante;
  let body = document.getElementsByTagName("body");
  body[0].appendChild(avanceP1);


  if((pase == true) && (dadoNum != 0))
  {
    if(posP1 < ((arrEsc.length)-1) )
    {
      posP1 = posP1 + 1;
      dadoNum = dadoNum - 1;
    }
    else
    {
      posP1 = 0;
    }
  }
  else
  {
    pase = false;
  }


  while (paraCads < numColumnas )
  {
    autos = autos + "auto ";
    paraCads = paraCads + 1;
  }
  var conten = document.createElement("div");
  conten.setAttribute("style","display: grid; grid-template-columns:" + autos + "; width:" + (ancho)*(0.30) + "px; height:" + (alto)*(.56) + "px");
  conten.setAttribute("id","contenedorgen");
  conten.classList.add("tamano");
  //let body = document.getElementsByTagName("body");
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

  function teclado(event)
  {
    enter = event.keyCode;
    if((enter == 13)&&(pase == false))
    {
      //console.log("Listo");
      dadoNum = Math.round(Math.random()*5)+1;
      pase = true;
      pasoAdelante = dadoNum;
    }
  }
  /*if((pase == false)&&(stand != 10))
  {
    stand = stand + 1;
  }
  if(stand == 10)
  {
    pase = true;
    stand = 0;
    dadoNum = Math.round(Math.random()*5)+1;
  }*/


  setTimeout(() =>
  {
    creaTablero();
  }, 80);
}


while (paraCads < numColumnas )
{
  autos = autos + "auto ";
  paraCads = paraCads + 1;
}
var conten = document.createElement("div");
conten.setAttribute("style","display: grid; grid-template-columns:" + autos + "; width:" + (ancho)*(0.30) + "px; height:" + (alto)*(.56) + "px");
conten.setAttribute("id","contenedorgen");
conten.classList.add("tamano");
//let body = document.getElementsByTagName("body");
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
setTimeout(() =>
{
  creaTablero();
}, 80);
