const fs = require("fs");

let crearArchivo = (base, limite = 10) => {
  return new Promise((resolve, reject) => {
    let data = "";
    if (Number(base)) {
      for (let index = 1; index <= limite; index++) {
        data += `${base} x ${index} = ${base * index}\n`;
      }
      //NO TENGO IDEA DE POR QUE ME TOMA EL PATH COMO SI ESTUVIESE EN LA RAIZ DEL PROYECTO
      fs.writeFile(`tablas/tabla del ${base}.txt`, data, (err) => {
        !err ? resolve("The file has been saved!") : reject(err);
      });
    } else {
      reject("The indroduced value is not a number");
    }
  });
};

//el limite es por defecto 11 solamente si no recibe el parametro
let listarTabla = (base, limite = 10) => {
  for (let index = 1; index <= limite; index++) {
    console.log(`${base} x ${index} = ${base * index}`);
  }
};

module.exports = { crearArchivo, listarTabla };
