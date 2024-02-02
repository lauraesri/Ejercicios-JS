function temperaturaFahreheit (temperaturaGrados){
    resultado = temperaturaGrados* 9/5 +32;
    return resultado;
}

const grados = 20;
const fahreheit = temperaturaFahreheit(grados);
console.log('La temperatura en grados Fahrenheit es ' + fahreheit + 'F');