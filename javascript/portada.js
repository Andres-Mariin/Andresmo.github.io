
const boton = document.querySelector(".hamburguesa");
const menu = document.querySelector(".menu");
let overlay = document.querySelector(".overlay");
boton.addEventListener("click", function () {
    overlay.classList.toggle("activo");
    menu.classList.toggle("activo");
});
document.addEventListener("click", function(evento) {
    if(!menu.contains(evento.target) && !boton.contains(evento.target)) {
        menu.classList.remove("activo");
        overlay.classList.remove("activo");
    }
});