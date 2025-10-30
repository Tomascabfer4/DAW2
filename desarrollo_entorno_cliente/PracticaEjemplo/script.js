let vector = [6, 7, 5, 8];
let n = 0;
while (n < vector.length) {
    console.log("El valor ", n, " es ", vector[n]);
    n++;
}
let vector0 = [1, 5, 6, 8];
let vector1 = [3, 3];
let vector2 = [7, 2, 1, 7, 9];
let vector3 = [4, 3, 2];
let matriz = [vector0, vector1, vector2, vector3];
console.log(matriz);
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        console.log("El elemento en la fila", i, " y columna", j, "es: ", matriz[i][j]);
    }
}
