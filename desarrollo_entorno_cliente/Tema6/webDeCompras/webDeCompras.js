// CONTENIDO DEL HEADER
let header = document.createElement("header");
let h1Titulo = document.createElement("h1");
h1Titulo.setAttribute("class", "h1Titulo");
let textoH1Titulo = document.createTextNode("MiTienda");
h1Titulo.appendChild(textoH1Titulo);
header.appendChild(h1Titulo);
let buscador = document.createElement("form");
let inputBusqueda = document.createElement("input");
inputBusqueda.setAttribute("type", "text");
inputBusqueda.setAttribute("placeholder", "Buscar productos...");
let botonBusqueda = document.createElement("button");
botonBusqueda.setAttribute("class", "botonBusqueda");
let textoBotonBusqueda = document.createTextNode("Buscar");
botonBusqueda.appendChild(textoBotonBusqueda);
buscador.appendChild(inputBusqueda);
buscador.appendChild(botonBusqueda);
header.appendChild(buscador);
let navEnlacesHeader = document.createElement("nav");
navEnlacesHeader.setAttribute("class", "navEnlacesHeader");
const enlacesHeader = ["Inicio", "Categorías", "Ofertas", "Cuenta"];
enlacesHeader.forEach(enlace => {
  let enlaceHeader = document.createElement("a");
  enlaceHeader.setAttribute("class", "enlaceHeader");
  let textoEnlaceHeader = document.createTextNode(enlace);
  enlaceHeader.appendChild(textoEnlaceHeader);
  navEnlacesHeader.appendChild(enlaceHeader);
});
header.appendChild(navEnlacesHeader);
document.body.appendChild(header);

// TARJETA DE OFERTAS
let divOfertas = document.createElement("div");
divOfertas.setAttribute("class", "divOfertas");
let h1Ofertas = document.createElement("h1");
h1Ofertas.setAttribute("class", "h1Ofertas");
let textoH1Ofertas = document.createTextNode("Grandes descuentos en tecnología");
h1Ofertas.appendChild(textoH1Ofertas);
divOfertas.appendChild(h1Ofertas);
let parrafoOfertas = document.createElement("p");
parrafoOfertas.setAttribute("class", "parrafoOfertas");
let textoParrafoOfertas = document.createTextNode("Hasta un 50% de descuento en productos seleccionados")
parrafoOfertas.appendChild(textoParrafoOfertas);
divOfertas.appendChild(parrafoOfertas);
let botonOfertas = document.createElement("button");
botonOfertas.setAttribute("class", "botonOfertas");
let textoBotonOfertas = document.createTextNode("Ver ofertas");
botonOfertas.appendChild(textoBotonOfertas);
divOfertas.appendChild(botonOfertas);
document.body.appendChild(divOfertas)


// TARJETA DE PRODUCTOS DESTACADOS
let divDestacados = document.createElement("div");
divDestacados.setAttribute("class", "divDestacados");
let h1Destacados = document.createElement("h1");
h1Destacados.setAttribute("class", "h1Destacados");
let textoH1Destacados = document.createTextNode("Productos destacados");
h1Destacados.appendChild(textoH1Destacados);
divDestacados.appendChild(h1Destacados);
const producto1 = {
    nombre : "Producto 1",
    precio : "$99,99",
    imagenSrc: "img/producto1.jpg"
}
const producto2 = {
    nombre : "Producto 2",
    precio : "$49,99",
    imagenSrc: "img/producto2.jpg"
}
const producto3 = {
    nombre : "Producto 3",
    precio : "$19,99",
    imagenSrc: "img/producto3.jpg"
}

let productosDestacados = [producto1, producto2, producto3];
let divProductos = document.createElement("div");
divProductos.setAttribute("class", "divProductos");
productosDestacados.forEach(producto => {
  let divProducto = document.createElement("div");
  divProducto.setAttribute("class", "divProducto");
  let imagenProducto = document.createElement("img");
  imagenProducto.setAttribute("src", producto.imagenSrc);
  imagenProducto.setAttribute("alt", producto.nombre);
  divProducto.appendChild(imagenProducto);
  let h2Producto = document.createElement("h2");
  h2Producto.setAttribute("class", "h2Producto");
  let textoH2Producto = document.createTextNode(producto.nombre);
  h2Producto.appendChild(textoH2Producto);
  divProducto.appendChild(h2Producto);
  let parrafoProducto = document.createElement("p");
  parrafoProducto.setAttribute("class", "parrafoProducto");
  let textoParrafoProducto = document.createTextNode(producto.precio);
  parrafoProducto.appendChild(textoParrafoProducto);
  divProducto.appendChild(parrafoProducto);
  let botonProducto = document.createElement("button");
  botonProducto.setAttribute("class", "botonProducto");
  let textoBotonProducto = document.createTextNode("Agregar al carrito");
  botonProducto.appendChild(textoBotonProducto);
  divProducto.appendChild(botonProducto);
  divProductos.appendChild(divProducto);
});
divDestacados.appendChild(divProductos);
document.body.appendChild(divDestacados);

// CONTENIDO DEL FOOTER
let footer = document.createElement("footer");
let parrafoFooter = document.createElement("p");
parrafoFooter.setAttribute("class", "parrafoFooter");
let textoParrafoFooter = document.createTextNode("© 2025 MiTienda. Todos los derechos reservados. Tomás Cabello Fernández");
parrafoFooter.appendChild(textoParrafoFooter);
footer.appendChild(parrafoFooter);
let navEnlacesFooter = document.createElement("nav");
navEnlacesFooter.setAttribute("class", "navEnlacesFooter");
const enlacesFooter = ["Aviso legal", "Política de Privacidad", "Ayuda"];
enlacesFooter.forEach(enlace => {
  let enlaceFooter = document.createElement("a");
  enlaceFooter.setAttribute("class", "enlaceFooter");
  let textoEnlaceFooter = document.createTextNode(enlace);
  enlaceFooter.appendChild(textoEnlaceFooter);
  navEnlacesFooter.appendChild(enlaceFooter);
});
footer.appendChild(navEnlacesFooter);
document.body.appendChild(footer);

