
const boton = document.querySelector(".hamburguesa");
const menu = document.querySelector(".menu");
boton.addEventListener("click", function () {
    menu.classList.toggle("activo");
    });