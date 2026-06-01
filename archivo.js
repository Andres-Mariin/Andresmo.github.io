
let boton = document.querySelector(".hamburguesa");
let menu = document.querySelector(".menu");
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

let smallImage = document.querySelectorAll(".fotoPequena");
let lightBox = document.querySelector(".lightBox");
smallImage.forEach(function(smallImage) {
    smallImage.addEventListener("click", function() {
        lightBox.src = smallImage.src;
        lightBox.classList.toggle("fotoFlotanteActiva");
    });
});
lightBox.addEventListener("click", function() {
    lightBox.classList.remove("fotoFlotanteActiva");
})
