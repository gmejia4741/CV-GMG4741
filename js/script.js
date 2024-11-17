// Selecciona el header y define variables para el control del desplazamiento
const header = document.getElementById('main-header');
let lastScrollY = window.scrollY;
let headerVisible = true;

// Función para mostrar/ocultar el header según el desplazamiento
function handleScroll() {
    if (window.scrollY > lastScrollY && headerVisible) {
        header.classList.add('hidden');
        headerVisible = false;
    } else if (window.scrollY < lastScrollY && !headerVisible) {
        header.classList.remove('hidden');
        headerVisible = true;
    }
    
    // Cambiar color del header si el usuario baja la página
    if (window.scrollY > 50) {
        header.classList.add('scrolled'); // Añadir clase cuando se baja
    } else {
        header.classList.remove('scrolled'); // Quitar clase cuando se vuelve a la parte superior
    }

    lastScrollY = window.scrollY;
}

// Función para mostrar el header cuando el mouse está cerca de la parte superior
function handleMouseMove(e) {
    if (e.clientY < 50 && !headerVisible) {
        header.classList.remove('hidden');
        headerVisible = true;
    }
}

// Añade los event listeners para el scroll y el movimiento del mouse
window.addEventListener('scroll', handleScroll);
window.addEventListener('mousemove', handleMouseMove);
