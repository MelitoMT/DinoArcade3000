function contents(file){
    fetch(file)
    .then((respuesta)=>{
        return respuesta.text();
    })
    .then((texto)=>{
        let content = document.querySelector("#content");
        content.innerHTML = texto;
    })
    .catch((error)=>{
        console.log(error.message)
    })
}
fetch('Nav.html')
    .then((response)=>{
        return response.text();
    })
    .then((text)=>{
        console.log(text);
        let nav = document.querySelector("#nav");
        nav.innerHTML = text;
        contents('Interior.html')
        document.querySelector("#Inicio").addEventListener("click",()=>{
            contents('Interior.html');
        })
        document.querySelector("#DinoJuegos").addEventListener("click",()=>{
            contents('menuselect.html')
        })
    })
    .catch((error)=>{
        console.log(error.message)
    })
