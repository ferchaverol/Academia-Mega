document.getElementById("testform").addEventListener("submit", function(e){
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const edad = document.getElementById("edad").value.trim();
    const resultado = document.getElementById("resultado").value

    try{
        validardatos(nombre, edad)
        resultado.textcontent = `hola ${nombre}, tienes ${edad} años`;
        resultado.style.color = "green"
        
    }catch(error){
        console.log("error", error)
        resultado.textcontent = error.menssage
        resultado.style.color = "red"
    }
    
})


function validardatos(nombre,edad){
    console.log("Validando datos....")

    if(!nombre|| edad <= 0){
        throw new Error("Por favor completa todos los datos");
    }
    if(nombre.length > 30){
        throw new Error("El nombre es demasiado largo")
    }

    console.log("Datos validados correctamente")
}