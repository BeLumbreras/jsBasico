// Video 17. String Methods - includes y length

const producto = 'Monitor 20 Pulgadas';
console.log(producto);

// Conocer la cantidad de letras de la cadena de textos con el método length
console.log(producto.length);

/* indexOf indica la posición de la palabra,
siempre y cuando la escribamos igual,
mayúsculas y minúsculas */
console.log(producto.indexOf('Pulgadas'));

/* includes nos dice si está o no
la palabra que buscamos con true or false */
console.log(producto.includes('Tablet'));
console.log(producto.includes('Monitor'));
console.log(producto.includes('monitor'));
console.log(producto.includes('20'));