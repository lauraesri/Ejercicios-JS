/* Cuando se hace click sobre el botón “Guardar”, 
el listener envia un alert con un mensaje de 'Guardado' */
document.getElementById('myBtn').addEventListener('click', displayAlert);
function displayAlert() {
    alert('Guardado');
};

/* Cuando se hace accede al input “nombreImput”, 
el listener envia un 'focus'en amarillo y cuando se deselecciona se elimina*/

var nombreInput = document.getElementById('nombreInput');
nombreInput.addEventListener('focus', displayFocus);
function displayFocus() {
    nombreInput.classList.add('amarillo');
};

nombreInput.addEventListener('blur', displayBlur); 
function displayBlur() {
    nombreInput.classList.remove('amarillo');
};

/* Cuando se escribe en el input “letraImput”, 
el listener envia un nuevo displaycolor a la clase en función de si es vocal o consonante*/

var letraInput = document.getElementById('letraInput');
letraInput.addEventListener('input', displayColor);
function displayColor() {
    var letra = letraInput.value.toLowerCase();
    if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
        letraInput.classList.remove('rojo');
        letraInput.classList.add('azul');
    } else {
        letraInput.classList.remove('azul');
        letraInput.classList.add('rojo');
    }
};