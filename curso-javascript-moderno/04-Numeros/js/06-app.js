// Video 28. Convertir Strings a Números

const numero1 = "20";
const numero2 = "20.2";
const numero3 = "Uno";
const numero4 = 20.2;

console.log(numero1);

// Parsear strings a number
console.log(Number.parseInt(numero1));
console.log(Number.parseFloat(numero2));
console.log(Number.parseInt(numero3));

// Revisas si un número es entero o no
console.log(Number.isInteger(numero4));
console.log(Number.isInteger(numero3));