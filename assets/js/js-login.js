document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse-vendedor").addEventListener("click", function() { register('vendedor'); });
document.getElementById("btn__registrarse-cliente").addEventListener("click", function() { register('cliente'); });
document.getElementById("btn__registrarse-empresa").addEventListener("click", function() { register('empresa'); });
window.addEventListener("resize", anchoPage);

// Mantenemos las variables existentes
var formulario_login = document.querySelector(".formulario__login");
var formulario_register_vendedor = document.querySelector(".formulario__register-vendedor");
var formulario_register_cliente = document.querySelector(".formulario__register-cliente");
var formulario_register_empresa = document.querySelector(".formulario__register-empresa");
var contenedor_login_register = document.querySelector(".contenedor__login-register");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");

// Función modificada para anchoPage
function anchoPage() {
    if (window.innerWidth > 850) {
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "block";
    } else {
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        // Aseguramos que los otros formularios estén ocultos
        ocultarFormularios();
    }
}

// Nueva función para ocultar todos los formularios excepto el login
function ocultarFormularios() {
    formulario_register_vendedor.style.display = "none";
    formulario_register_cliente.style.display = "none";
    formulario_register_empresa.style.display = "none";
}

// Función modificada para iniciar sesión
function iniciarSesion() {
    if (window.innerWidth > 850) {
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "10px";
        ocultarFormularios();
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.opacity = "0";
    } else {
        // En móvil, mantenemos todo compacto
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        ocultarFormularios();
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "none";
        // Reseteamos posiciones
        contenedor_login_register.style.top = "-10px";
    }
}

// Función register modificada
function register(tipo) {
    if (window.innerWidth > 850) {
        formulario_login.style.display = "none";
        caja_trasera_register.style.opacity = "0";
        caja_trasera_login.style.opacity = "1";
        mostrarFormularioRegistro(tipo);
        contenedor_login_register.style.left = "410px";
    } else {
        formulario_login.style.display = "none";
        caja_trasera_register.style.display = "none";
        caja_trasera_login.style.display = "block";
        caja_trasera_login.style.opacity = "1";
        
        // Ocultamos primero todos los formularios
        ocultarFormularios();
        
        // Mostramos el formulario seleccionado sin crear espacio extra
        mostrarFormularioRegistro(tipo);
        
        // Ajustamos la posición del contenedor
        contenedor_login_register.style.left = "0px";
        contenedor_login_register.style.top = "-10px";
    }
}

// Nueva función para mostrar el formulario de registro específico
function mostrarFormularioRegistro(tipo) {
    // Primero ocultamos todos
    ocultarFormularios();
    
    // Luego mostramos el seleccionado
    switch(tipo) {
        case 'vendedor':
            formulario_register_vendedor.style.display = "block";
            formulario_register_vendedor.style.position = "relative";
            break;
        case 'cliente':
            formulario_register_cliente.style.display = "block";
            formulario_register_cliente.style.position = "relative";
            break;
        case 'empresa':
            formulario_register_empresa.style.display = "block";
            formulario_register_empresa.style.position = "relative";
            break;
    }
}

// Event Listeners
document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse-vendedor").addEventListener("click", function() { 
    register('vendedor'); 
});
document.getElementById("btn__registrarse-cliente").addEventListener("click", function() { 
    register('cliente'); 
});
document.getElementById("btn__registrarse-empresa").addEventListener("click", function() { 
    register('empresa'); 
});
window.addEventListener("resize", anchoPage);

// Inicialización
anchoPage();

function iniciarSesion() {
    if (window.innerWidth > 850) {
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "10px";
        formulario_register_vendedor.style.display = "none";
        formulario_register_cliente.style.display = "none";
        formulario_register_empresa.style.display = "none";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.opacity = "0";
    } else {
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register_vendedor.style.display = "none";
        formulario_register_cliente.style.display = "none";
        formulario_register_empresa.style.display = "none";
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "none";
    }
}

