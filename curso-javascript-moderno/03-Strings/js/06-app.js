const producto = 'Monitor 20 Pulgadas';

// .repeat te va a permitir repetir una cadena de texto
const texto = ' en Promoción'.repeat(2.7);

console.log(texto);
console.log(`${producto}${texto}!!!`);

// .split, dividir un string
const actividad = "Estoy aprendiendo Javascript Moderno";
console.log(actividad.split(" "));

const hobbies = "Leer, caminar, escuchar música, escribir, aprender a programar";
console.log(hobbies.split(", "));
const hobbiesArray = hobbies.split(", ");

document.body.innerHTML = `
    <ul><li>${hobbiesArray[0]}</li></ul>
    <ul><li>${hobbiesArray[1]}</li></ul>
    <ul><li>${hobbiesArray[2]}</li></ul>
    <ul><li>${hobbiesArray[3]}</li></ul>
    <ul><li>${hobbiesArray[4]}</li></ul>`;

const tweet = "Aprendiendo Javascript #JSModernoConJuan";
console.log(tweet.split("#"));