let dni = prompt("Introduzca su numero de DNI sin letra");
if (dni >= 0 && dni <= 99999999) {
    var resto = dni % 23;

    // Array de letras
    var letrasDNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    // Muestra la letra correspondiente
    alert("La letra del DNI es: " + letrasDNI[resto]);
} 
else {
    // Muestra un mensaje de error si el número no es válido
    alert("El número proporcionado no es válido.");
}
