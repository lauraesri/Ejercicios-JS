/*Creamos las constantes para calcular el número de enlaces de la página.
Utilizamos la función de acceso directo Selector de CSS*/
const enlaces = document.querySelectorAll('a');
const numeroEnlaces = enlaces.length;

/* Accedemos a los enlaces y buscamos el penúltimo. 
Obtenemor el atributo del href con la función .getAttribute*/
const penultimoEnlace = enlaces[numeroEnlaces - 2].getAttribute('href');

/*Calculamos el número de enlaces, esta vex del tercer párrafo.
En este caso emplearemos la búsqueda por Id*/
const tercerParrafoEnlaces = document.getElementById('third-paragraph').querySelectorAll('a');
const numeroEnlacesTercerParrafo = tercerParrafoEnlaces.length;

/*Creamos un nuevo nodo div para recoger la información.
Empleamos la función innerHTML para añadir el texto con los datos al código HTML*/
const infoContainer = document.createElement('div');
infoContainer.innerHTML = `
  <p>Número de enlaces de la página: ${numeroEnlaces}</p>
  <p>Dirección a la que enlaza el penúltimo enlace: ${penultimoEnlace}</p>
  <p>Número de enlaces del tercer párrafo: ${numeroEnlacesTercerParrafo}</p>`;

// Pintamos el nuevo nodo al final de la página
document.body.appendChild(infoContainer);