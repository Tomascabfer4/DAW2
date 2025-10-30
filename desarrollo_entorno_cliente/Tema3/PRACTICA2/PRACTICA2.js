// 1.- Dado un array unidimensional de números enteros, escribe un script que encuentre
// el número máximo en el array y lo devuelva como resultado. Además, debes calcular la
// suma de todos los números en el array y también devolverla.
console.log("Actividad 1");
const contenedorResultados1 = document.getElementById("resultados1");
let num_enteros1 = [4, 2, 6, 7, 9, 1];
let suma = 0;
let mayor = num_enteros1[0];
for (let num of num_enteros1) {
  if (mayor < num) {
    mayor = num;
  }
  suma += num;
}
const mensaje1 = `El mayor es ${mayor} y la suma de todos los numeros es ${suma}`;
console.log(mensaje1);
contenedorResultados1.textContent = mensaje1;

// 2.- Dado un array unidimensional de números enteros, escribe un script que determine
// si el array está ordenado de manera ascendente. En caso afirmativo debe devolver true,
// sino, devolverá false
console.log("Actividad 2");
const contenedorResultados2 = document.getElementById("resultados2");
let num_enteros2 = [1, 2, 3, 6, 5, 4];
let bool = true;
let mensaje2;
for (let i = 0; i < num_enteros2.length - 1; i++) {
  if (num_enteros2[i] > num_enteros2[i + 1]) {
    bool = false;
    break;
  }
}
if (bool) {
  mensaje2 = `El array num_enteros2 esta ordenado de manera ascendente`;
} else {
  mensaje2 = `El array num_enteros2 no esta ordenado de manera ascendente`;
}
console.log(mensaje2);
contenedorResultados2.textContent = mensaje2;

// 3.- Dado un array unidimensional de números enteros, escribe un script que encuentre
// el número más pequeño y el número más grande en el array, y luego calcule la
// diferencia entre estos dos números. Debe devolver la diferencia entre el número más
// grande y el número más pequeño.
console.log("Actividad 3");
const contenedorResultados3 = document.getElementById("resultados3");
let num_enteros3 = [56, 56, 23, 45, 865, 23];
let mayor3 = num_enteros3[0];
let menor3 = num_enteros3[0];
for (let num3 of num_enteros3) {
  if (mayor3 < num3) {
    mayor3 = num3;
  }
  if (menor3 > num3) {
    menor3 = num3;
  }
}
const mensaje3 = `La diferencia entre ${mayor3} y ${menor3} es ${
  mayor3 - menor3
}`;
console.log(mensaje3);
contenedorResultados3.textContent = mensaje3;

// 4.- Dado un array unidimensional de números enteros y un número objetivo, escribe un
// script en JavaScript que encuentre si existen dos números en el array cuya suma sea
// igual al número objetivo. Debe devolver true si encuentra dos números con esta
// propiedad, y false en caso contrario.
console.log("Actividad 4");
const contenedorResultados4 = document.getElementById("resultados4");
const num_enteros4 = [2, 7, 11, 15, 3, 5];
const num_objetivo = 4;
let mensaje4;
let bool4 = false;
for (let i = 0; i < num_enteros4.length; i++) {
  for (let j = i + 1; j < num_enteros4.length; j++) {
    if (num_enteros4[i] + num_enteros4[j] === num_objetivo) {
      numsuma1 = num_enteros4[i];
      numsuma2 = num_enteros4[j];
      bool = true;
    }
  }
}
if (bool) {
  mensaje4 = `${numsuma1} + ${numsuma2} = ${num_objetivo}`;
}else{
  mensaje4 = `No existe en el array la suma de dos numeros que el resultado sea ${num_objetivo}`;
}
console.log(mensaje4);
contenedorResultados4.textContent = mensaje4;
