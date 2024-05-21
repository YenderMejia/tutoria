function createAccount() {
    window.location.href = 'crear-usuario.html';
}

function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username.trim() === "") {
        alert("El campo 'Usuario' no puede estar vacío.");
        return false;
    }

    if (password.trim() === "") {
        alert("El campo 'Contraseña' no puede estar vacío.");
        return false;
    }

    if (password.length < 6) {
        alert("La 'Contraseña' debe tener al menos 6 caracteres.");
        return false;
    }

    
    return true;
}