function register(tipo) {
    if (window.innerWidth > 850) {
        formulario_login.style.display = "none";
        caja_trasera_register.style.opacity = "0";
        caja_trasera_login.style.opacity = "1";

        if (tipo === 'vendedor') {
            formulario_register_vendedor.style.display = "block";
            formulario_register_cliente.style.display = "none";
            formulario_register_empresa.style.display = "none";
        } else if (tipo === 'cliente') {
            formulario_register_vendedor.style.display = "none";
            formulario_register_cliente.style.display = "block";
            formulario_register_empresa.style.display = "none";
        } else if (tipo === 'empresa') {
            formulario_register_vendedor.style.display = "none";
            formulario_register_cliente.style.display = "none";
            formulario_register_empresa.style.display = "block";
        }
        
        contenedor_login_register.style.left = "410px";
    } else {
        formulario_login.style.display = "none";
        caja_trasera_register.style.display = "none";
        caja_trasera_login.style.display = "block";
        caja_trasera_login.style.opacity = "1";
        
        if (tipo === 'vendedor') {
            formulario_register_vendedor.style.display = "block";
            formulario_register_cliente.style.display = "none";
            formulario_register_empresa.style.display = "none";
        } else if (tipo === 'cliente') {
            formulario_register_vendedor.style.display = "none";
            formulario_register_cliente.style.display = "block";
            formulario_register_empresa.style.display = "none";
        } else if (tipo === 'empresa') {
            formulario_register_vendedor.style.display = "none";
            formulario_register_cliente.style.display = "none";
            formulario_register_empresa.style.display = "block";
        }
        
        contenedor_login_register.style.left = "0px";
    }
}

// Función para llenar los estados según el país seleccionado
function llenarEstados(pais, estadoSelect) {
    const estados = {
        peru: ["Amazonas", "Áncash", "Apurímac", "Arequipa", "Ayacucho", "Cajamarca", "Callao", "Cusco", "Huancavelica", "Huánuco", "Junín", "La Libertad", "Lambayeque", "Lima", "Loreto", "Madre de Dios", "Moquegua", "Pasco", "Piura", "Puno", "San Martín", "Tacna", "Tumbes", "Ucayali"],
        estados_unidos: ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawái", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Luisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Misisipi", "Misuri", "Montana", "Nebraska", "Nevada", "Nueva Hampshire", "Nueva Jersey", "Nuevo México", "Nueva York", "Carolina del Norte", "Dakota del Norte", "Ohio", "Oklahoma", "Oregón", "Pensilvania", "Rhode Island", "Carolina del Sur", "Dakota del Sur", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "Virginia Occidental", "Wisconsin", "Wyoming"],
        venezuela: ["Amazonas", "Anzoátegui", "Apure", "Aragua", "Barinas", "Bolívar", "Carabobo", "Cojedes", "Delta Amacuro", "Falcón", "Guárico", "Lara", "Mérida", "Miranda", "Monagas", "Nueva Esparta", "Portuguesa", "Sucre", "Táchira", "Trujillo", "Yaracuy", "Zulia"],
        colombia: ["Amazonas", "Antioquia", "Arauca", "Atlántico", "Bolívar", "Boyacá", "Caldas", "Caquetá", "Casanare", "Cauca", "Cesar", "Chocó", "Córdoba", "Cundinamarca", "Guainía", "Guaviare", "Huila", "La Guajira", "Magdalena", "Meta", "Nariño", "Norte de Santander", "Putumayo", "Quindío", "Risaralda", "San Andrés y Providencia", "Santander", "Sucre", "Tolima", "Valle del Cauca", "Vaupés", "Vichada"],
        ecuador: ["Azuay", "Bolívar", "Cañar", "Carchi", "Chimborazo", "Cotopaxi", "El Oro", "Esmeraldas", "Galápagos", "Guayas", "Los Ríos", "Manabí", "Morona Santiago", "Napo", "Pastaza", "Pichincha", "Santa Elena", "Santo Domingo de los Tsáchilas", "Sucumbíos", "Tungurahua", "Zamora-Chinchipe"],
        // Agrega más países y sus estados según sea necesario
    };

    // Limpiar las opciones anteriores
    estadoSelect.innerHTML = '<option value="">Selecciona un estado</option>';

    if (estados[pais]) {
        estados[pais].forEach(function(estado) {
            const option = document.createElement("option");
            option.value = estado.toLowerCase();
            option.textContent = estado;
            estadoSelect.appendChild(option);
        });
    }
}

