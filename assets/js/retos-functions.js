// Función para mostrar detalles del reto
function mostrarDetalles(tipo) {
    const modal = document.getElementById('modalDetalles');
    const titulo = document.getElementById('modalTitulo');
    const info = document.getElementById('modalInfo');

    const detalles = {
        'restaurante': {
            titulo: 'Detalles del Proyecto - Restaurante Italiano',
            // ... resto de la configuración del restaurante
        },
        'ecommerce': {
            titulo: 'Detalles del Proyecto - E-commerce Artesanal',
            // ... resto de la configuración del ecommerce
        }
    };

    // ... resto del código de mostrarDetalles
}

// Función para mostrar confirmación de venta
function mostrarConfirmacionVenta(tipo) {
    const estado = document.querySelector(`[data-categoria="${tipo === 'restaurante' ? 'restaurantes' : 'e-commerce'}"]`).dataset.estado;
    
    const confirmacionHTML = `
        <div id="modalConfirmacion" class="modal-confirmacion">
            <!-- ... HTML del modal de confirmación ... -->
        </div>
    `;
    
    // ... resto del código de mostrarConfirmacionVenta
}

// Función para cerrar modal
function cerrarModal() {
    const modal = document.getElementById('modalDetalles');
    modal.style.display = "none";
}

// Función para filtrar retos
function filtrarRetos() {
    // ... código de filtrado
}

// Exportar las funciones para uso global
window.mostrarDetalles = mostrarDetalles;
window.mostrarConfirmacionVenta = mostrarConfirmacionVenta;
window.cerrarModal = cerrarModal;
window.filtrarRetos = filtrarRetos; 