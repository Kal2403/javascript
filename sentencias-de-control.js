// En este ejercicio practicarás las estructuras de control, para ello deberás crear:
// Usando un if, crear una condición que compare si la variable numeroIf es positivo, negativo, o 0.
// Pista: Los números inferiores a 0 son negativos y los superiores, positivos.

function positivoZeroNegativo(numeroIf) {
  if (numeroIf < 0) {
    return 'Negativo';
  } else if (numeroIf == 0) {
    return 'Zero';
  } else {
    return 'Positivo';
  } 
}

console.log(positivoZeroNegativo(10));




// Crea un bucle While, este bucle tendrá que tener como condición que la variable numeroWhile sea inferior a 3, el bloque de código que tendrá el bucle deberá:
// Incrementar el valor de la variable en uno cada vez que se ejecute.
// Mostrarlo por pantalla cada vez que se ejecute.

let numeroWhile = 0;

while(numeroWhile < 3) {
  console.log(numeroWhile)
  numeroWhile++
}

// Para el bucle Do While, deberás crear la misma estructura que en el While, pero solo se debe ejecutar una vez.

let numerowhile2 = 0;

do {
  console.log(numerowhile2)
  numerowhile2++;
} while(numerowhile2 > 3); // es falso pero se ejecuta siempre 1 una vez



// Para el bucle For, crea una variable numeroFor, esta variable tendrá como valor 0 y su condición será que la variable sea igual o menor que 3, se irá incrementando en 1 su valor cada vez que se ejecute y deberá mostrarse por pantalla.

for (let numeroFor = 0; numeroFor <= 3; numeroFor++) {
  console.log(numeroFor);
}

// Por último, para el Switch, deberás crear la variable estacion, y distintos case para las cuatro estaciones del año. Dependiendo del valor de la variable estacion se deberá mandar un mensaje por consola informando de la estación en la que está. También habrá que poner un default para cuando el valor de la variable no sea una estación.
let estacion = "Verano";

switch(estacion) {
  case "Invierno":
    console.log("Estamos en la estacion " + estacion);
    break;
  case "Primavera":
    console.log("Estamos en la estacion " + estacion);
    break;
  case "Verano":
    console.log("Estamos en la estacion " + estacion);
    break;
  case "Otoño":
    console.log("Estamos en la estacion " + estacion);
    break;
  default:
    console.log("Cambia el nombre de Estacion");
}