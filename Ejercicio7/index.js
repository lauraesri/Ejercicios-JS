// Crea una función que solo suma los numeros pares de un array

function sumaPares(array) {
    let sumaPares = 0;
  
    for (const numero of array) {
      if (numero % 2 === 0) {
        // Verificamos si el número es par
        sumaPares += numero;
      }
    }
  
    return sumaPares;
  }
  
// Con el ejemplo del ejercicio:
const numeros = [1, 2, 3, 4, 5];
const resultado = sumaPares(numeros);
console.log("La suma de los números pares del array es:", resultado);
  


// Con otro ejemplo:
const numeros2 = [3, 10, 5, 6, 2];
const resultado2 = sumaPares(numeros2);
console.log("La suma de los números pares del array es:", resultado2);