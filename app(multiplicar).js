const { crearArchivo } = require("./multiplicar/multiplicar");

console.log(process.argv); //CONTIENE LOS ARGUMENTOS PASADOS A NODE
//EN 3ra POSICION ESTÁ LA BASE MANDADA nodemon app\(multiplicar\).js --base=5

let param = process.argv[2]; //devuleve --base=5
//el split devuelve un arreglo que separa el string en arreglos a partir
//del string definido
let base = param.split("=")[1]; //devulve "5"

crearArchivo(base)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
