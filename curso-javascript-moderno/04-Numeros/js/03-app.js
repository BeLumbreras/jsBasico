let resultado;

// PI
resultado = Math.PI; // 3.1416...

// Redondear
resultado = Math.round(2.8); // 3
resultado = Math.round(2.2); // 2

// Redondear hacia arriba forzado
resultado = Math.ceil(2.1); // 3

// Redondear hacia abajo forzado
resultado = Math.floor(2.9); // 3

// Raíz Cuadrada
resultado = Math.sqrt(36);

// Absoluto
resultado = Math.abs(-200.51);

// Potencia
resultado = Math.pow(3,3);

// Mínimo
resultado = Math.min(3, 5, 0, 21, 55, -1);

// Mínimo
resultado = Math.max(3, 5, 0, 21, 55, -1);

// Aleatorio
resultado = Math.random();

/* Aleatorio dentro de un rango, 0 al 100
 porque el random por defecto saca números decimales menores a 1,
ya que muestra del 0 al 1. */
resultado = Math.floor(Math.random()*100);

console.log(resultado);