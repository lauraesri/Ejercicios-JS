// Bucle for
const notas = [6, 7, 2, 9, 3, 4, 5, 8, 2];

let sumaFor = 0;

for (let i = 0; i < notas.length; i++) {
  sumaFor += notas[i];
}

console.log("La suma total con bucle for es:", sumaFor);


// Bucle for of 

const notasfor = [6, 7, 2, 9, 3, 4, 5, 8, 2];

let sumaForOf = 0;

for (const nota of notasfor) {
  sumaForOf += nota;
}

console.log("La suma total con bucle for of es:", sumaForOf);
