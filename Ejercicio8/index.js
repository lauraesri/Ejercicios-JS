function eliminaConsonantes (string) {

    // utilizamos una expresión regular

    const soloVocales = string.replace(/[^aeiouAEIOU]/g, '');
    return soloVocales; 
}

const fraseOriginal = 'Hola Mundo, me llamo Laura';
const fraseVocales = eliminaConsonantes(fraseOriginal);
console.log("La frase sin consonantes es: " + fraseVocales)