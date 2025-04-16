const usuario = {
    nombre: "Ana",
    edad: 30,
    ciudad: "Madrid"
};

// Convertimos el objeto a texto JSON
const usuariojson = JSON.stringify(usuario);
console.log("JSON en texto:", usuariojson);

// Guardamos el JSON en localStorage
localStorage.setItem("usuario", usuariojson);

// Recuperamos el JSON y lo convertimos de nuevo a objeto
const datosguardados = localStorage.getItem("usuario");
const datosObjetos = JSON.parse(datosguardados);

// Mostramos el objeto
console.log("JSON convertido a objeto:", datosObjetos);

// Eliminamos el ítem del almacenamiento
localStorage.removeItem("usuario");
