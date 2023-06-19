// Crea un archivo llamado fechas.js que contenga las siguientes líneas

// - La fecha de hoy
const fechaHoy = new Date();
console.log('Fecha de Hoy ' + fechaHoy);

// - La fecha de tu nacimiento
const fechaNacimiento = new Date('03-24-1992');
console.log('Fecha de Nacimiento ' + fechaNacimiento);

// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const masTarde = fechaHoy > fechaNacimiento
console.log('¿Hoy es más tarde que la fecha de nacimiento? ' + masTarde);

// - Una variable que contenga el día de tu nacimiento
const diaNacimiento = fechaNacimiento.getDate();
console.log('Mi dia de nacimiento es ' + diaNacimiento);

// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const mesNacimiento = fechaNacimiento.getMonth();
console.log('Mi Mes de nacimiento ' + (mesNacimiento+1));

// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const añoNacimiento = fechaNacimiento.getFullYear();
console.log('Mi año de nacimiento ' + añoNacimiento);