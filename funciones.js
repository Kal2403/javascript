// Primera parte:

// 1. Crear una función con tres parámetros que sean números que se suman entre sí.
// 2. Llamar a la función en el main y darle valores.

function sumarNumeros(num1, num2, num3) {
    return num1 + num2+ num3;
  }
  
  console.log(sumarNumeros(10, 11, 12));
  
  // Segunda parte:
  
  // 1. Crear una clase coche.
  // 2. Dentro de la clase coche, una variable numérica que almacene el número de puertas que tiene.
  // 3. Una función que incremente el número de puertas que tiene el coche.
  // 4. Crear un objeto miCoche en el main y añadirle una puerta.
  // 5. Mostrar el número de puertas que tiene el objeto.
  
  class Coche {
    constructor() {
      this.doors = 0;
    }
  
    doorUp() {
      this.doors++;
    }
  }
  
  const miCoche = new Coche();
  miCoche.doorUp();
  
  console.log('Mi coche tiene ' + miCoche.doors + ' puertas.');