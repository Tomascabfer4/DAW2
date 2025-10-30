const carton = [
  [,,,],
  [,,,],
  [,,,],
];

const mostrarcarton = function (carton) {
  carton.forEach((fila) => {
    fila.forEach((numero) => {
      console.log(numero);
    });
  });
};
mostrarcarton(carton);

const rellenarCartonCeros = function (carton) {
  for (let i = 0; i < carton.length; i++) {
    for (let j = 0; j < carton[i].length; j++) {
      carton[i][j] = 0;
    }
  }
  mostrarcarton(carton);
};
rellenarCartonCeros(carton);

const asignarValorCarton = function(carton, fila, columna, valor) {
    carton[fila][columna] = valor;
    mostrarcarton(carton);
}
asignarValorCarton(carton, 1, 2, 99);