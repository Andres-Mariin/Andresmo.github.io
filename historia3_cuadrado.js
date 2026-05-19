
let botonColor = document.querySelector(".boton1");
let botonContador = document.querySelector(".boton2");
let color = document.querySelector(".cuadroColoreado");
let texto = document.querySelector(".texto-interactivo");
let contador = 0;
botonColor.addEventListener("click", function() {
    contador = contador + 1;
    color.classList.toggle("black");
});
botonContador.addEventListener("click", function() {
    if(texto.textContent !== "") {
        texto.textContent = "";
    }else{
        if(color.classList.contains("black")) {
        texto.style.color = "white";
        texto.textContent = contador + " Clicks!!";
    }else{
        texto.style.color = "black";
        texto.textContent = contador + " Clicks!!";
    }
    if(contador === 1) {
        texto.textContent = contador + " click!!"
    }
    }
});
document.addEventListener("click", function(event) {
    if(!botonContador.contains(event.target) && (botonColor.contains(event.target))) {
        texto.textContent = "";
    }
});