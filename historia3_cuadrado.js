
let botonColor = document.querySelector(".boton1");
let botonContador = document.querySelector(".boton2");
let color = document.querySelector(".cuadroColoreado");
let texto = document.querySelector(".texto-interactivo");
let contador = 0;
botonColor.addEventListener("click", function () {
    color.classList.toggle("black");
    contador = contador + 1;
});
botonContador.addEventListener("click", function () {
    if(color.classList.contains("black")){
        texto.style.color = "white";
        texto.textContent = contador + " Clicks!!";
    }else{
        texto.style.color = "black";
        texto.textContent = contador + " Clicks!!";
    }
    if(contador === 1) {
        texto.textContent = contador + " Click!!";
    }
}); 
