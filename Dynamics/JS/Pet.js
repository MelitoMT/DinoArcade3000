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
function games(file){
    fetch(file)
    .then((respuesta)=>{
        return respuesta.text();
    })
    .then((texto)=>{
        let general = document.querySelector("#general");
        general.innerHTML = texto;
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
            fetch('Menu.html')
            .then((response)=>{
                return response.text();
            })
            .then((text)=>{
                let content = document.querySelector("#content");
                content.innerHTML = text;
/*                 document.querySelector("#Juego1").addEventListener("click",()=>{
                    games('juego1.html');
                })
                document.querySelector("#Juego2").addEventListener("click",()=>{
                    games('Juego2.html');
                })
                document.querySelector("#Juego3").addEventListener("click",()=>{
                    games('Juego3.html');
                })
 */            })
            .catch((error)=>{
                console.log(error.message)
            })
        })
        document.querySelector("#Puntajes").addEventListener("click",()=>{
            contents('Puntajes.html')
        })
        document.querySelector("#Creditos").addEventListener("click",()=>{
            contents('Creditos.html')
        })
        document.querySelector("#Ayuda").addEventListener("click",()=>{
            contents('Ayuda.html')
        })
    })
    .catch((error)=>{
        console.log(error.message)
    })
