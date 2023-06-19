// Crea un archivo llamado objetos.js que contenga las siguientes líneas

// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

const misDatos = {
  nombre: "Cristhian",
  apellido: "Castillo",
  edad: 31,
  altura: 1.7,
  eresDesarrollador: "Soy Desarrollador"
}

console.log(misDatos)

// - Una variable que obtenga tu edad a partir del objeto anterior

const miEdad = misDatos.edad;
console.log(miEdad);

// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const listaDatos = [
  {
    nombre: "Cristhian",
    apellido: "Castillo",
    edad: 31,
    altura: 1.7
  },
  {
    nombre: "Danna",
    apellido: "Montes",
    edad: 32,
    altura: 1.58
  },
  {
    nombre: "Miriam",
    apellido: "Pardo",
    edad: 29,
    altura: 1.55
  }
]

// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

const edades = listaDatos.sort((a, b) => {
  return a.edad > b.edad;
})

console.log(edades);