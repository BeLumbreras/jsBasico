const nombre = prompt('¿Cuál es tu nombre?', 'Escribir tu nombre');

/* Toma el nombre y lo muestra en pantalla
Utilizar COMILLAS INVERTIDAS Alt+96 `` para strings
que llevan variables al interior */
document.querySelector('.contenido').innerHTML = `${nombre} está aprendiendo JavaScript Moderno`;