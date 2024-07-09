document.addEventListener('DOMContentLoaded', function() {
    const fechaRecogidaInput = document.getElementById('fecha-recogida');
    const horaRecogidaInput = document.getElementById('hora-recogida');
    const fechaDevolucionInput = document.getElementById('fecha-devolucion');
    const horaDevolucionInput = document.getElementById('hora-devolucion');

    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    // Establecer la fecha mínima de recogida y devolución
    fechaRecogidaInput.min = today.toISOString().split('T')[0];
    fechaDevolucionInput.min = tomorrow.toISOString().split('T')[0];

    // Función para ajustar la hora mínima de recogida
    function ajustarHoraRecogida() {
        const selectedFechaRecogida = new Date(fechaRecogidaInput.value);
        const now = new Date();
        if (selectedFechaRecogida.toDateString() === now.toDateString()) {
            // Establecer la hora mínima de recogida para el día actual
            horaRecogidaInput.min = now.toTimeString().slice(0, 5);
        } else {
            // Permitir cualquier hora para días futuros
            horaRecogidaInput.min = '00:00';
        }
    }

    fechaRecogidaInput.addEventListener('change', ajustarHoraRecogida);

    // Inicializar la hora mínima de recogida al cargar la página
    ajustarHoraRecogida();

    document.getElementById('rentalForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const fechaRecogida = fechaRecogidaInput.value;
        const horaRecogida = horaRecogidaInput.value;
        const fechaDevolucion = fechaDevolucionInput.value;
        const horaDevolucion = horaDevolucionInput.value;

        const recogidaDateTime = new Date(`${fechaRecogida}T${horaRecogida}`);
        const devolucionDateTime = new Date(`${fechaDevolucion}T${horaDevolucion}`);
        const now = new Date();

        // Validar que la fecha y hora de recogida no sean anteriores a la fecha y hora actuales
        if (recogidaDateTime < now) {
            alert('La fecha y hora de recogida no pueden ser anteriores a la fecha y hora actuales.');
            return;
        }

        // Validar que la fecha de devolución sea al menos un día después de la fecha de recogida
        if (devolucionDateTime <= recogidaDateTime) {
            alert('La fecha de devolución debe ser al menos un día después de la fecha de recogida.');
            return;
        }

        // Redirigir a la página deseada
        window.location.href = '/ciudad/lima';
    });
});
