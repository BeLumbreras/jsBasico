const producto = '     Monitor 20 Pulgadas     ';

console.log(producto);
console.log(producto.length);

// Eliminar espacios al inicio
console.log(producto.trimStart());

// Eliminar espacios al final
console.log(producto.trimEnd());

// Eliminar espacios en ambos sentidos con los 2 métodos unidos
// Métodos nuevos, como 1 año aprox al 2022
console.log(producto.trimStart().trimEnd());

// Eliminar espacios en ambos sentidos con un método
// Método más antiguo
console.log(producto.trim());