// Eventos para los selectores de país
document.getElementById("pais_empresa").addEventListener("change", function() {
    const estadoSelect = document.getElementById("estado_empresa");
    llenarEstados(this.value, estadoSelect);
});

document.getElementById("pais_vendedor").addEventListener("change", function() {
    const estadoSelect = document.getElementById("estado_vendedor");
    llenarEstados(this.value, estadoSelect);
});

document.getElementById("numero_celular").addEventListener("input", function() {
    this.value = this.value.replace(/[^0-9]/g, ''); // Solo permite números
});

// Mostrar el modal al hacer clic en "Olvidé la contraseña"
document.getElementById("olvidar-contraseña").addEventListener("click", function() {
    document.getElementById("modal").style.display = "flex";
});

// Cerrar el modal
document.getElementById("cerrar-modal").addEventListener("click", function() {
    document.getElementById("modal").style.display = "none";
});

// Función para generar un código aleatorio
function generarCodigo() {
    const numeros = '0123456789';
    const letras = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let codigo = '';

    // Agregar 3 números
    for (let i = 0; i < 3; i++) {
        codigo += numeros.charAt(Math.floor(Math.random() * numeros.length));
    }

    // Agregar 3 letras
    for (let i = 0; i < 3; i++) {
        codigo += letras.charAt(Math.floor(Math.random() * letras.length));
    }

    // Mezclar el código
    return codigo.split('').sort(() => Math.random() - 0.5).join('');
}

// Enviar correo (puedes agregar la lógica para enviar el correo aquí)
document.getElementById("enviar-correo").addEventListener("click", function() {
    const correo = document.getElementById("correo-recuperar").value;
    const codigo = generarCodigo(); // Generar el código aleatorio
    // Lógica para enviar el correo
    alert("Correo enviado a: " + correo);
    document.getElementById("modal").style.display = "none"; // Cerrar modal después de enviar
});

class ParticlesSystem {
    constructor() {
        this.canvas = document.getElementById('particles-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.mousePosition = { x: 0, y: 0 };
        this.dpr = window.devicePixelRatio || 1;
        this.isAnimating = true; // Control de animación
        this.resizeTimeout = null; // Control de resize
        this.scrollTimeout = null; // Control de scroll
        
        // Configuración mejorada
        this.config = {
            particleCount: window.innerWidth < 768 ? 50 : 100,
            particleSize: 2,
            connectionDistance: 110,
            speed: 0.5,
            interactionRadius: 100,
            lineOpacity: 0.5,
            minScrollTimeout: 150 // Tiempo mínimo entre actualizaciones de scroll
        };

        this.init();
        this.setupEventListeners();
    }

    init() {
        this.setCanvasSize();
        this.createParticles();
        this.animate();
    }

    setupEventListeners() {
        // Optimización del evento resize
        window.addEventListener('resize', () => {
            if (this.resizeTimeout) {
                cancelAnimationFrame(this.resizeTimeout);
            }
            this.resizeTimeout = setTimeout(() => {
                this.handleResize();
            }, 200);
        });

        // Optimización del evento mousemove
        document.addEventListener('mousemove', (e) => {
            this.handleMouseMove(e);
        }, { passive: true });

        // Manejo optimizado del scroll
        window.addEventListener('scroll', () => {
            if (!this.scrollTimeout) {
                this.scrollTimeout = setTimeout(() => {
                    this.scrollTimeout = null;
                }, this.config.minScrollTimeout);
            }
        }, { passive: true });
    }

    handleResize() {
        // Guardar las partículas existentes
        const existingParticles = this.particles;

        // Actualizar dimensiones
        this.setCanvasSize();

        // Reubicar partículas existentes proporcionalmente
        this.particles = existingParticles.map(particle => {
            const newParticle = new Particle(this);
            newParticle.x = (particle.x / particle.system.width) * this.width;
            newParticle.y = (particle.y / particle.system.height) * this.height;
            newParticle.velocity = particle.velocity;
            newParticle.alpha = particle.alpha;
            return newParticle;
        });
    }

    setCanvasSize() {
        const container = this.canvas.parentElement;
        const width = container.offsetWidth;
        const height = container.offsetHeight;

        // Configuración de tamaño con prevención de valores inválidos
        this.width = Math.max(width, 1);
        this.height = Math.max(height, 1);

        this.canvas.width = this.width * this.dpr;
        this.canvas.height = this.height * this.dpr;
        this.canvas.style.width = `${this.width}px`;
        this.canvas.style.height = `${this.height}px`;
        
        this.ctx.scale(this.dpr, this.dpr);
    }

    createParticles() {
        this.particles = Array.from({ length: this.config.particleCount }, 
            () => new Particle(this));
    }

    handleMouseMove(e) {
        const rect = this.canvas.getBoundingClientRect();
        this.mousePosition = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        };
    }

