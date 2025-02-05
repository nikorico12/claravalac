document.addEventListener('wheel', function(event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado de desplazamiento
    if (event.deltaY > 0) {
        nextPage();
    } else {
        previousPage();
    }
}, { passive: false }); // Asegurar que el evento no sea pasivo para poder prevenirlo

let currentPage = 0;
const pages = document.querySelectorAll('.page');

function nextPage() {
    if (currentPage < pages.length - 1) {
        currentPage++;
        scrollToPage();
    }
}

function previousPage() {
    if (currentPage > 0) {
        currentPage--;
        scrollToPage();
    }
}

function scrollToPage() {
    pages[currentPage].scrollIntoView({ behavior: 'smooth' });
}
