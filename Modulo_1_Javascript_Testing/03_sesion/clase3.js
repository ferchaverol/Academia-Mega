//saludar("Fernando");

//function saludar(nombre){
//    console.log(`Hola, ${nombre}`)
//}

//saludar("Fernando");

//let saludar1 = function(nombre){
//    console.log(`Hola, ${nombre}`)
//}
//saludar("Fernando");

//let saludar2 = (nombre)=> console.log(`Hola,${nombre}`)
//saludar2("Fernando")


//function sumar(a,b){
//    return a +b;
//}
//console.log(sumar(5000, 453));

//console.log(restar(10,4))

//const multiplicar =(a, b)=> a * b;
//console.log(multiplicar(4, 2))


//const sumar = (a, b) =>{
//    let resultado = a + b;
//    return resultado;
//}

//console.log(sumar(3,7))


//let numero;

//let mensajeGlobal = "Hola desde afuera";

//function ejemploScope(numero, dato, resultado){
//    numero++;

//    let mensajeGlobal = "Hola desde adentro";
//    console.log(mensajeGlobal);
//    console.log(mensajeLocal);
//    console.log(numero);
//}

//numero = 2
//ejemploScope();
//console.log(mensajeGlobal);
//console.log(mensajeLocal);
//console.log(numero);


//closure

function contador(){
   let cuenta = 0;
   return function (){
       cuenta ++;
       return cuenta;
   };
}

const incrementar = contador();

console.log(incrementar());
console.log(incrementar());
console.log(incrementar());
console.log(incrementar());
console.log(incrementar());
console.log(incrementar());


//Ejercicio
//crear una funcion que debuelva otra funcion que multiplica por un numero especifico

function multiplicador(factor){
    return function(numero){
        return numero * factor;
    }
}
const duplicar = multiplicador(5);
const triplicar = multiplicador(6);

console.log(duplicar(5));
console.log(triplicar(5));

