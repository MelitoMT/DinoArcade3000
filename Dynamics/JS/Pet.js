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
function interior(file){
    fetch(file)
    .then((respuesta)=>{
        return respuesta.text();
    })
    .then((texto)=>{
        let content = document.querySelector("#content");
        content.innerHTML = texto;
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
        let nav = document.querySelector("#nav");
        nav.innerHTML = text;
        interior('Interior.html')
        document.querySelector("#Inicio").addEventListener("click",()=>{
            interior('Interior.html');
            
        })
        document.querySelector("#DinoJuegos").addEventListener("click",()=>{
            fetch('Menu.html')
            .then((response)=>{
                return response.text();
            })
            .then((text)=>{
                let content = document.querySelector("#content");
                content.innerHTML = text;
            })
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
