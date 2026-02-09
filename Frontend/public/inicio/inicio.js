// al cargar la pagina, obtiene el nombre y lo pone
fetch('/api/usuario')
    .then(response => response.json())
    .then(data => {
        if (data.nombre) {
            document.querySelector('[data-nombre]').textContent = data.nombre;
            console.log('Nombre cargado: ', data.nombre);
        } else {
            // si no está logueado, se le redirige al login
            window.location.href = '/login/inicio-sesion.html';
        }
    })
    .catch(() => {
        console.error('Error: ', err)
        window.location.href = '/login/inicio-sesion.html'
    });