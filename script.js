/**
 * FUNCIONALIDAD PRINCIPAL
 * Este script maneja todas las interacciones dinámicas de la página
 */

// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {

    // ========== DROPDOWNS ========== //
    /**
     * Configuración de los menús desplegables
     * - Muestra al hacer hover
     * - Oculta al salir del área
     * - Timeout para evitar parpadeo
     */
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        let timeoutId;
        
        // Mostrar al entrar
        dropdown.addEventListener('mouseenter', function() {
            clearTimeout(timeoutId);
            this.querySelector('.dropdown-contenido').style.display = 'block';
        });
        
        // Ocultar al salir con retraso
        dropdown.addEventListener('mouseleave', function() {
            const contenido = this.querySelector('.dropdown-contenido');
            timeoutId = setTimeout(() => {
                contenido.style.display = 'none';
            }, 300); // Retraso de 300ms para mejor UX
        });
    });

    // ========== EFECTOS HOVER ========== //
    /**
     * Mejora los efectos hover en botones:
     * - Escalado suave
     * - Transición suave
     */
    const buttons = document.querySelectorAll('.nav-btn, .contacto-btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.05)';
            this.style.boxShadow = '0 4px 15px rgba(197, 169, 66, 0.3)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = 'none';
        });
    });

    // ========== REDES SOCIALES ========== //
    /**
     * Maneja los clics en redes sociales
     * - Abre en nueva pestaña
     * - Agrega animación
     */
    document.querySelectorAll('.social-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Animación de pulso
            this.style.transform = 'scale(1.2)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
            
            // Simula apertura de enlace
            const url = this.getAttribute('href');
            if(url !== '#') {
                window.open(url, '_blank');
            }
        });
    });

    // ========== OPTIMIZACIÓN DE RENDIMIENTO ========== //
    // Limpia timeouts al salir de la página
    window.addEventListener('beforeunload', function() {
        dropdowns.forEach(dropdown => {
            clearTimeout(dropdown.timeoutId);
        });
    });
});
