function validateCreateUserForm() {
    var username = document.getElementById("username").value;
    var role = document.querySelector('input[name="role"]:checked');
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;

    if (username.trim() === "") {
        alert("El campo 'Usuario' no puede estar vacío.");
        return false;
    }

    if (!role) {
        alert("Debe seleccionar un rol.");
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

    if (confirmPassword.trim() === "") {
        alert("El campo 'Confirmar Contraseña' no puede estar vacío.");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden.");
        return false;
    }

    
    return true;
}