// 2 Matrices que van a simular 2 cartones de bingo
// Números 1 - 99
// Rellenar con números aleatorios los dos cartones
// Mostrar los cartones
// Iniciamos el juego
//  1. Genera un numero aleatorio => Comprueba que es numero no ha salido ya => Lo guarda
//  2. Cada que se genere un numero que se muestren los dos cartones
//  3. Compruebo en los cartones si esta => Si esta sustituyo el numero en el carton por x
//  4. Compruebo si alguien ha ganado (Si hay algun carton con x en todas las posiciones)

// Variables y constantes necesarias
const filaBase = [0, 0, 0, 0, 0];
let carton1 = [[...filaBase], [...filaBase], [...filaBase]];
let carton2 = [[...filaBase], [...filaBase], [...filaBase]];
let bingo = [];
const NUM_MIN = 1;
const NUM_MAX = 99;

//Llamada al juego, que utiliza todas las funciones del programa
iniciarJuego();

// Esta es la funcion que se encarga de activar el juego, y no para de sacar numeros hasta que
// alguno de los dos cartones gane el juego.
function iniciarJuego(){
  console.log("¡Vamos a rellenar los cartones!")
  console.log("¡Carton 1!")
  rellenarCarton(carton1);
  mostrarCarton(carton1);
  console.log("¡Carton 2!")
  rellenarCarton(carton2);
  mostrarCarton(carton2);

  while (true){
    console.log("¡Vamos a sacar un numero!");
    num = registrarNumBingo(bingo);
    comprobarNumCarton(carton1, num);
    comprobarNumCarton(carton2, num);
    console.log("¡Carton 1!")
    mostrarCarton(carton1);
    console.log("¡Carton 2!")
    mostrarCarton(carton2);
    if (comprobarGanador(carton1, "Carton1") == true || comprobarGanador(carton2, "Carton2") == true){
      break;
    }
  }
}

// En esta funcion lo simplificamos todo mucho, con foreach recorremos las 3 filas del carton,
// y al hacer otro foreach dentro del anterior recorremos cada elemento de cada fila del carton añadiendo
// un numero aleatorio a cada elemento del carton llamando a la funcion generarNumero();
// No necesitamos el valor de cada elemento de la fila, asi que solo cogemos la posicion con j.
function rellenarCarton(carton) {
  carton.forEach((fila, i) => {
    fila.forEach((_, j) => {
      carton[i][j] = generarNumero(NUM_MIN, NUM_MAX, carton);
    });
  });
}

// Simplemente muestra el carton
function mostrarCarton(carton) {
  carton.forEach(fila => {
    console.log(fila.join(' ')); //<= Recorremos cada fila del carton y le añadimos un espacio entre numero y numero
  });
}

// Funcion que añade un numero a la lista de numeros del bingo y lo imprime por consola.
function registrarNumBingo(bingo) {
  const num = generarNumero(NUM_MIN, NUM_MAX, bingo);
  bingo.push(num);
  console.log("¡El numero es: ", num , "!");
  return num;
};


// Esta funcion aplana el vector o matriz, para comprobar con includes que numeros estan dentro
// de la lista, si ya esta dentro genera uno tras otro hasta devolver uno que no este en la lista.
function generarNumero(min, max, listaNumeros) {
  let numAleatorio;
  const usados = listaNumeros.flat();
  while (true) {
    numAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!usados.filter((x) => x === numAleatorio).length) {// ! usados.includes(numAleatorio)
      return numAleatorio;
    }
  }
}

// Recoge el carton a comprobar y el numero que se acaba de generar en el bingo
// despues comprueba que el numero este en el carton, si esta, se pone en la posicion
// de ese numero una x.
function comprobarNumCarton(carton, numBingo){
  // Al poner 2 argumentos en el foreach en el primer argumento se guarda el valor de la posicion,
  // en este caso los 5 numeros de la fila, y en el segundo argumento la posicion de la fila.
  carton.forEach((fila, i) => {
    fila.forEach((valor, j) => {
      if (valor === numBingo) {
        carton[i][j] = 'x'; // modificamos el cartón original
      }
    });
  });
}

// A esta función se le pasa un carton y se encarga de comprobar si en todas de sus posiciones 
// hay una x. 
function comprobarGanador(carton, nombre){
  const repeticionesX = carton.flat().filter(x => x === 'x').length;
  if (repeticionesX === carton.flat().length) {// ! usados.includes(numAleatorio)
      console.log("El ganador es:", nombre)
      return true;
  }
}