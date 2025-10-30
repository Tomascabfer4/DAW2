// 4.21. Crea una función que devuelva como grados Celsius la cantidad en grados Fahrenheit
// que recibe como parámetro.
console.log("Actividad 4.21");
const contenedorResultados421 = document.getElementById("resultados421");
const celsiusAFahrenheit = function (gradosFah) {
  const gradosCelsius = gradosFah * 1.8 + 32;
  return gradosCelsius;
};
console.log(celsiusAFahrenheit(2));
contenedorResultados421.textContent = celsiusAFahrenheit(2);

// 4.22. Escribe una función que indique si un número que recibe como parámetro es múltiplo
// de 10.
console.log("Actividad 4.22");
const contenedorResultados422 = document.getElementById("resultados422");
const multiploDe10 = function (multiplo) {
  if (multiplo % 10 === 0) {
    return `El numero ${multiplo} es multiplo de 10`;
  } else return `El numero ${multiplo} no es multiplo de 10`;
};
console.log(multiploDe10(20));
contenedorResultados422.textContent = multiploDe10(20);

// 4.23. Programa una función que determine si un año que recibe como parámetro es bisiesto.
console.log("Actividad 4.23");
const contenedorResultados423 = document.getElementById("resultados423");
const annoBisiesto = function (anno) {
  if ((anno % 4 == 0 && anno % 100 != 0) || anno % 400 == 0) {
    return `El año ${anno} es bisiesto`;
  } else {
    return `El año ${anno} no es bisiesto`;
  }
};
console.log(annoBisiesto(2025));
contenedorResultados423.textContent = annoBisiesto(2025);

// 4.24. Crea una función que muestre la tabla de multiplicar del número que recibe como parámetro.
console.log("Actividad 4.24");
const contenedorResultados424 = document.getElementById("resultados424");
const listaResultados424 = document.createElement("ul");
const num_Multiplicar = 5;
const tablaMultiplicar = function (num) {
  for (let i = 0; i < 11; i++) {
    const itemLista = document.createElement("li");
    itemLista.textContent = num * i;
    listaResultados424.appendChild(itemLista);
    console.log(num * i);
  }
};
tablaMultiplicar(5);
contenedorResultados424.appendChild(listaResultados424);

// 4.25. Crea una función que devuelva la letra del DNI que recibe como parámetro.
console.log("Actividad 4.25");
const contenedorResultados425 = document.getElementById("resultados425");
dni = "45612345d";
const devolverLetraDni = function (dni) {
  dni = dni.trim();
  const letra = dni.match(/[A-Z]$/i);
  if (letra) {
    return letra[0].toUpperCase();
  } else {
    return "No se encontró letra en el DNI";
  }
};
console.log(devolverLetraDni(dni));
contenedorResultados425.textContent = devolverLetraDni(dni);

// 4.26. Escribe una función que reciba como parámetro un array de 3x3
// y lo devuelva modificado con todos sus elementos a 0 excepto la diagonal principal.
console.log("Actividad 4.26");
const contenedorResultados426 = document.getElementById("resultados426");
const listaResultados426 = document.createElement("ul");
const matriz3x3 = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
];
const modifDiagonalMatriz = function (matriz) {
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (i !== j) {
                matriz[i][j] = 0;
            }
        }
    }
    matriz.forEach(fila => {
        const itemLista = document.createElement("li");
        itemLista.textContent = fila;
        listaResultados426.appendChild(itemLista)
    });
}
modifDiagonalMatriz(matriz3x3);
console.log(matriz3x3);
contenedorResultados426.appendChild(listaResultados426);

// 4.27. Crea una función autoejecutable que muestre el mensaje
// «Comenzando...» y tres segundos después escriba «Finalizado.».
console.log("Actividad 4.27");
const contenedorResultados427 = document.getElementById("resultados427");
(function() {
  console.log("Comenzando...");
  contenedorResultados427.textContent = "Comenzando...";
  setTimeout(() => {
  console.log("Finalizado");
  contenedorResultados427.textContent ="Finalizado";
    }, 3000);
})();

// 4.28. Programa una función que reciba como parámetros dos arrays de 4x4 y devuelva un
// tercer array relleno de ceros excepto en aquellas posiciones en las que los dos primeros arrays tienen valores iguales.
console.log("Actividad 4.28");
const contenedorResultados428 = document.getElementById("resultados428");
const listaResultados428 = document.createElement("ul");
const matriz1 = [
  ["1", "2", "3", "4"],
  ["5", "6", "7", "8"],
  ["9", "10", "11", "12"],
  ["13", "14", "15", "16"]
];
const matriz2 = [
  ["12", "23", "33", "32"],
  ["5", "6", "7", "8"],
  ["954", "30", "1431", "142"],
  ["935", "303", "14331", "14432"],
];
const devolverArrayCerosIguales = function(matriz1,matriz2){
    let matriz = [[],[],[],[]]
    for (let i = 0; i < matriz1.length; i++) {
        for (let j = 0; j < matriz1[i].length; j++) {
            if (matriz1[i][j] == matriz2[i][j]) {
                matriz[i][j] = matriz1[i][j]
            }else{
                matriz[i][j] = 0
            }
        }
    }
    matriz.forEach(fila => {
        const itemLista = document.createElement("li");
        itemLista.textContent = fila;
        listaResultados428.appendChild(itemLista)
    });
    return matriz;
}
console.log(devolverArrayCerosIguales(matriz1,matriz2))
contenedorResultados428.appendChild(listaResultados428);

