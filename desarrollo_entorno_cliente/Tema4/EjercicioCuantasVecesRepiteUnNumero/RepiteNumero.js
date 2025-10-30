// Dada una matriz dada un valor decir el numero de veces que se repite ese valor
const carton = [[5,6,7],[34,324,24],[6,6,6],[4,5,2],[4,7,2]];

const cuantasveces = function (carton, valor) {
  let veces = 0;
  carton.forEach((fila) => {
    fila.forEach((numero) => {
      if (numero == valor){
        veces = veces + 1;
      }
    });
  });
  console.log(veces);
};
cuantasveces(carton, 6);
