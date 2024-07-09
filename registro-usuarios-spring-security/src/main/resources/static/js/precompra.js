document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.carrusel img');
    let currentIndex = 0;

    setInterval(() => {
        images[currentIndex].style.display = 'none';
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].style.display = 'block';
    }, 3000);

    const fechaHoraActual = document.getElementById('fecha-hora-actual');
    const fechaHoraManana = document.getElementById('fecha-hora-manana');

    function mostrarFechaHoraActual() {
        const ahora = new Date();
        const dia = ahora.getDate();
        const mes = ahora.getMonth() + 1; // Los meses van de 0 a 11
        const año = ahora.getFullYear();
        const hora = ahora.getHours();
        const minutos = ahora.getMinutes();

        const textoFechaHoraActual = ` ${hora}:${minutos} horas del ${dia} de ${mes} de ${año}.`;
        fechaHoraActual.textContent = textoFechaHoraActual;
    }

    function mostrarFechaHoraManana() {
        const mañana = new Date();
        mañana.setDate(mañana.getDate() + 1); // Suma 1 día a la fecha actual

        const dia = mañana.getDate();
        const mes = mañana.getMonth() + 1; // Los meses van de 0 a 11
        const año = mañana.getFullYear();
        const hora = mañana.getHours();
        const minutos = mañana.getMinutes();

        const textoFechaHoraManana = ` ${hora}:${minutos} horas.${dia} de ${mes} de ${año},  `;
        fechaHoraManana.textContent = textoFechaHoraManana;
    }

    mostrarFechaHoraActual();
    mostrarFechaHoraManana();

    // Funcionalidad para habilitar/deshabilitar el botón
    const checkboxes = document.querySelectorAll('.terminos');
    const boton = document.querySelector('.botoncito');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const allChecked = Array.from(checkboxes).every(ch => ch.checked);
            boton.disabled = !allChecked;
        });
    });

    // Redirigir al hacer clic en el botón 'botoncito'
    boton.addEventListener('click', () => {
        window.location.href = '/iniciar/sesion'; // Cambiar '/ciudad/lima' por la URL deseada
    });
});
