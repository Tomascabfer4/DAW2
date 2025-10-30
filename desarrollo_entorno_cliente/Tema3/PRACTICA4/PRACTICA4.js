// 1. Crea y recorre un objeto Map que contiene nombres de estudiantes y sus
// calificaciones. Muestra cada estudiante con su respectiva nota por consola.
console.log("Actividad 1");
const contenedorResultados1 = document.getElementById("resultados1");
const listaResultados1 = document.createElement('ul');
const miMapa = new Map([
    ['Ana', '8'],
    ['Maria', 6],
    ['Paula', '10'],
    ['Antonio', '7'],
    ['Miguel', '9'],
    ['Jose', '5']
]);

miMapa.forEach((nombre, nota) => {
    const itemLista = document.createElement('li');
    itemLista.textContent = `Nombre: ${nombre}, Calificacion: ${nota}`;
    listaResultados1.appendChild(itemLista);
    console.log(`Nombre: ${nombre}, Calificacion: ${nota}`);
});
contenedorResultados1.appendChild(listaResultados1);

// 2. Crea un Map con nombres de productos como claves y precios como valores.
// Recorre el Map para mostrar el total acumulado de todos los productos por
// consola.
console.log("Actividad 2");
const contenedorResultados2 = document.getElementById("resultados2");
const listaResultados2 = document.createElement('ul');
const productos = new Map([
    ['Macarrones', 2.40],
    ['Fideos', 1.60],
    ['Arroz', 1.20],
    ['Pan', 0.80],
    ['Leche', 0.90],
    ['Huevos', 1.50]
]);
let total = 0;
// En el forEach el primer parámetro es el valor y el segundo la clave por tema de diseño
productos.forEach((precio, producto) => {
    total += precio;
    const itemLista = document.createElement('li');
    itemLista.textContent = `Producto: ${producto}, Precio: ${precio}`;
    listaResultados2.appendChild(itemLista);
    console.log(`Producto: ${producto}, Precio: ${precio}`);
});
const itemListaTotal = document.createElement('li');
itemListaTotal.textContent = `Total: ${total} €`;
listaResultados2.appendChild(itemListaTotal);
console.log(`Total: ${total} €`);
contenedorResultados2.appendChild(listaResultados2);

// 3. Dado un Map con ciudades como claves y su población como valor, muestra
// solamente el listado de las ciudades. 
console.log("Actividad 3");
const contenedorResultados3 = document.getElementById("resultados3");
const listaResultados3 = document.createElement('ul');
const ciudades = new Map([
    ['Cordoba', 'La Rambla'],
    ['Malaga', 'Cartama'],
    ['Granada', 'Motril'],
    ['Sevilla', 'Dos Hermanas'],
    ['Jaen', 'Andujar'],
    ['Huelva', 'Lepe'],
    ['Almeria', 'Roquetas de Mar'],
    ['Cadiz', 'Jerez de la Frontera']
]);
ciudades.forEach((población, ciudad) => {
    const itemLista = document.createElement('li');
    itemLista.textContent = `Ciudad: ${ciudad}`;
    listaResultados3.appendChild(itemLista);
    console.log(`Ciudad: ${ciudad}`);
});
contenedorResultados3.appendChild(listaResultados3);
 
// 4. Crea un Map con claves como nombres de archivos y valores como
// extensiones. Imprime todas las claves del Map usando map.keys().
console.log("Actividad 4");
const contenedorResultados4 = document.getElementById("resultados4");
const listaResultados4 = document.createElement('ul');
const archivos = new Map([
    ['Practica', 'js'],
    ['Resumen', 'docx'],
    ['Tema2', 'pdf'],
    ['Pagina', 'html'],
    ['Comprimido', 'zip'],
    ['Angular', 'ts'],
    ['Net', 'cs'],
    ['Java', 'jar']
]);
for (const archivo of archivos.keys()) {
    const itemLista = document.createElement('li');
    itemLista.textContent = `Archivo: ${archivo}`;
    listaResultados4.appendChild(itemLista);
    console.log(`Archivo: ${archivo}`);
}
contenedorResultados4.appendChild(listaResultados4);

// 5. Crea un Map con claves como nombres de cursos y valores como la cantidad
// de estudiantes. Muestra solamente los valores (cantidad de estudiantes).
console.log("Actividad 5");
const contenedorResultados5 = document.getElementById("resultados5");
const listaResultados5 = document.createElement('ul');
const cursos = new Map([
    ['DAM', 5],
    ['DAW', 20],
    ['ASIR', 15],
    ['SMR', 25]
]);
for (const cantidadEstudiantes of cursos.values()) {
    const itemLista = document.createElement('li');
    itemLista.textContent = `Cantidad de estudiantes: ${cantidadEstudiantes}`;
    listaResultados5.appendChild(itemLista);
    console.log(`Cantidad de estudiantes: ${cantidadEstudiantes}`);
}
contenedorResultados5.appendChild(listaResultados5);
 
