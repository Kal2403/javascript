// Para practicar la encapsulación:

// 1. Crear clase Persona.
// 2. Crear variables las privadas edad, nombre y telefono de la clase Persona.
// 3. Crear gets y sets de cada propiedad.
// 4. Crear un objeto persona en el main.
// 5. Utiliza los gets y sets para darle valores a las propiedades edad, nombre y telefono, por último muéstralas por consola

class Persona {
  constructor() {
    this._nombre = "";
    this._edad = 0;
    this._telefono = "";
  }

  // nombre
  get nombre() {
    return this._nombre;
  }

  set nombre(nuevoNombre) {
    this._nombre = nuevoNombre;
  }

  // edad

  get edad() {
    return this._edad;
  }

  set edad(nuevoEdad) {
    this._edad = nuevoEdad;
  }

  // telefono

  get telefono() {
    return this._telefono;
  }

  set telefono(nuevoTelefono) {
    this._telefono = nuevoTelefono;
  }
}

let newPersona = new Persona();

newPersona.nombre = "Cristhian";
newPersona.edad = 31;
newPersona.telefono = "637733560";

console.log('Mi nombre es ' + newPersona.nombre + ' tengo ' + newPersona.edad + ' años mi numero de telefono es ' + newPersona.telefono + '.');
