const argv = require("./config/yargs").argv;
const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar");

let comando = argv._[0]; //el "_" es el nombre del arreglo (argv.array[0])

switch (comando) {
  case "crear":
    crearArchivo(argv.base, argv.limite)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
    break;
  case "listar":
    listarTabla(argv.base, argv.limite);
    break;
  default:
    console.log("No se reconoce el comando");
    break;
}
