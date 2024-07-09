 const imagenes = document.querySelectorAll('.carruselxd img');
        let imagenActual = 0;

        function mostrarImagen(index) {
            imagenes.forEach(imagen => imagen.classList.add('escondido'));
            imagenes[index].classList.remove('escondido');
            imagenActual = index;
        }

        document.querySelector('.anterior').addEventListener('click', () => {
            if (imagenActual === 0) {
                imagenActual = imagenes.length - 1;
            } else {
                imagenActual--;
            }
            mostrarImagen(imagenActual);
        });

        document.querySelector('.siguiente').addEventListener('click', () => {
            if (imagenActual === imagenes.length - 1) {
                imagenActual = 0;
            } else {
                imagenActual++;
            }
            mostrarImagen(imagenActual);
        });

        document.getElementById('continueButton').addEventListener('click', function() {
            window.location.href = '/pre/compra';
        });

        mostrarImagen(0); /* Muestra la imagen inicial */