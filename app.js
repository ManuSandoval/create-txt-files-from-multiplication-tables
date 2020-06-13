const fs = require("fs"); //se importa así cuando ya viene preinstalado en node
//const express = require("express")//este hay que instalarlo primero (y luego se lo requiere desde el node-modules)
//const helper = require("./helper")//así si es uno propio

let base = 3;
let data = "";
for (let index = 0; index < 10; index++) {
  data += `${base} x ${index} = ${base * index}\n`;
}

fs.writeFile(`./tablas/tabla del ${base}`, data, (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});
