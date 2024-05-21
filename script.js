document.getElementById('request-form').addEventListener('submit', function(e) {
    e.preventDefault();

    
    const topic = document.getElementById('topic').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

   
    const newRequest = document.createElement('li');
    newRequest.textContent = `Tema: ${topic}, Fecha: ${date}, Hora: ${time}`;

   
    document.getElementById('pending-requests').appendChild(newRequest);

  
    document.getElementById('request-form').reset();
});

function cerrarSesion() {
    alert('Cerrando sesión...');
   
}

function goToMessaging() {
    alert('Redirigiendo a la mensajería...');
 
}
