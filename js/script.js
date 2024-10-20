// Definimos una variable global 'carta' que inicialmente tiene el valor "pekka"
var carta = "pekka";

// Cuando la página web termine de cargar, ocultamos los elementos con id "mago" y "duende"
window.addEventListener('load', function () {
	document.getElementById("mago").style.display = "none";  // Oculta el elemento con id "mago"
	document.getElementById("duende").style.display = "none"; // Oculta el elemento con id "duende"
});

// Función que se ejecuta cuando queremos cambiar de carta visible
// 'cual' es el id del nuevo elemento que queremos mostrar
function cambiar(cual) {
	document.getElementById(carta).style.display = "none";  // Oculta la carta actual
	carta = cual;  // Actualiza el valor de la variable 'carta' con la nueva carta
	document.getElementById(carta).style.display = "block"; // Muestra la nueva carta
}

// Seleccionamos el elemento con id 'epica' y añadimos un evento al pasar el ratón sobre él
const epica = document.getElementById('epica');

// Al pasar el ratón por encima de 'epica', se añade la clase 'pekka' para aplicar estilos (como sombra)
epica.addEventListener('mouseover', function () {
	epica.classList.add('pekka');
});

// Al quitar el ratón de encima de 'epica', eliminamos la clase 'pekka' para volver al estilo normal
epica.addEventListener('mouseout', function () {
	epica.classList.remove('pekka');
});

// Seleccionamos el elemento con id 'especial' y añadimos un evento al pasar el ratón sobre él
const especial = document.getElementById('especial');

// Al pasar el ratón por encima de 'especial', se añade la clase 'mago' para aplicar estilos (como sombra)
especial.addEventListener('mouseover', function () {
	especial.classList.add('mago');
});

// Al quitar el ratón de encima de 'especial', eliminamos la clase 'mago' para volver al estilo normal
especial.addEventListener('mouseout', function () {
	especial.classList.remove('mago');
});

// Añadimos funcionalidad para reproducir un sonido al hacer clic en ciertos elementos
// Seleccionamos todos los elementos con la clase 'seleccion'
const seleccion = document.querySelectorAll('.seleccion');

// Seleccionamos el elemento de audio con id 'sonido' que se reproducirá al hacer clic
const sonido = document.getElementById('sonido');

// Añadimos un evento de clic a cada elemento con la clase 'seleccion'
seleccion.forEach(element => {
	element.addEventListener('click', function () {
		sonido.play();  // Reproduce el sonido cuando se hace clic en cualquiera de los elementos
	});
});

//creamos la interaccion con el boton de la musica de fondo
const volumen = document.getElementById('volumen');
const musica = document.getElementById('musica');
const mute = document.getElementById('mute');

let reproduciendo = false;

volumen.addEventListener('click',function () {
	if (reproduciendo) {
		musica.pause();
		mute.src = 'images/mute.svg';
	} else {
		musica.play();
		mute.src = 'images/volume.svg';
	}

	reproduciendo = !reproduciendo;
})


