class Estudiante {
  constructor(nombre) {
    this.nombre = nombre
    this.asignaturas = ["Javascript", "HTML", "CSS"]
  }

  obtenDatos(){
    return {
      name: this.nombre,
      asignatura: this.asignaturas
    }
  }
}

let newEstudiante = new Estudiante("Javier")

console.log(newEstudiante.obtenDatos())