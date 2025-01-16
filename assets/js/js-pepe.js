function mostrarDetalles(tipo) {
    const modal = document.getElementById('modalDetalles');
    const titulo = document.getElementById('modalTitulo');
    const info = document.getElementById('modalInfo');

    const modalHTML = `
        <div style="
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            padding: 20px;
        ">
            <button class="btn-vender" onclick="abrirModalRetos()" style="
                background: #00ffff;
                color: #0a192f;
                padding: 15px 30px;
                border: none;
                border-radius: 8px;
                font-size: 18px;
                font-weight: bold;
                cursor: pointer;
                transition: all 0.3s ease;
                box-shadow: 0 0 15px rgba(0, 243, 255, 0.3);
            ">Vender</button>
        </div>
    `;

    info.innerHTML = modalHTML;
    modal.style.display = "block";

    // Event listener para cerrar al hacer clic fuera
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}