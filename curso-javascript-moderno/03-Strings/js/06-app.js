const producto = 'Monitor 20 Pulgadas';

// .repeat te va a permitir repetir una cadena de texto
const texto = ' en Promoción'.repeat(3);

console.log(`${producto}${texto}!!!`);

// .split, dividir un string
const actividad = "Estoy aprendiendo Javascript Moderno";
console.log(actividad.split(" "));

const hobbies = "Leer, Caminar, Escuchar Música, Escribir, Running";
console.log(hobbies.split(", "));
const hobbiesArray = hobbies.split(", ");

document.body.innerHTML = `
<h1>Mis hobbies</h1>
<div class="hobbies">
    <ul><li>${hobbiesArray[0]}</li></ul>
    <ul><li>${hobbiesArray[1]}</li></ul>
    <ul><li>${hobbiesArray[2]}</li></ul>
    <ul><li>${hobbiesArray[3]}</li></ul>
    <ul><li>${hobbiesArray[4]}</li></ul>
</div>`;

const tweet = "Aprendiendo Javascript #JSModernoConJuan";
console.log(tweet.split("#"));

const tuitear = "Aprendiendo Javascript #JSModernoConJuan #EstudioDeNoche #NoParesDeAprender";
const tuitsArray = tuitear.split(" #");

document.body.innerHTML = `
<h1>Hashtags</h1>
<div class="hobbies">
    <ul><li><a href="${tuitsArray[0]}">#${tuitsArray[0]}</a></li></ul>
    <ul><li><a href="${tuitsArray[1]}">#${tuitsArray[1]}</a></li></ul>
    <ul><li><a href="${tuitsArray[2]}">#${tuitsArray[2]}</a></li></ul>
</div>`;


