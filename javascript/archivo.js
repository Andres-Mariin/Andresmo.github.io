
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
        let overlay = document.querySelector(".overlay");
        lightBox.src = smallImage.src;
        lightBox.classList.toggle("fotoFlotanteActiva");
        body.classList.toggle("bloquearScroll");
        overlay.classList.toggle("activo");
    });
});
    let lightBox = document.querySelector(".lightBox");
    if(lightBox) {
    lightBox.addEventListener("click", function() {
    let body = document.querySelector("body");
    lightBox.classList.toggle("fotoFlotanteActiva");
    body.classList.toggle("bloquearScroll");
})  
    }
    let galeria = document.querySelector(".galeria");
    document.addEventListener("click", function(evento) {
    if(galeria) {
    let menu = document.querySelector(".menu");
    let boton = document.querySelector(".hamburguesa");
    let body = document.querySelector("body");
    let overlay = document.querySelector(".activo");
        if(!boton.contains(evento.target) && !galeria.contains(evento.target)) {
            menu.classList.remove("activo");
            body.classList.remove("bloquearScroll");
            lightBox.classList.remove("fotoFlotanteActiva");
            if(overlay) {
                overlay.classList.remove("activo");
            }
        }
    }
});