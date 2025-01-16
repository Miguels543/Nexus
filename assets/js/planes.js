const precios = {
    design: {
        basic: 299,
        premium: 599,
        custom: 999
    },
    ecommerce: {
        basic: 199,
        advanced: 499
    },
    seo: {
        basic: 149,
        advanced: 399
    },
    support: {
        basic: 99,
        priority: 299,
        '24-7': 599
    },
    marketing: {
        basic: 199,
        advanced: 449,
        premium: 799
    },
    security: {
        basic: 149,
        advanced: 399,
        enterprise: 799
    }
};

const presets = {
    startup: {
        design: ['basic'],
        ecommerce: ['basic'],
        seo: ['basic'],
        support: ['basic'],
        marketing: ['basic'],
        security: ['basic']
    },
    growth: {
        design: ['premium'],
        ecommerce: ['basic'],
        seo: ['advanced'],
        support: ['priority'],
        marketing: ['advanced'],
        security: ['advanced']
    },
    enterprise: {
        design: ['custom'],
        ecommerce: ['advanced'],
        seo: ['advanced'],
        support: ['24-7'],
        marketing: ['premium'],
        security: ['enterprise']
    }
};

const descripciones = {
    design: {
        basic: `• Diseño web responsive básico
• Hasta 5 páginas
• Plantilla prediseñada personalizable
• Optimización para móviles`,
        premium: `• Diseño web premium personalizado
• Hasta 10 páginas
• Diseño único adaptado a tu marca
• Animaciones y efectos especiales
• Optimización completa multiplataforma`,
        custom: `• Diseño web totalmente personalizado
• Páginas ilimitadas
• Diseño exclusivo desde cero
• Experiencia de usuario avanzada
• Características personalizadas
• Optimización premium multiplataforma`
    },
    ecommerce: {
        basic: `• Hasta 100 productos
• Carrito de compras básico
• Pagos con PayPal y tarjetas
• Gestión básica de inventario`,
        advanced: `• Productos ilimitados
• Sistema de carrito avanzado
• Múltiples pasarelas de pago
• Gestión completa de inventario
• Sistema de cupones y descuentos
• Integración con marketplaces`
    },
    // ... Añadir descripciones para las demás categorías ...
};

function actualizarPrecio() {
    let total = 0;
    document.querySelectorAll('.feature-checkbox input:checked').forEach(checkbox => {
        const categoria = checkbox.name;
        const nivel = checkbox.value;
        total += precios[categoria][nivel];
    });
    
    document.getElementById('total-price').textContent = `$${total}`;
}

document.querySelectorAll('.feature-checkbox input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        // Desmarcar otros checkboxes en la misma categoría
        const categoria = this.name;
        document.querySelectorAll(`input[name="${categoria}"]`).forEach(cb => {
            if (cb !== this) cb.checked = false;
        });

        // Mostrar/ocultar descripción
        const descripcionDiv = this.closest('.feature-category').querySelector('.feature-description');
        if (this.checked) {
            const descripcion = descripciones[categoria]?.[this.value] || 'Descripción no disponible';
            descripcionDiv.innerHTML = descripcion.replace(/\n/g, '<br>');
            descripcionDiv.classList.add('active');
        } else {
            descripcionDiv.classList.remove('active');
        }

        actualizarPrecio();
    });
});

document.querySelectorAll('.preset-btn').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.preset-btn').forEach(btn => 
            btn.classList.remove('active'));
        
        this.classList.add('active');
        
        const presetName = this.dataset.preset;
        const preset = presets[presetName];
        
        document.querySelectorAll('.feature-checkbox input').forEach(checkbox => {
            checkbox.checked = false;
        });
        
        Object.entries(preset).forEach(([category, features]) => {
            features.forEach(feature => {
                const checkbox = document.querySelector(
                    `.feature-checkbox input[name="${category}"][value="${feature}"]`
                );
                if (checkbox) checkbox.checked = true;
            });
        });
        
        actualizarPrecio();
    });
}); 