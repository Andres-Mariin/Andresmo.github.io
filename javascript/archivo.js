
let boton = document.querySelector(".hamburguesa");
boton.addEventListener("click", function () {
    let menu = document.querySelector(".menu");
    let body = document.querySelector("body");
    menu.classList.toggle("activo");
    body.classList.toggle("bloquearScroll");
});
    let smallImage = document.querySelectorAll(".foto-galeria");
    smallImage.forEach(function(smallImage) {
    smallImage.addEventListener("click", function() {
        let body = document.querySelector("body");
        let lightBox = document.querySelector(".lightBox");
        lightBox.src = smallImage.src;
        lightBox.classList.toggle("fotoFlotanteActiva");
        body.classList.toggle("bloquearScroll");
    });
});
    let lightBox = document.querySelector(".lightBox");
    lightBox.addEventListener("click", function() {
    let body = document.querySelector("body");
    lightBox.classList.toggle("fotoFlotanteActiva");
    body.classList.toggle("bloquearScroll");
})  
    document.addEventListener("click", function(evento) {
    let galeria = document.querySelector(".galeria");
    let menu = document.querySelector(".menu");
    let boton = document.querySelector(".hamburguesa");
    let body = document.querySelector("body");
        if(!boton.contains(evento.target) && !galeria.contains(evento.target)) {
            menu.classList.remove("activo");
            body.classList.remove("bloquearScroll");
            lightBox.classList.remove("fotoFlotanteActiva");
        }
});
