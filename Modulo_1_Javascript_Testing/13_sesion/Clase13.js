document.getElementById("loginform").addEventListener("submit", function(e) {
    e.preventDefault();

    const user = document.getElementById("username").value.trim();
    const pass = document.getElementById("password").value.trim();
    const message = document.getElementById("message");

    if (user === "" || pass === "") {
        message.textContent = "Por favor, completa todos los campos.";
        message.style.color = "red";
        return;
    }

    // Ejemplo simple de validación (puedes reemplazar esto con lógica real)
    if (user === "admin" && pass === "1234") {
        message.textContent = "Login exitoso";
        message.style.color = "green";
    } else {
        message.textContent = "Credenciales incorrectas";
        message.style.color = "red";
    }
});
