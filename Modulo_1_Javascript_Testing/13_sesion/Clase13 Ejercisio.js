function expect(actual) {
    return {
        toBe(expected) {
            if (actual === expected) {
                console.log(`pasó: ${actual} === ${expected}`);
            } else {
                console.log(`falló: se esperaba ${expected}, pero se obtuvo ${actual}`);
            }
        },
        toEqual(expected) {
            const passed = JSON.stringify(actual) === JSON.stringify(expected);
            if (passed) {
                console.log("pasó: objetos iguales");
            } else {
                console.log("falló: objetos diferentes");
            }
        }
    };
}

function sumar(a, b) {
    return a + b;
}

function validarUsuario(usuario) {
    // Validamos que tenga nombre y que el correo contenga un @ y un punto
    return (
        typeof usuario.nombre === "string" &&
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(usuario.correo)
    );
}

// Pruebas
expect(sumar(2, 3)).toBe(5);
expect(sumar(0, 0)).toBe(0);

const usuarioValido = { nombre: "Ana", correo: "ana@example.com" };
const usuarioInvalido = { nombre: "Pepe", correo: "pepemail.com" };

expect(validarUsuario(usuarioValido)).toBe(true);
expect(validarUsuario(usuarioInvalido)).toBe(false);
