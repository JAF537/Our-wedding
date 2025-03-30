// Cambiar idioma en la página
function cambiarIdioma(idioma) {
    if (idioma === 'es') {
        document.getElementById('texto-invitacion').innerText = "¡Nos casamos! Acompáñanos en nuestro gran día...";
    } else {
        document.getElementById('texto-invitacion').innerText = "We're getting married! Join us on our big day...";
    }
}

// Mostrar y ocultar los desplegables
function mostrarEventos() {
    let eventos = document.getElementById('eventos');
    eventos.style.display = eventos.style.display === 'block' ? 'none' : 'block';
}

function mostrarAlojamientos() {
    let alojamientos = document.getElementById('alojamientos');
    alojamientos.style.display = alojamientos.style.display === 'block' ? 'none' : 'block';
}

function mostrarGaleria() {
    let galeria = document.getElementById('galeria');
    galeria.style.display = galeria.style.display === 'block' ? 'none' : 'block';
}

function mostrarLocalizacion() {
    let localizacion = document.getElementById('localizacion');
    localizacion.style.display = localizacion.style.display === 'block' ? 'none' : 'block';
}
