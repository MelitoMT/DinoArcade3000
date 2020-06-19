var c = new Date();

c.setTime(c.getTime()+1000*60*24);

let usuario = document.getElementById("nomUsuario").value;
console.log(usuario);
if(usuario === )
{
  console.log("No hay nada");
}
else {
  console.log("Se supone que algo hay")
}

document.cookie = "usuario=" + usuario + ";expires=" + c.toGMTString();
