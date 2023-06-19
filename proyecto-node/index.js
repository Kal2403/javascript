function mensajeError() {
  throw new Error("Mensaje de Error Personalizado");
}

const winston = require('winston');

const logger = winston.createLogger({
  transports: [
    new winston.transports.File({ filename: 'errors.log'})
  ]
});

try {
  mensajeError();
} catch (error) {
  logger.error(error.mesagge);
}