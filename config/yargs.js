const builder = {
  //builders: defino los atributos del comando y sus caracteristicas
  base: {
    demand: true, //es obligatorio pasarle este atributo al comando listar
    alias: "b",
  },
  limite: {
    default: 10,
    alias: "l",
  },
};

//hay que instalarlo y sirve para gestionar parametros de entrada y agregar comandos a la ejecucion del app.js
const argv = require("yargs")
  .command(
    "listar", //nombre del comando
    "Imprime por consola la tabla de multiplicación de la base ingresada por el usuario",
    builder //info del comando
  )
  .command(
    "crear",
    "Almacena en un archivo la tabla de multiplicación de la base ingresada pr el usuario",
    builder //paso el builder
  )
  //help() añade la función help al comando listar, entonces si hago node app.js listar --help voy a recibir info
  .help().argv; //pido argv y lo almaceno en argv

module.exports = { argv };
