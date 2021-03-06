function elTodo()
{
  //Variables de formación del escenario
  let numFilas = 9;
  let numColumnas = 10;
  let nums = (numFilas)*(numColumnas);
  let increm = 0;
  let autos = " ";
  let paraCads = 0;
  let ancho = window.innerWidth;
  let alto = window.innerHeight;
  let pasoArr = 0;
  //Función para verificar cookies
  function obtenerCookie(clave)
  {
    var name = clave + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++)
    {
      var c = ca[i];
      while (c.charAt(0) == ' ')
      {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0)
      {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  //Variables de casillas especiales
  let preCasRe1 = obtenerCookie("casReCoo1");
  if(preCasRe1 === "")
  {
    var casRe1 = 12;
  }
  else
  {
    var casRe1 = preCasRe1;
  }
  let preCasRe2 = obtenerCookie("casReCoo2");
  if(preCasRe2 === "")
  {
    var casRe2 = 24;
  }
  else
  {
    var casRe2 = preCasRe2;
  }
  //Variables de juego
  let dadoNum = 0;
  let dadoSin = 0;
  let pase = false;
  let stand = 0;
  let enter = 0;
  var c = new Date();

  let preTurno = obtenerCookie("turnoCoo");
  if(preTurno === "")
  {
    var turno = "P4";
  }
  else
  {
    var turno = preTurno;
  }
  let preTurnoE = obtenerCookie("turnoECoo");
  if(preTurnoE === "")
  {
    var turnoE = "P1";
  }
  else
  {
    var turnoE = preTurnoE;
  }
  let pasoAdelante = 0;
  let preGusViv = obtenerCookie("gusVivCoo");
  if(preGusViv == "")
  {
    var gusViv = 4;
  }
  else
  {
    var gusViv = parseInt(preGusViv);
  }
  let apuesta = 0;
  let turnoActual = 0;
  let vidaActual = 0;
  //Variables de puntuación
  let prePuntosP1 = obtenerCookie("puntosP1Coo");
  if(prePuntosP1 === "")
  {
    var puntosP1 = 0;
  }
  else
  {
    var puntosP1 = parseInt(prePuntosP1);
  }
  let prePuntosP2 = obtenerCookie("puntosP2Coo");
  if(prePuntosP2 === "")
  {
    var puntosP2 = 0;
  }
  else
  {
    var puntosP2 = parseInt(prePuntosP2);
  }
  let prePuntosP3 = obtenerCookie("puntosP3Coo");
  if(prePuntosP3 === "")
  {
    var puntosP3 = 0;
  }
  else
  {
    var puntosP3 = parseInt(prePuntosP3);
  }
  let prePuntosP4 = obtenerCookie("puntosP4Coo");
  if(prePuntosP4 === "")
  {
    var puntosP4 = 0;
  }
  else
  {
    var puntosP4 = parseInt(prePuntosP4);
  }
  let preVidasP1 = obtenerCookie("vidasP1Coo");
  if(preVidasP1 === "")
  {
    var vidasP1 = 9;
  }
  else
  {
    var vidasP1 = parseInt(preVidasP1);
  }
  let preVidasP2 = obtenerCookie("vidasP2Coo");
  if(preVidasP2 === "")
  {
    var vidasP2 = 9;
  }
  else
  {
    var vidasP2 = parseInt(preVidasP2);
  }
  let preVidasP3 = obtenerCookie("vidasP3Coo");
  if(preVidasP3 === "")
  {
    var vidasP3 = 9;
  }
  else
  {
    var vidasP3 = parseInt(preVidasP3);
  }
  let preVidasP4 = obtenerCookie("vidasP4Coo");
  if(preVidasP4 === "")
  {
    var vidasP4 = 9;
  }
  else
  {
    var vidasP4 = parseInt(preVidasP4);
  }
  //Arreglo con las casillas ordenadas que deben existir
  var arrEsc = new Array(30,20,10,11,1,2,3,4,5,15,16,17,18,19,29,39,38,48,47,46,36,
    35,34,33,43,53,54,64,65,66,67,68,78,88,87,86,85,84,83,82,81,71,70,60,50,40);
  //Posiciones iniciales de los jugadores
  let prePosP3 = obtenerCookie("posP3Coo");
  if(prePosP3 === "")
  {
    var posP3 = 0;
  }
  else
  {
    var posP3 = parseInt(prePosP3);
  }
  let prePosP4 = obtenerCookie("posP4Coo");
  if(prePosP4 === "")
  {
    var posP4 = 0;
  }
  else
  {
    var posP4 = parseInt(prePosP4);
  }
  let prePosP1 = obtenerCookie("posP1Coo");
  if(prePosP1 === "")
  {
    var posP1 = 0;
  }
  else
  {
    var posP1 = parseInt(prePosP1);
  }
  let prePosP2 = obtenerCookie("posP2Coo");
  if(prePosP2 === "")
  {
    var posP2 = 0;
  }
  else
  {
    var posP2 = parseInt(prePosP2);
  }
  console.log(posP1 +","+ posP2 +","+ posP3 +","+ posP4);
  //Asegura el valor del dado con el turno detenido
  if (pase == false)
  {
    dadoNum = 0;
  }
  //Establece por primera vez la zona de información
  var avanceP1 = document.createElement("h3");
  avanceP1.setAttribute("id","avanceDado");
  avanceP1.innerText = "Iniciando";
  let body = document.getElementsByTagName("article");
  body[0].appendChild(avanceP1);
  //Funcion que se repite todo el tiempo que el tablero se quiera reiniciar
  function creaTablero()
  {
    if(gusViv > 1);
    {
      //Borra los elementos del paso anterior
      var borrando = document.getElementById("contenedorgen");
      borrando.remove();
      var borrandoCif = document.getElementById("avanceDado");
      borrandoCif.remove();
      //Obtiene el total de casillas
      nums = (numFilas)*(numColumnas);
      increm = 0;
      autos = " ";
      paraCads = 0;
      turnoActual = turno;
      ancho = window.innerWidth;
      alto = window.innerHeight;
      pasoArr = 0;

      arrEsc = new Array(30,20,10,11,1,2,3,4,5,15,16,17,18,19,29,39,38,48,47,46,36,
      35,34,33,43,53,54,64,65,66,67,68,78,88,87,86,85,84,83,82,81,71,70,60,50,40);
      //Esta estructura busca que el turno se cambie en caso de que alguno de los gusanos sea derrotado
      if((turno == "P1")&&(vidasP1 == "Fin"))
      {
        if(vidasP2 != "Fin")
        {
          turno == "P2";
          turnoE == "P3";
        }
        else if(vidasP3 != "Fin")
        {
          turno == "P3";
          turnoE == "P4";
        }
        else if(vidasP4 != "Fin")
        {
          turno == "P4";
          turnoE == "P1";
        }
      }
      if((turno == "P2")&&(vidasP2 == "Fin"))
      {
        if(vidasP3 != "Fin")
        {
          turno == "P3";
          turnoE == "P4";
        }
        else if(vidasP4 != "Fin")
        {
          turno == "P4";
          turnoE == "P1";
        }
        else if(vidasP1 != "Fin")
        {
          turno == "P1";
          turnoE == "P2";
        }
      }
      if((turno == "P3")&&(vidasP3 == "Fin"))
      {
        if(vidasP4 != "Fin")
        {
          turno == "P4";
          turnoE == "P1";
        }
        else if(vidasP1 != "Fin")
        {
          turno == "P1";
          turnoE == "P2";
        }
        else if(vidasP2 != "Fin")
        {
          turno == "P2";
          turnoE == "P3";
        }
      }
      if((turno == "P4")&&(vidasP4 == "Fin"))
      {
        if(vidasP1 != "Fin")
        {
          turno == "P1";
          turnoE == "P2";
        }
        else if(vidasP2 != "Fin")
        {
          turno == "P2";
          turnoE == "P3";
        }
        else if(vidasP3 != "Fin")
        {
          turno == "P3";
          turnoE == "P4";
        }
      }

      document.onkeyup = teclado;
      //Maniene fijos los valores del dado sin la apuesta y la apuesta en caso de estár detenido el juego
      if(pase == false){
        dadoSin = 0;
        apuesta = 0;
      }

      //Recuadro de información
      var avanceP1 = document.createElement("p");
      avanceP1.setAttribute("id","avanceDado");
      avanceP1.innerHTML =
      "<h4>Es turno de " + turnoE + ", selecciona un número [1,2,3] y avanza.</h4><h3>Número Apostado = "
       + apuesta + "<br>Número Aleatorio = " + dadoSin + "<br>Total = " + pasoAdelante +
      "</h3><br> Pos = " + (posP1 + 1) +  " Pts = " + puntosP1 + " Ps = " + vidasP1 + "<img src = '../Statics/IMG/play1sf.png'> " +
      "<br>Pos = " + (posP2 + 1) + " Pts = " + puntosP2 + " Ps = " + vidasP2 + "<img src = '../Statics/IMG/play2sf.png'> " +
      "<br>Pos = " + (posP3 + 1) + " Pts = " + puntosP3 +  " Ps = " + vidasP3 + "<img src = '../Statics/IMG/play3sf.png'> " +
      "<br>Pos = " + (posP4 + 1) + " Pts = " + puntosP4 +  " Ps = " + vidasP4 + "<img src = '../Statics/IMG/play4sf.png'> ";
      let body = document.getElementsByTagName("article");
      body[0].appendChild(avanceP1);

      //Detiene el paso de los gusanos que han sido derrotados
      if((pase == true) && (dadoNum != 0))
      {
        if(turno === "P4")
        {
          if(posP4 < ((arrEsc.length)-1) )
          {
            if(vidasP4 === "Fin")
            {
              posP4 = 0;
              dadoNum = 0;
              pasoAdelante = 0;
              pase = false;
            }
            else
            {
              posP4 = posP4 + 1;
              dadoNum = dadoNum - 1;
            }
          }
          else
          {
            posP4 = 0;
          }
        }
        else if(turno === "P3")
        {
          if(posP3 < ((arrEsc.length)-1) )
          {
            if(vidasP3 === "Fin")
            {
              posP3 = 0;
              dadoNum = 0;
              pasoAdelante = 0;
              pase = false;
            }
            else
            {
              posP3 = posP3 + 1;
              dadoNum = dadoNum - 1;
            }
          }
          else
          {
            posP3 = 0;
          }
        }
        else if(turno === "P2")
        {
          if(posP2 < ((arrEsc.length)-1) )
          {
            if(vidasP2 === "Fin")
            {
              posP2 = 0;
              dadoNum = 0;
              pasoAdelante = 0;
              pase = false;
            }
            else
            {
              posP2 = posP2 + 1;
              dadoNum = dadoNum - 1;
            }
          }
          else
          {
            posP2 = 0;
          }
        }
        else if(turno === "P1")
        {
          if(posP1 < ((arrEsc.length)-1) )
          {
            if(vidasP1 === "Fin")
            {
              posP1 = 0;
              dadoNum = 0;
              pasoAdelante = 0;
              pase = false;
            }
            else
            {
              posP1 = posP1 + 1;
              dadoNum = dadoNum - 1;
            }
          }
          else
          {
            posP1 = 0;
          }
        }
      }
      else if((pase != false)&&(dadoNum == 0))
      {
        pase = false;
        pasoAdelante = 0;
      }

      //Crear Tablero con posición actualizada
      while (paraCads < numColumnas )
      {
        autos = autos + "auto ";
        paraCads = paraCads + 1;
      }
      var conten = document.createElement("div");
      conten.setAttribute("style","display: grid; grid-template-columns:" + autos + "; width:" + (ancho)*(0.30) + "px; height:" + (alto)*(.56) + "px")
      conten.setAttribute("id","contenedorgen");
      conten.classList.add("tamano");
      body[0].appendChild(conten);


      //Posicionamiento de casillas a partir del arreglo de arriba con las especificaciones de casillas especiales, verifica los tipos de casillas
      while(increm < nums)
      {
        var casilla = document.createElement("div");
        pasoArr = 0;
        while(pasoArr < 90)
        {
          if(arrEsc[pasoArr] === increm)
          {
            if(pasoArr === posP4)
            {
              if(vidasP4 != "Fin")
              {
                casilla.setAttribute("class","filaP4");
                casilla.innerText = pasoArr + 1;
              }
              else
              {
                casilla.setAttribute("class","filaN");
                casilla.innerText = pasoArr + 1;
              }
            }
            if(pasoArr === posP3)
            {
              if(vidasP3 != "Fin")
              {
                casilla.setAttribute("class","filaP3");
                casilla.innerText = pasoArr + 1;
              }
              else
              {
                casilla.setAttribute("class","filaN");
                casilla.innerText = pasoArr + 1;
              }
            }
            if(pasoArr === posP2)
            {
              if(vidasP2 != "Fin")
              {
                casilla.setAttribute("class","filaP2");
                casilla.innerText = pasoArr + 1;
              }
              else
              {
                casilla.setAttribute("class","filaN");
                casilla.innerText = pasoArr + 1;
              }
            }
            if(pasoArr === posP1)
            {
              if(vidasP1 != "Fin")
              {
                casilla.setAttribute("class","filaP1");
                casilla.innerText = pasoArr + 1;
              }
              else
              {
                casilla.setAttribute("class","filaN");
                casilla.innerText = pasoArr + 1;
              }
            }
            if((pasoArr !== posP1)&&(pasoArr !== posP2)&&(pasoArr !== posP3)&&(pasoArr !== posP4))
            {
              if((pasoArr == casRe1)||(pasoArr == casRe2))
              {
                casilla.setAttribute("class","casRe");
                casilla.innerHTML = pasoArr + 1 + "<span><br>Vida+</span>";
              }
              else
              {
                casilla.setAttribute("class","filaN");
                casilla.innerText = pasoArr + 1;
              }
            }
          }
          pasoArr = pasoArr + 1;
        }
        let div = document.getElementsByTagName("div");
        div[0].prepend(casilla);
        increm = increm + 1;
      }

      //Administra el funcionamiento de las dos casillas especiales
      if(pase == false)
      {
        //Punto Extra verifica los posibles casos y otorga vidas y puntos extra
        if((casRe1 == posP1)||(casRe1 == posP2)||(casRe1 == posP3)||(casRe1 == posP4))
        {
          if(casRe1 == posP1)
          {
            vidasP1 = vidasP1 + 4;
            puntosP1 = puntosP1 + 50;
          }
          else if(casRe1 == posP2)
          {
            vidasP2 = vidasP2 + 4;
            puntosP2 = puntosP2 + 50;
          }
          else if(casRe1 == posP3)
          {
            vidasP3 = vidasP3 + 4;
            puntosP3 = puntosP3 + 50;
          }
          else if(casRe1 == posP4)
          {
            vidasP4 = vidasP4 + 4;
            puntosP4 = puntosP4 + 50;
          }
          //Al comprobar el contacto con alguno de los jugadores se posiciona en un nuevo lugar
          while((casRe1 == posP1)||(casRe1 == posP2)||(casRe1 == posP3)||(casRe1 == posP4))
          {
            casRe1 = (Math.round(Math.random()*22));
          }
        }
        if((casRe2 == posP1)||(casRe2 == posP2)||(casRe2 == posP3)||(casRe2 == posP4))
        {
          if(casRe2 == posP1)
          {
            vidasP1 = vidasP1 + 4;
            puntosP1 = puntosP1 + 50;
          }
          else if(casRe2 == posP2)
          {
            vidasP2 = vidasP2 + 4;
            puntosP2 = puntosP2 + 50;
          }
          else if(casRe2 == posP3)
          {
            vidasP3 = vidasP3 + 4;
            puntosP3 = puntosP3 + 50;
          }
          else if(casRe2 == posP4)
          {
            vidasP4 = vidasP4 + 4;
            puntosP4 = puntosP4 + 50;
          }
          while((casRe2 == posP1)||(casRe2 == posP2)||(casRe2 == posP3)||(casRe2 == posP4))
          {
            casRe2 = ((Math.round(Math.random()*22)) + 22);
          }
        }
      }

      //Administrador de muerte verifica cuando se han acabado las vidas de algún jugador y las bloquea junto a sus posibilidades de avance
      if(dadoNum == 0)
      {
        if((isNaN(vidasP1) == false)&&(vidasP1 == 0))
        {
          vidasP1 = "Fin"
          gusViv = gusViv - 1;
          posP1 = 100;
        }
        if((isNaN(vidasP2) == false)&&(vidasP2 == 0))
        {
          vidasP2 = "Fin"
          gusViv = gusViv - 1;
          posP2 = 100;
        }
        if((isNaN(vidasP3) == false)&&(vidasP3 == 0))
        {
          vidasP3 = "Fin"
          gusViv = gusViv - 1;
          posP3 = 100;
        }
        if((isNaN(vidasP4) == false)&&(vidasP4 == 0))
        {
          vidasP4 = "Fin"
          gusViv = gusViv - 1;
          posP4 = 100;
        }
      }

      //Evento de teclado que verifica la tecla presionada para la apuesta de número
      function teclado(event)
      {
        enter = event.keyCode;
        if(((enter == 49)||(enter == 50)||(enter == 51))&&(pase == false))
        {
          if(enter == 49)
          {
            apuesta = 1;
          }
          else if(enter == 50)
          {
            apuesta = 2;
          }
          else if(enter == 51)
          {
            apuesta = 3;
          }
          pasoAdelante = dadoNum;
          if(turno === "P3")
          {
            pase = true;
            dadoNum = (Math.round(Math.random()*3) + apuesta);
            dadoSin = dadoNum - apuesta;
            pasoAdelante = dadoNum;
            //Realiza el cambio de turno al siguiente jugador
            turno = "P4";
            turnoE = "P1";
            if(vidasP4 != "Fin")
            {
              vidasP4 = vidasP4 - 1;
            }
          }
          else if(turno === "P4")
          {
            pase = true;
            dadoNum = (Math.round(Math.random()*3) + apuesta);
            dadoSin = dadoNum - apuesta;
            pasoAdelante = dadoNum;
            turno = "P1";
            turnoE = "P2";
            if(vidasP1 != "Fin")
            {
              vidasP1 = vidasP1 - 1;
            }
          }
          else if(turno === "P1")
          {
            pase = true;
            dadoNum = (Math.round(Math.random()*3) + apuesta);
            dadoSin = dadoNum - apuesta;
            pasoAdelante = dadoNum;
            turno = "P2";
            turnoE = "P3";
            if(vidasP2 != "Fin")
            {
              vidasP2 = vidasP2 - 1;
            }
          }
          else if(turno === "P2")
          {
            pase = true;
            dadoNum = (Math.round(Math.random()*3) + apuesta);
            dadoSin = dadoNum - apuesta;
            pasoAdelante = dadoNum;
            turno = "P3";
            turnoE = "P4";
            if(vidasP3 != "Fin")
            {
              vidasP3 = vidasP3 - 1;
            }
          }
        }
      }
    }
    if(gusViv == 1)
    {
      //Termina el juego en caso de que solo quede un gusanito
      function juegoloop()
      {
        if(para === false)
        {
          var elimina = document.getElementById("comenzar");
          elimina.remove();

          document.onkeyup = listo;
          //Coloca en pantalla al gusano ganaor
          var present = document.createElement("h1");
          present.setAttribute("id","comenzar");
          if(vidasP1 != "Fin")
          {
            present.innerHTML = "Juego terminado, el ganador es: P1<br><img src = '../Statics/IMG/play1sf.png'><br>La puntuación de la partida es: "
             + (puntosP1+puntosP2+puntosP3+puntosP4) + "<br>Presiona Espacio para volver a empezar";
          }
          else if(vidasP2 != "Fin")
          {
            present.innerHTML = "Juego terminado, el ganador es: P2<br><img src = '../Statics/IMG/play2sf.png'><br>La puntuación de la partida es: "
             + (puntosP1+puntosP2+puntosP3+puntosP4) + "<br>Presiona Espacio para volver a empezar";
          }
          else if(vidasP3 != "Fin")
          {
            present.innerHTML = "Juego terminado, el ganador es: P3<br><img src = '../Statics/IMG/play3sf.png'><br>La puntuación de la partida es: "
             + (puntosP1+puntosP2+puntosP3+puntosP4) + "<br>Presiona Espacio para volver a empezar";
          }
          else if(vidasP4 != "Fin")
          {
            present.innerHTML = "Juego terminado, el ganador es: P4<br><img src = '../Statics/IMG/play4sf.png'><br>La puntuación de la partida es: "
             + (puntosP1+puntosP2+puntosP3+puntosP4) + "<br>Presiona Espacio para volver a empezar";
          }
          let pantalla = document.getElementsByTagName("article");
          pantalla[0].appendChild(present);
        }
        //Reinicia la página tras haber ganado
        function listo(event)
        {
          espacio = event.keyCode;
          if(espacio === 32)
          {
            var c = new Date();

            c.setTime(c.getTime()-1);

            document.cookie = "casReCoo1 =" + casRe1 + " ;expires=" + c.toGMTString();
            document.cookie = "casReCoo2 =" + casRe2 + " ;expires=" + c.toGMTString();
            document.cookie = "turnoCoo =" + turno + " ;expires=" + c.toGMTString();
            document.cookie = "turnoECoo =" + turnoE + " ;expires=" + c.toGMTString();
            document.cookie = "puntosP1Coo =" + puntosP1 + " ;expires=" + c.toGMTString();
            document.cookie = "puntosP2Coo =" + puntosP2 + " ;expires=" + c.toGMTString();
            document.cookie = "puntosP3Coo =" + puntosP3 + " ;expires=" + c.toGMTString();
            document.cookie = "puntosP4Coo =" + puntosP4 + " ;expires=" + c.toGMTString();
            document.cookie = "vidasP1Coo =" + vidasP1 + " ;expires=" + c.toGMTString();
            document.cookie = "vidasP2Coo =" + vidasP2 + " ;expires=" + c.toGMTString();
            document.cookie = "vidasP3Coo =" + vidasP3 + " ;expires=" + c.toGMTString();
            document.cookie = "vidasP4Coo =" + vidasP4 + " ;expires=" + c.toGMTString();
            document.cookie = "vidasP4Coo =" + vidasP4 + " ;expires=" + c.toGMTString();
            document.cookie = "posP1Coo =" + posP1 + " ;expires=" + c.toGMTString();
            document.cookie = "posP2Coo =" + posP2 + " ;expires=" + c.toGMTString();
            document.cookie = "posP3Coo =" + posP3 + " ;expires=" + c.toGMTString();
            document.cookie = "posP4Coo =" + posP4 + " ;expires=" + c.toGMTString();
            document.cookie = "gusVivCoo =" + gusViv + " ;expires=" + c.toGMTString();
            var borrando = document.getElementById("contenedorgen");
            para = true;
            var elimina = document.getElementById("comenzar");
            elimina.remove();
            window.location.reload();
          }
        }
        //Este timeout repite la función
        setTimeout(() =>
        {
          juegoloop();
        }, 100);
      }
      //Tras termindo el juego, establece la pantalla de finalización por primera vez
      function juegoTerm()
      {

        borrando.remove();
        var borrandoCif = document.getElementById("avanceDado");
        borrandoCif.remove();

        var present = document.createElement("h1");
        present.setAttribute("id","comenzar");
        if(vidasP1 != "Fin")
        {
          present.innerHTML = "Juego terminado, el ganador es: P1"
        }
        else if(vidasP2 != "Fin")
        {
          present.innerHTML = "Juego terminado, el ganador es: P2"
        }
        else if(vidasP3 != "Fin")
        {
          present.innerHTML = "Juego terminado, el ganador es: P3"
        }
        else if(vidasP4 != "Fin")
        {
          present.innerHTML = "Juego terminado, el ganador es: P4"
        }
        let pantalla = document.getElementsByTagName("article");
        pantalla[0].appendChild(present);

        setTimeout(() =>
        {
          juegoloop();
        }, 100);
      }
      juegoTerm();
    }

    //Guardado especial de cookies en cada momento para mantener el estado de juego
    var c = new Date();

    c.setTime(c.getTime()+1000*60*50);

    document.cookie = "casReCoo1 =" + casRe1 + " ;expires=" + c.toGMTString();
    document.cookie = "casReCoo2 =" + casRe2 + " ;expires=" + c.toGMTString();
    document.cookie = "turnoCoo =" + turno + " ;expires=" + c.toGMTString();
    document.cookie = "turnoECoo =" + turnoE + " ;expires=" + c.toGMTString();
    document.cookie = "puntosP1Coo =" + puntosP1 + " ;expires=" + c.toGMTString();
    document.cookie = "puntosP2Coo =" + puntosP2 + " ;expires=" + c.toGMTString();
    document.cookie = "puntosP3Coo =" + puntosP3 + " ;expires=" + c.toGMTString();
    document.cookie = "puntosP4Coo =" + puntosP4 + " ;expires=" + c.toGMTString();
    document.cookie = "vidasP1Coo =" + vidasP1 + " ;expires=" + c.toGMTString();
    document.cookie = "vidasP2Coo =" + vidasP2 + " ;expires=" + c.toGMTString();
    document.cookie = "vidasP3Coo =" + vidasP3 + " ;expires=" + c.toGMTString();
    document.cookie = "vidasP4Coo =" + vidasP4 + " ;expires=" + c.toGMTString();
    document.cookie = "vidasP4Coo =" + vidasP4 + " ;expires=" + c.toGMTString();
    document.cookie = "posP1Coo =" + posP1 + " ;expires=" + c.toGMTString();
    document.cookie = "posP2Coo =" + posP2 + " ;expires=" + c.toGMTString();
    document.cookie = "posP3Coo =" + posP3 + " ;expires=" + c.toGMTString();
    document.cookie = "posP4Coo =" + posP4 + " ;expires=" + c.toGMTString();
    document.cookie = "gusVivCoo =" + gusViv + " ;expires=" + c.toGMTString();

    setTimeout(() =>
    {
      creaTablero();
    }, 250);
  }

  //Creación inicial del tablero
  while (paraCads < numColumnas )
  {
    autos = autos + "auto ";
    paraCads = paraCads + 1;
  }
  var conten = document.createElement("div");
  conten.setAttribute("style","display: grid; grid-template-columns:" + autos + "; width:" + (ancho)*(0.30) + "px; height:" + (alto)*(.56) + "px");
  conten.setAttribute("id","contenedorgen");
  conten.classList.add("tamano");
  body[0].appendChild(conten);

  //Posiciona por primera vez las casillas
  while(increm < nums)
  {
    var casilla = document.createElement("div");
    pasoArr = 0;
    while(pasoArr < 90)
    {
      if(arrEsc[pasoArr] === increm)
      {
        casilla.setAttribute("class","filaN");
        casilla.innerText = pasoArr + 1;
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
  }, 5);
}


//Función de la pantalla de inicio
function panInicio()
{
  if(detente === false)
  {
    var elimina = document.getElementById("comenzar");
    elimina.remove();

    document.onkeyup = listo;

    var present = document.createElement("h1");
    present.setAttribute("id","comenzar");
    present.innerHTML = "Presiona Espacio para comenzar..."
    let pantalla = document.getElementsByTagName("article");
    pantalla[0].appendChild(present);
  }
  //Evento que espera se presione la tecla espacio
  function listo(event)
  {
    espacio = event.keyCode;
    if(espacio === 32)
    {
      console.log("más listo");
      detente = true;
      var elimina = document.getElementById("comenzar");
      elimina.remove();
      elTodo();
    }
  }

  setTimeout(() =>
  {
    panInicio();
  }, 100);
}

let espacio = 0;
let detente = false;
let para = false;

var present = document.createElement("h1");
present.setAttribute("id","comenzar");
present.innerHTML = "Presiona Espacio para comenzar..."
let pantalla = document.getElementsByTagName("article");
pantalla[0].appendChild(present);
//Envía a la función que se repite
panInicio();
