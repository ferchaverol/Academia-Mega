function obtenerUsuario(id) {
    try {
        // Convertir a número si viene como string
        id = Number(id);
        if (isNaN(id)) throw new Error("El id debe ser un número válido");

        const usuarios = { 1: "Ana", 2: "Carlos", 3: "Maria" };

        if (!usuarios.hasOwnProperty(id)) throw new Error("Usuario no encontrado");

        return `✅ Usuario encontrado: ${usuarios[id]}`;
    } catch (error) {
        console.error("❌ Error:", error.message);
        return null;
    }
}

// Pruebas
console.log(obtenerUsuario(2));     // ✅ Usuario encontrado: Carlos
console.log(obtenerUsuario(3));     // ✅ Usuario encontrado: Maria
console.log(obtenerUsuario(5));     // ❌ Usuario no encontrado
console.log(obtenerUsuario("2"));   // ✅ Usuario encontrado: Carlos
console.log(obtenerUsuario("abc")); // ❌ El id debe ser un número válido
