const btnAbrir = document.querySelector("#Abrir");
const btnCerrar = document.querySelector("#Cerrar");

btnAbrir.addEventListener("click", ()=>{
    const ElementoSuperior = document.querySelector(".superior");
    ElementoSuperior.classList.add("abrir-superior");

    const h1 = document.querySelector("h1");
    const p = document.querySelector("p");
    h1.style.transform = "translateY(-130px)";
    p.style.transform = "translateY(-155px)";
    h1.style.transition = "transform 0.65s ease-in-out";
    p.style.transition = "transform 0.65s ease-in-out";

  setTimeout(()=>{    
    ElementoMensaje = document.querySelector(".mensaje");
    ElementoMensaje.classList.add("abrir-mensaje");
    ElementoSuperior.style.zIndex = -1;
        
  }, 700);
});

btnCerrar.addEventListener("click", ()=>{
    const ElementoSuperior = document.querySelector(".superior");
    

    setTimeout(()=>{    
    const h1 = document.querySelector("h1");
    const p = document.querySelector("p");
    h1.style.transform = "translateY(0px)";
    p.style.transform = "translateY(0px)";

    ElementoSuperior.style.zIndex = 0;
    ElementoSuperior.classList.remove("abrir-superior");
  }, 700);
    
    ElementoMensaje = document.querySelector(".mensaje");
    ElementoMensaje.classList.remove("abrir-mensaje");
});

const Contenedor = document.querySelector("#AbrirContenedor");
Contenedor.addEventListener("click", ()=>{
    const ElementoSuperior = document.querySelector(".superior");
    ElementoSuperior.classList.add("abrir-superior");

    const h1 = document.querySelector("h1");
    const p = document.querySelector("p");
    h1.style.transform = "translateY(-160px)";
    p.style.transform = "translateY(-140px)";
    h1.style.transition = "transform 0.65s ease-in-out";
    p.style.transition = "transform 0.65s ease-in-out";

  setTimeout(()=>{    
    ElementoMensaje = document.querySelector(".mensaje");
    ElementoMensaje.classList.add("abrir-mensaje");
    ElementoSuperior.style.zIndex = -1;
        
  }, 700);
});