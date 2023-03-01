// Video 20. String Methods - Replace, Slice y Substring

const producto = 'Monitor 20 Pulgadas';

// .replace para reemplazar
console.log(producto);
console.log(producto.replace('Pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor Curvo').replace('Pulgadas', '"'));

// .slice para cortar
// Pueden ser 2 parámetros, uno de inicio, uno de final
console.log(producto.slice(0,10));
/* Puede ser solo 1 parámetro,
a partir del cuál se mostrará el texto no cortado */
console.log(producto.slice(8));
/* En el método slice siempre se debe poner primero número menor,
y luego número mayor, de lo contrario no hará nada */
console.log(producto.slice(2,1));

// Alternativa a slice
// Se comporta igual que slice, corta texto según indicamos
console.log(producto.substring(0,10));
/* Se comporta diferente que slice,
en este caso invierte los números al detectar
que el primero es mayor que el segundo */
console.log(producto.substring(2,1));

const usuario = "Beatriz";

// Muestra una parte del texto como la inicial de un nombre
// En caso de substring de caracter inicial a final
console.log(usuario.substring(0,2));

/* En caso de charAt una letra que indiquemos,
lo maneja como un arreglo de letras */
console.log(usuario.charAt(0));