// 6. Dado un Map con claves como códigos de productos y valores como sus
// nombres, imprime solo los nombres.
console.log("Actividad 6");
const contenedorResultados6 = document.getElementById("resultados6");
const listaResultados6 = document.createElement('ul');
const codigosProductos = new Map([
    ['A001', 'Telefono'],
    ['A002', 'Tablet'],
    ['A003', 'Portatil'],
    ['A004', 'Monitor'],
    ['A005', 'Teclado'],
    ['A006', 'Ratón']
]);
for (const nombreProducto of codigosProductos.values()) {
    const itemLista = document.createElement('li');
    itemLista.textContent = `Nombre del producto: ${nombreProducto}`;   
    listaResultados6.appendChild(itemLista);
    console.log(`Nombre del producto: ${nombreProducto}`);
}
contenedorResultados6.appendChild(listaResultados6);
 
// 7. Crea un Map vacío y agrega tres pares clave-valor que representen ID de
// usuario y su nombre.
console.log("Actividad 7");
const contenedorResultados7 = document.getElementById("resultados7");
const listaResultados7 = document.createElement('ul');
const mapVacio = new Map([]);
mapVacio.set(1, 'Ana');
mapVacio.set(2, 'Luis');
mapVacio.set(3, 'Carlos');
for (const [id, nombre] of mapVacio) {
    const itemLista = document.createElement('li');
    itemLista.textContent = `ID: ${id}, Nombre: ${nombre}`;
    listaResultados7.appendChild(itemLista);
    console.log(`ID: ${id}, Nombre: ${nombre}`);
}
contenedorResultados7.appendChild(listaResultados7);

// 8. Tienes un Map con países y sus capitales. Agrega un nuevo país con su
// respectiva capital.
console.log("Actividad 8");
const contenedorResultados8 = document.getElementById("resultados8");
const listaResultados8 = document.createElement('ul');
const paisesCapitales = new Map([
    ['España', 'Madrid'],
    ['Francia', 'París'],
    ['Italia', 'Roma'],
    ['Alemania', 'Berlín'],
    ['Portugal', 'Lisboa']
]);
paisesCapitales.set('Reino Unido', 'Londres');
for (const [pais, capital] of paisesCapitales) {
    const itemLista = document.createElement('li');
    itemLista.textContent = `País: ${pais}, Capital: ${capital}`;
    listaResultados8.appendChild(itemLista);
    console.log(`País: ${pais}, Capital: ${capital}`);
}
contenedorResultados8.appendChild(listaResultados8);
 
// 9. Dado un Map con claves como nombres de usuario y valores como
// contraseñas, busca si un nombre de usuario específico existe en el Map.
console.log("Actividad 9");
const contenedorResultados9 = document.getElementById("resultados9");
const listaResultados9 = document.createElement('ul');
const usuarios = new Map([
    ['user1', 'pass123'],
    ['user2', 'qwerty'],
    ['admin', 'admin2024'],
    ['guest', 'guest2024'],
    ['test', 'test1234'],
    ['demo', 'demo2024']
]);
if (usuarios.has('admin')) {
    const itemLista = document.createElement('li');
    itemLista.textContent = `El usuario 'admin' existe en el Map.`;
    listaResultados9.appendChild(itemLista);
    console.log(`El usuario 'admin' existe en el Map.`);
}
else {
    const itemLista = document.createElement('li');
    itemLista.textContent = `El usuario 'admin' no existe en el Map.`;
    listaResultados9.appendChild(itemLista);
    console.log(`El usuario 'admin' no existe en el Map.`);
}
contenedorResultados9.appendChild(listaResultados9);
// 10. Tienes un Map con claves como identificadores de pedidos y valores como
// estado del pedido. Elimina un pedido dado su ID.
console.log("Actividad 10");
const contenedorResultados10 = document.getElementById("resultados10");
const listaResultados10 = document.createElement('ul');
const pedidos = new Map([
    [101, 'Pendiente'],
    [102, 'Enviado'],
    [103, 'Entregado'],
    [104, 'Cancelado'],
    [105, 'Pendiente']
]);
pedidos.delete(103);
const itemLista = document.createElement('li');
itemLista.textContent = `El pedido con ID 103 ha sido eliminado.`;
listaResultados10.appendChild(itemLista);
console.log(`El pedido con ID 103 ha sido eliminado.`);
for (const [id, estado] of pedidos) {
    const itemLista = document.createElement('li');
    itemLista.textContent = `ID del pedido: ${id}, Estado: ${estado}`;
    listaResultados10.appendChild(itemLista);
    console.log(`ID del pedido: ${id}, Estado: ${estado}`);
} 
contenedorResultados10.appendChild(listaResultados10);