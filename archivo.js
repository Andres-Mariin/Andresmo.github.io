
const boton = document.querySelector(".hamburguesa");
const menu = document.querySelector(".menu");
boton.addEventListener("click", function () {
    menu.classList.toggle("activo");
});
document.addEventListener("click", function(evento) {
    if(!menu.contains(evento.target) && !boton.contains(evento.target)) {
        menu.classList.remove("activo");
    }
});
   