/*Filtra el siguiente array de números creando uno con números pares y otro con impares.*/

const number = [253, 8575, 1, 20, 562, 1233, 25, 27, 258, 254, 7485, 2683];
const numerosPares = number.filter(number => number % 2 === 0);
const numerosImpares = number.filter(number => number % 2 !== 0);

console.log('Los números pares son '+numerosPares);
console.log('Los números impares son '+ numerosImpares);

