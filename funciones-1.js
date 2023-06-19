// Crea un archivo JS que contenga las siguientes líneas

// - Una función sin parámetros que devuelva siempre "true"

function siempreVerdad() {
  return true;
}

// - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
const holaPromesa = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 5000)
  });
  console.log("Hola Soy Una Promesa");
}

holaPromesa();

// - Una función generadora de índices pares automáticos
function* indicesPares() {
  let indice = 0;
  while(true) {
    yield indice;
    indice += 2;
  }
}

const generador = indicesPares();

for(let i = 0; i < 5; i++){
  console.log(generador.next().value)
}