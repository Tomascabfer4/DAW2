// 1 Matriz de 4x4 que va a representar una serie de cartas en un tablero.
// Las cartas son las de la baraja de poker (A,2,3,4,5,6,7,8,9,10,J,Q,K), puede ser de cada palo.
// Se rellena un vector con cartas aleatorias con 8 parejas.
// El juego consiste en ir sacando una carta en concreto y encontrar su pareja en el tablero.
// Gana el que antes encuentre todas las parejas de cartas.

// Iniciamos el juego
// 1. Se muestran todas las cartas del juego dadas la vuelta (tablero con X).
// 2. Se saca una carta aleatoria y se muestra por consola, despues se saca otra carta aleatoria y se muestra por consola.
// 3. Si las dos cartas son iguales, se marcan las dos cartas en el tablero (es decir si son dos A apareceran las dos A).
// 4. El juego termina cuando todas las cartas estan descubiertas.
// 5. Se debe hacer un vector con las cartas candidatas y otro lleno de xs que iran sustituyendo a las cartas descubiertas.

// Tenemos dos matrices, una con las cartas y otra con las X
// Se selecciona una posicion aleatoria de la matriz de x y se comprueba que carta hay en esa posicion y se descubre
// se selecciona otra posicion aleatoria y se comprueba que carta hay en esa posicion y se descubre, si es la misma carta
// se modifica la matriz de X en esas dos posiciones, si no es la misma carta se vuelve a poner una X en esas dos posiciones
const NUMERO_FILAS = 4;
const NUMERO_COLUMNAS = 4;
let tableroConX = [];
let tableroConCartas = [];
const palos = ["T", "C", "D", "P"];
const valores = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];
const cartas = palos.flatMap((palo) =>
  valores.map((valor) => `${valor} de ${palo}`)
);

const iniciarJuego = () => {
  rellenarTableroX(tableroConX, NUMERO_FILAS, NUMERO_COLUMNAS);
  rellenarTableroX(tableroConCartas, NUMERO_FILAS, NUMERO_COLUMNAS);
  rellenarTableroCartasAleatorias(tableroConCartas);
  console.log("Tablero con X:");
  mostrarTablero(tableroConX);
  console.log("Tablero con Cartas:");
  mostrarTablero(tableroConCartas);
  while (true) {
    let carta1 = levantarCarta(tableroConCartas);
    let carta2 = levantarCarta(tableroConCartas);
    if (comprobarCartasIguales(carta1, carta2)) {
      mostrarParejasEncontradas(tableroConX, tableroConCartas, carta1);
      console.log("Tablero con X actualizado:");
      mostrarTablero(tableroConX);
    }
    if (compararTableros(tableroConX, tableroConCartas)) {
      console.log("¡Has ganado! Has encontrado todas las parejas.");
      console.log("Tablero Cartas:");
      mostrarTablero(tableroConCartas);
      break;
    }
  }
};

const rellenarTableroX = (tablero, filas, columnas) => {
  for (let i = 0; i < filas; i++) {
    tablero[i] = [];
    for (let j = 0; j < columnas; j++) {
      tablero[i][j] = "X";
    }
  }
};

const rellenarTableroCartasAleatorias = (tablero) => {
  let cartasElegidas = [];
  for (let i = 0; i < (NUMERO_FILAS * NUMERO_COLUMNAS) / 2; i++) {
    cartasElegidas.push(generarCartaAleatoria(cartas));
  }
  let cartasDuplicadas = [...cartasElegidas, ...cartasElegidas];
  cartasDuplicadas.sort(() => Math.random() - 0.5);
  let k = 0;
  tablero.forEach((fila, i) => {
    fila.forEach((_, j) => {
      tablero[i][j] = cartasDuplicadas[k++];
    });
  });
};

const generarCartaAleatoria = (cartas) => {
  const cartaAleatoria = Math.floor(Math.random() * cartas.length);
  return cartas[cartaAleatoria];
};

const mostrarTablero = (tablero) => {
  tablero.forEach((fila) => {
    console.log(fila.join(" | "));
  });
};

const levantarCarta = (tablero) => {
  const filaAleatoria = Math.floor(Math.random() * tablero.length);
  const cartaAleatoria = Math.floor(Math.random() * tablero[0].length);
  console.log("Carta levantada:", tablero[filaAleatoria][cartaAleatoria]);
  return tablero[filaAleatoria][cartaAleatoria];
};

const comprobarCartasIguales = (carta1, carta2) => {
  if (carta1 === carta2) {
    console.log("¡Has encontrado una pareja!");
    return true;
  }
}

const mostrarParejasEncontradas = (tableroX, tableroCartas, carta) => {
  tableroCartas.forEach((fila, i) => {
    fila.forEach((celda, j) => {
      if (celda === carta) {
        tableroX[i][j] = carta;
      }
    });
  });
};

const compararTableros = (tableroX, tableroCartas) => {
  const tableroXPlano = tableroX.flat();
  const tableroCartasPlano = tableroCartas.flat();
  let iguales = 0;
  tableroXPlano.forEach((celda, i) => {
    if (celda === tableroCartasPlano[i]) {
      iguales++;
    }
  });
  return iguales === tableroXPlano.length;
};


iniciarJuego();

