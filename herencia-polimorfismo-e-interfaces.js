// Crea una clase Persona con las siguientes variables:

// 1. La edad
// 2. El nombre
// 3. El teléfono

// Una vez creada la clase, crea una nueva clase Cliente que herede de Persona, esta nueva clase tendrá la variable credito solo para esa clase.
// Crea ahora un objeto de la clase Cliente que debe tener como propiedades la edad, el telefono, el nombre y el credito, tienes que darles valor y mostrarlas por pantalla.
// Una vez hecho esto, haz lo mismo con la clase Trabajador que herede de Persona, y con una variable salario que solo tenga la clase Trabajador.

class Persona {
  constructor(edad, nombre, telefono) {
    this.edad = edad;
    this.nombre = nombre;
    this.telefono = telefono;
  }
}

class Cliente extends Persona {
  constructor(edad, nombre, telfono, credito) {
    super(edad, nombre, telfono)
    this.credito = credito;
  }
  
}

const newCliente = new Cliente(31, "nombre", "637733560", "15000 euros");
console.log(newCliente);


class Trabajador extends Persona {
  constructor(edad, nombre, telefono, salario) {
    super(edad, nombre, telefono)
    this.salario = salario;
  }
}

const newPersona = new Trabajador(40, "Alberto", "965485785", "1000 euros");
console.log(newPersona);