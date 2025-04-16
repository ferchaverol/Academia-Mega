//const titulo = document.getElementByid("titulo");
//const parrafos = document.getElementsByClassName("mensaje");
//const botones = document.getElementsByTagName("button");

//const primerparrafo = document.querySelector(".mensaje");
//const todoslosparrafos = document.querySelectorAll(".mensaje");

//titulo.textContent = "Bienvenidos a mi pagina web";
//titulo.style.color = "blue";

//.primerparrafo.innerHTML = "<strong>Texto en negritas!</strong>"

// Cambia el texto al hacer clic
document.getElementById("cambiarTexto").addEventListener("click", function () {
    document.getElementById("titulo").textContent = "Texto cambiado con JavaScript";
});

// Muestra mensaje al hacer clic en el botón
document.getElementById("boton").addEventListener("click", function () {
    document.getElementById("resultado").textContent = "Botón clickeado";
});

// Hover sobre texto: cambia de color al entrar y al salir
const hovertexto = document.getElementById("hovertexto");

hovertexto.addEventListener("mouseover", function () {
    hovertexto.style.color = "red";
});
hovertexto.addEventListener("mouseout", function () {
    hovertexto.style.color = "black";
});

// Hover sobre div: cambia texto y fondo
const hoverdiv = document.getElementById("hoverdiv");

hoverdiv.addEventListener("mouseover", function () {
    hoverdiv.style.color = "red";
    hoverdiv.style.backgroundColor = "black";
});
hoverdiv.addEventListener("mouseout", function () {
    hoverdiv.style.color = "black";
    hoverdiv.style.backgroundColor = "white";
});
