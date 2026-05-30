
const boton = document.querySelector(".hamburguesa");
const menu = document.querySelector(".menu");
let overlay = document.querySelector(".overlay");
let body = document.querySelector("body");
boton.addEventListener("click", function () {
    overlay.classList.toggle("activo");
    menu.classList.toggle("activo");
    body.classList.toggle("bloquearScroll");
});
document.addEventListener("click", function(evento) {
    if(!menu.contains(evento.target) && !boton.contains(evento.target)) {
        menu.classList.remove("activo");
        overlay.classList.remove("activo");
        body.classList.remove("bloquearScroll");
    }
});
   