// 4.29. Crea una función que reciba un array de 10 elementos, los rellene
// con números aleatorios entre 1 y 100 y los ordene, de manera que aparezcan
// primero aquellos que terminan en O.
console.log("Actividad 4.29");
const contenedorResultados429 = document.getElementById("resultados429");
const numAleatorios = [];
const generarYOrdenarNumeros = function(array) {
    for (let i = 0; i < 10; i++) {
        array[i] = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    }
    array.sort((a, b) => a - b);
    return array;
} 
console.log(generarYOrdenarNumeros(numAleatorios))
contenedorResultados429.textContent = generarYOrdenarNumeros(numAleatorios);

// 4.30. Escribe una función que diga si un número que recibe como parámetro es primo o no.
console.log("Actividad 4.30");
const contenedorResultados430 = document.getElementById("resultados430");
const mirarSiEsPrimo = function(numero) {
    if (numero % 2 === 0) {
        return `El numero ${numero} es primo`
    }else{
        return `El numero ${numero} no es primo`
    }
}
console.log(mirarSiEsPrimo(4))
contenedorResultados430.textContent = mirarSiEsPrimo(5);

// 4.31. Crea una función que reciba un número variable de parámetros numéricos (al menos
// cuatro) y devuelva su suma, su media aritmética, la multiplicación del primero con el
// último, y la división del segundo con el penúltimo.
console.log("Actividad 4.31");
const contenedorResultados431 = document.getElementById("resultados431");

const operaciones = function(...numeros) {
  if (numeros.length < 4) {
    return "Error: Se necesitan al menos 4 números";
  }
  const suma = numeros.reduce((acum, n) => acum + n, 0);
  const media = suma / numeros.length;
  const multiplicacion = numeros[0] * numeros[numeros.length - 1];
  const division = numeros[1] / numeros[numeros.length - 2];
  contenedorResultados431.textContent = 
    `Suma: ${suma}, Media: ${media}, Multiplicación: ${multiplicacion}, División: ${division}`;
  return {
    suma,
    media,
    multiplicacion,
    division
  };
};
console.log(operaciones(2, 4, 6, 8)); 

// 4.32. Escribe una función que devuelva true si dos palabras que recibe como parámetros
// contienen las mismas letras, aunque se encuentren en posiciones distintas.
console.log("Actividad 4.32");
const contenedorResultados432 = document.getElementById("resultados432");
const mismasLetras = function(palabra1, palabra2) {
  // Convertimos a minúsculas para no diferenciar mayúsculas/minúsculas
  const a = palabra1.toLowerCase().split("").sort().join("");
  const b = palabra2.toLowerCase().split("").sort().join("");

  return a === b;
}
contenedorResultados432.textContent = mismasLetras("amor","roma");
console.log(mismasLetras("amor","roma"));


// 4.33. Programa una función que reciba un array de cadenas de caracteres y que por medio
// del método filter devuelva aquellos caracteres que no forman parte del alfabeto español.
// Prueba la función incluyendo palabras con caracteres como ^, $ o &.
console.log("Actividad 4.33");
const contenedorResultados433 = document.getElementById("resultados433");
const palabras = ["hola", "mundo$", "año^", "&python"];
const caracteresNoAlfabeto = function(palabras) {
  const todosCaracteres = palabras.join("").split("");
  const noAlfabeto = todosCaracteres.filter(c => !c.match(/[a-zA-ZñÑ]/));
  return noAlfabeto;
}
contenedorResultados433.textContent = caracteresNoAlfabeto(palabras);
console.log(caracteresNoAlfabeto(palabras)); 

// 4.34. Escribe un programa que con la ayuda de una función recursiva muestre en la consola
// una variante de la sucesión de Fibonacci en la que cada elemento sea la suma de
// los tres anteriores.
console.log("Actividad 4.34");
const contenedorResultados434 = document.getElementById("resultados434");
const cantidad = 10;
const fibonacciTriple = function(n) {
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;
  return fibonacciTriple(n - 1) + fibonacciTriple(n - 2) + fibonacciTriple(n - 3);
}
const resultados = [];
for (let i = 0; i < cantidad; i++) {
  const valor = fibonacciTriple(i);
  console.log(valor);
  resultados.push(valor);
}
contenedorResultados434.textContent = resultados.join(", ");

// 4.35. Escribe una función que lance dos dados tantas veces como indique un parámetro у
// devuelva el lanzamiento que ha obtenido la puntuación ganadora.
console.log("Actividad 4.35");
const contenedorResultados435 = document.getElementById("resultados435");
const lanzarDado = function (veces) {
    let ganador = 0;
    for (let i = 0; i < veces; i++) {
        let dado1 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
        let dado2 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
        if (dado1 > ganador || dado2 > ganador) {
            if (dado1 >= dado2) {
                ganador = dado1;
            } else {
                ganador = dado2;
            }
        }
    }
    return ganador;
}
console.log(lanzarDado(2))
contenedorResultados435.textContent = lanzarDado(2);

// 4.36. Crea un programa que simule el funcionamiento de un bingo. El número de cartones
// que participan será siempre de cinco. Cada cartón tendrá 8 filas y 4 columnas con 20
// números del 1 al 90 distribuidos de forma aleatoria (máximo de cinco por fila). El programa irá sacando bolas y los cartones se irán comprobando en tiempo real. El programa termina cuando un cartón alcanza el bingo. En ese momento se debe mostrar en
// pantalla cuál de los cinco cartones es el ganador y los números que han salido para
// comprobar que el bingo es correcto. Plantea el problema, analízalo con detenimiento
// y diseña previamente todas las funciones que vas a necesitar para resolverlo. Luego,
// implementa tu solución.
console.log("Actividad 4.36");

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
