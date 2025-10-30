console.log("Actividad 1");
const contenedorResultados1 = document.getElementById("resultados1");
const listaResultados1 = document.createElement('ul');
let localidades = ["Sanlúcar", "Chipiona", "Rota", "Barbate", "Tarifa"];
let i = 0;
while (i < localidades.length) {
    if (i % 2) {
        const itemLista = document.createElement('li');
        itemLista.textContent = localidades[i];
        listaResultados1.appendChild(itemLista);
        console.log(localidades[i]);
    }
    i++;
}
contenedorResultados1.appendChild(listaResultados1);

console.log("Actividad 2");
const contenedorResultados2 = document.getElementById("resultados2");
const listaResultados2 = document.createElement('ul');
let coloresyvalores = [["Naranja","#F39C12"], ["Lima","#C0F312"], ["Turquesa","#12F3E5"], ["Rosa","#F312AF"], ["Rojo","#F31212"]];
for (let j = 0; j < coloresyvalores.length; j++) {
    const itemLista = document.createElement('li');
    itemLista.textContent = `El color es ${coloresyvalores[j][0]} y su valor es :${coloresyvalores[j][1]}`;
    listaResultados2.appendChild(itemLista);
    console.log(`El color es ${coloresyvalores[j][0]} y su valor es :${coloresyvalores[j][1]}`);
}
contenedorResultados2.appendChild(listaResultados2);

console.log("Actividad 3");
const contenedorResultados3 = document.getElementById("resultados3");
const listaResultados3 = document.createElement('ul');
let numaleatorios = [];
const MAX = 100;
while (numaleatorios.length < 100) {
    let numeroNuevo = Math.floor(Math.random() * MAX);
    
    if (!numaleatorios.includes(numeroNuevo)) {
        numaleatorios.push(numeroNuevo);
    }
}
numaleatorios.sort((a, b) => a - b);
for (let l = 0; l < numaleatorios.length; l++) {
    if (numaleatorios[l] % 2 === 0){
        const itemLista = document.createElement('li');
        itemLista.textContent = numaleatorios[l] + " es par";
        listaResultados3.appendChild(itemLista);
        console.log(numaleatorios[l] + " es par");
    }
}
contenedorResultados3.appendChild(listaResultados3);
// Crea un array unidimensional de 10 elementos, algunos de ellos vacíos. Recórrelo
// con las tres variantes de for que hemos visto en clase. Observa las diferencias. Muestra
// la salida por consola.
console.log("Actividad 4");
let numaleatorios2 = [0," ",2,3,4," ",6, 90 , 20," "];
console.log("Recorrido con for clásico");
const contenedorResultados41 = document.getElementById("resultados4.1");
const listaResultados41 = document.createElement('ul');
for (let k = 0; k < numaleatorios2.length; k++) {
    const itemLista = document.createElement('li');
    itemLista.textContent = numaleatorios2[k];
    listaResultados41.appendChild(itemLista);
    console.log(numaleatorios2[k]);
}
contenedorResultados41.appendChild(listaResultados41);
console.log("Recorrido con for...in");
const contenedorResultados42 = document.getElementById("resultados4.2");
const listaResultados42 = document.createElement('ul');
for (let m in numaleatorios2) {
    const itemLista = document.createElement('li');
    itemLista.textContent = numaleatorios2[m];
    listaResultados42.appendChild(itemLista);
    console.log(numaleatorios2[m]);
}
contenedorResultados42.appendChild(listaResultados42);
console.log("Recorrido con for...of");
const contenedorResultados43 = document.getElementById("resultados4.3");
const listaResultados43 = document.createElement('ul');
for (let n of numaleatorios2) {
    const itemLista = document.createElement('li');
    itemLista.textContent = n;
    listaResultados43.appendChild(itemLista);
    console.log(n);
}
contenedorResultados43.appendChild(listaResultados43);

console.log("Actividad 5");
const contenedorResultados5 = document.getElementById("resultados5");
const listaResultados5 = document.createElement('ul');
let matrizdiagonal = [[1,2,3],[4,5,6],[7,8,9]];
for (let p = 0; p < 3; p++) {
    for (let q = 0; q < 3; q++) {
        if (p == q){
            const itemLista = document.createElement('li');
            itemLista.textContent = `Elemento ${p}${q}:${matrizdiagonal[p][q]}`;
            listaResultados5.appendChild(itemLista);
            console.log(`Elemento ${p}${q}:${matrizdiagonal[p][q]}`);
        }
    }
}
contenedorResultados5.appendChild(listaResultados5);

console.log("Actividad 6");
const contenedorResultados6 = document.getElementById("resultados6");
const listaResultados6 = document.createElement('ul');
let array6 = [];
const MAX6 = 21; //<-- para que al multiplicar por 5 no pase de 100

for (let i = 0; i < 10; i++) {
  let aleatorio = Math.floor(Math.random() * MAX6);
  array6.push(aleatorio * 5);
}

while (array6[0] < 50) {
  let aleatorio = Math.floor(Math.random() * MAX6);
  array6[0] = aleatorio * 5;
}

while (array6[9] > 50) {
  let aleatorio = Math.floor(Math.random() * MAX6);
  array6[9] = aleatorio * 5;
}

for (numero of array6) {
    const itemLista = document.createElement('li');
    itemLista.textContent = numero;
    listaResultados6.appendChild(itemLista);
    console.log(numero);
}
contenedorResultados6.appendChild(listaResultados6);

console.log("Actividad 7");
const contenedorResultados7 = document.getElementById("resultados7");
const listaResultados7 = document.createElement('ul');
let vector = new Array(5);
for (let i = 0; i < 5; i++) {
    vector[i] = Math.floor(Math.random() * 10)**2;
}
for (let i = 0; i < 5; i++) {
    const itemLista = document.createElement('li');
    itemLista.textContent = vector[i];
    listaResultados7.appendChild(itemLista);
    console.log(vector[i]);
}
contenedorResultados7.appendChild(listaResultados7);

console.log("Actividad 9");
const contenedorResultados9 = document.getElementById("resultados9");
const listaResultados9 = document.createElement('ul');
let array9 = new Array(10);
let v = 0;
while (v < array9.length) {
    const valorBooleano = Math.random() < 0.5;
    array9[v] = valorBooleano;
    v++;
}
v = 0;
while (v < array9.length) {
    if (array9[v] === true) {
        const itemLista = document.createElement('li');
        itemLista.textContent = `La posicion ${v} es true`;
        listaResultados9.appendChild(itemLista);
        console.log(`La posicion ${v} es true`);
    }
    v++;
}
contenedorResultados9.appendChild(listaResultados9);