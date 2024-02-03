/* Transforma un array de palabras en otro donde las palabras estén escritas en mayúsculas y 
donde el orden de los temas sea el inverso. Utiliza las funciones para arrays.*/

const topics = ['JavaScript', 'Variables', 'funciones', 'condicionales', 'bucles'];

// Convertir las palabras a mayúsculas y revertir el orden
const resultado = topics.map(word => word.toUpperCase()).reverse();

console.log(resultado);
