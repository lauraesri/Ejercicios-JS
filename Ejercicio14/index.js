/*A partir de un array con todos los meses del año escritos en minúscula, crea otro donde solo 
estén los meses que tienen más de 7 letras y haz que estén escritos en mayúsculas. En otra 
variable, indica cuántos meses son.*/

const months = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre']
const longMonths = months.filter(month => month.length>7).map(month => month.toUpperCase());
const numberMonths = longMonths.length

console.log(`Hay ${numberMonths} meses que tienen más de 7 letras `)
console.log(longMonths)
