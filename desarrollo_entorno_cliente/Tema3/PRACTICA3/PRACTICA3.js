// 3.30.- La lista de seguidores de una cuenta en redes sociales se gestiona usando conjuntos.
// Crea un conjunto vacío llamado Followers, añade el nombre de cinco seguidores,
// elimina dos de ellos, añade otros siete, muestra
// cuántos seguidores tiene la cuenta y también
// el nombre de todos ellos.
console.log("Actividad 3.30");
const contenedorResultados330 = document.getElementById("resultados330");
const Followers = new Set();
Followers.add("Miguelito33");
Followers.add("JoseAntonio29");
Followers.add("Teresita560");
Followers.add("Juanito2345");
Followers.add("Tumorenito19");
Followers.delete("Tumorenito19");
Followers.delete("JoseAntonio29");
Followers.add("HuguitoSanches222");
Followers.add("Tomasito22");
Followers.add("Lucita78");
Followers.add("Soyturafita22");
Followers.add("CarlitosLargitos");
Followers.add("AdriElLoco90");
Followers.add("EmilioSaltimbanqui");
let seguidores = "";
const listaSeguidores = Array.from(Followers);
seguidores += "Lista de Followers: " + listaSeguidores.join(", ") + "\n";
seguidores += "Total de Followers: " + Followers.size + "\n";
console.log(seguidores);
contenedorResultados330.textContent = seguidores;

// 3.31. Teniendo en cuenta la naturaleza de los conjuntos, podrían ser la estructura de datos indicada para, por ejemplo,
// gestionar las categorías o etiquetas de un blog, una lista de la
// compra o una lista de tareas. Reflexiona y escribe otras cinco tareas que podría gestionar un conjunto mejor que un array.
console.log("Actividad 3.31");
let tareas = "";
const contenedorResultados331 = document.getElementById("resultados331");
tareas +=
  "Una tienda de videojuegos que no quiere que se repita ningun juego en su bbdd.\n";
tareas += "La lista de DNIs de los alumnos de una clase.\n";
tareas += "Para identificar coches por numero de vastidor.\n";
tareas += "Para identificar cada monitor de una tienda por numero de serie.\n";
tareas += "Para identificar a cada corredor de una carrera por su numero.\n";
contenedorResultados331.textContent = tareas;

// 3.32.Durante el desarrollo de una aplicación se ha detectado la necesidad de almacenar la información
// de geolocalización de varias ciudades. Tienes que crear un mapa cuyas claves
// sean el nombre de las ciudades y los valores, la longitud y latitud de cada ciudad. Crea
// la estructura de datos, rellénala con datos de cinco ciudades reales y muestra
// en pantaIla la información que contiene el mapa.
console.log("Actividad 3.32");
const contenedorResultados332 = document.getElementById("resultados332");
const ciudades = new Map([
  ["Córdoba", "Longitud: 4°46 26 O, Latitud: 37°52 38 N"],
  ["Málaga", "Longitud: 4°25 00 O, Latitud: 36°43 00 N"],
  ["Granada", "Longitud: 3° 35 47.06028 W, Latitud: 37° 11 23.63850 N"],
  ["Almeria", "Longitud: 2° 27 16 O,Latitud: 36° 50 38 N"],
  ["Cadiz", "Longitud: 6° 17 51 O,Latitud: 36° 32 06 N"],
]);
console.log(ciudades);
contenedorResultados332.innerHTML = "";
ciudades.forEach((coordenadas, ciudad) => {
  let parrafo = document.createElement("p");
  parrafo.textContent = `${ciudad}: ${coordenadas}`;
  contenedorResultados332.appendChild(parrafo);
});

// 3.33.Utiliza las estructuras de datos que consideres oportunas para generar un tablero del tres
// en raya con todas las posiciones rellenas e indique si alguno de los jugadores ha ganado
// la partida.
console.log("Actividad 3.33");
const contenedorResultados333 = document.getElementById("resultados333");
const tresEnRaya = [["x", "x", "x"], ["x", "o", "o"],["o", "o", "x"]];
console.log(tresEnRaya);
for (let i = 0; i < tresEnRaya.length; i++) {
  // Se verifica las filas
  if (
    tresEnRaya[i][0] === tresEnRaya[i][1] &&
    tresEnRaya[i][1] === tresEnRaya[i][2] &&
    tresEnRaya[i][0] !== " "
  ) {
    console.log(tresEnRaya[i][0]);
    contenedorResultados333.textContent = tresEnRaya[i][0];
  }
  // Se verifica las columnas
  if (
    tresEnRaya[0][i] === tresEnRaya[1][i] &&
    tresEnRaya[1][i] === tresEnRaya[2][i] &&
    tresEnRaya[0][i] !== " "
  ) {
    console.log(tresEnRaya[0][i]);
    contenedorResultados333.textContent = tresEnRaya[0][i];
  }
  // Se verifican las diagonales
  if (
    tresEnRaya[0][0] === tresEnRaya[1][1] &&
    tresEnRaya[1][1] === tresEnRaya[2][2] &&
    tresEnRaya[0][0] !== " "
  ) {
    console.log(tresEnRaya[0][0]);
    contenedorResultados333.textContent = tresEnRaya[0][0];
  }
  if (
    tresEnRaya[0][2] === tresEnRaya[1][1] &&
    tresEnRaya[1][1] === tresEnRaya[2][0] &&
    tresEnRaya[0][2] !== " "
  ) {
    console.log(tresEnRaya[0][2]);
    contenedorResultados333.textContent = tresEnRaya[0][2];
  }
}
console.log(tresEnRaya);

