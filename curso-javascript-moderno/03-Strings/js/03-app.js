// Video 18. Concatenar un String y Template Strings

const producto = 'Monitor 20 Pulgadas';
const precio = '30 USD';

console.log(producto.concat(' ' + precio));
console.log(producto.concat(' En descuento'));

console.log(producto + " con un precio de: " + precio);
console.log("El producto " + producto + " tiene un precio de " + precio);
console.log("El producto" , producto , "tiene un precio de" , precio);

// EcmaScript 6 introdujo los Templates Strings o Plantillas Literales
console.log(`El producto ${producto} tiene un precio de ${precio}`);