    drawConnections() {
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const particle1 = this.particles[i];
                const particle2 = this.particles[j];

                const dx = particle1.x - particle2.x;
                const dy = particle1.y - particle2.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < this.config.connectionDistance) {
                    const opacity = (1 - distance / this.config.connectionDistance) 
                        * this.config.lineOpacity;
                    
                    this.ctx.beginPath();
                    this.ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
                    this.ctx.moveTo(particle1.x, particle1.y);
                    this.ctx.lineTo(particle2.x, particle2.y);
                    this.ctx.stroke();
                }
            }
        }
    }

    animate() {
        if (!this.isAnimating) return;

        this.ctx.clearRect(0, 0, this.width, this.height);
        
        this.particles.forEach(particle => {
            if (particle && typeof particle.update === 'function') {
                particle.update();
            }
        });
        
        this.drawConnections();
        requestAnimationFrame(() => this.animate());
    }

    // Método para detener la animación
    stop() {
        this.isAnimating = false;
    }

    // Método para reanudar la animación
    start() {
        if (!this.isAnimating) {
            this.isAnimating = true;
            this.animate();
        }
    }
}

class Particle {
    constructor(system) {
        this.system = system;
        this.reset();
    }

    reset() {
        // Valores iniciales seguros
        this.x = Math.random() * (this.system.width || window.innerWidth);
        this.y = Math.random() * (this.system.height || window.innerHeight);
        this.velocity = {
            x: (Math.random() - 2) * this.system.config.speed,
            y: (Math.random() - 2) * this.system.config.speed
        };
        this.alpha = 0.8 + Math.random() * 0.2;
    }

    update() {
        if (!this.system || !this.system.width || !this.system.height) return;

        // Actualización de posición con límites seguros
        this.x = Math.max(0, Math.min(this.x + this.velocity.x, this.system.width));
        this.y = Math.max(0, Math.min(this.y + this.velocity.y, this.system.height));

        // Interacción con el mouse
        const dx = this.x - this.system.mousePosition.x;
        const dy = this.y - this.system.mousePosition.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.system.config.interactionRadius) {
            const force = (this.system.config.interactionRadius - distance) 
                / this.system.config.interactionRadius;
            this.velocity.x += (dx / distance) * force * 0.02;
            this.velocity.y += (dy / distance) * force * 0.02;
        }

        // Rebote en los bordes con amortiguación
        if (this.x <= 0 || this.x >= this.system.width) {
            this.velocity.x *= -0.8;
        }
        if (this.y <= 0 || this.y >= this.system.height) {
            this.velocity.y *= -0.8;
        }

        // Dibujar partícula
        this.system.ctx.beginPath();
        this.system.ctx.arc(this.x, this.y, this.system.config.particleSize, 0, Math.PI * 2);
        this.system.ctx.fillStyle = `rgba(0, 255, 236, ${this.alpha})`;
        this.system.ctx.fill();
    }
}

// Inicialización segura del sistema
document.addEventListener('DOMContentLoaded', () => {
    const particleSystem = new ParticlesSystem();
    
    // Manejo de visibilidad de la página
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            particleSystem.stop();
        } else {
            particleSystem.start();
        }
    });
});