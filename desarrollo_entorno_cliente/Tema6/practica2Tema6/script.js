
// INTERVALO DE 2 SEGUNDOS
// AÑADIMOS MENSAJES AUTOMÁTICOS AL ASIDE DE LA DERECHA

let contadorMensajes = 1;
const listaMensajes = document.getElementById("listaMensajes");
setInterval(() => {
  const nuevoMensaje = document.createElement("li");
  let textoMensaje = document.createTextNode(`Este es el mensaje ${contadorMensajes}`);
  nuevoMensaje.appendChild(textoMensaje);
  listaMensajes.appendChild(nuevoMensaje);
  if (contadorMensajes >= 20){
    listaMensajes.removeChild(listaMensajes.firstChild);
  }
  contadorMensajes++;
}, 2000);

// INTERVALO DE 4 SEGUNDOS
// AÑADIMOS UNA IMAGEN DISTINTA CADA 4 SEGUNDOS

const articulo = document.getElementsByTagName("article");
const titulo = document.createElement("p");
titulo.setAttribute("class", "titulo");
let textoTitulo = document.createTextNode(`A continuación generaremos una imagen cada 4 segundos`);
titulo.appendChild(textoTitulo);
articulo[0].appendChild(titulo);
setInterval(() => {
  articulo[0].removeChild(articulo[0].lastChild);
  const nuevaImagen = document.createElement("img");
  let atributoImagen = document.createAttribute("src");
  atributoImagen.value = `https://static.photos/blurred/640x360/${Math.floor(Math.random() * 200) + 1}`;
  nuevaImagen.setAttributeNode(atributoImagen);
  articulo[0].appendChild(nuevaImagen);
}, 4000);

// INTERVALO DE 6 SEGUNDOS
// AÑADIMOS UNA IMAGEN DISTINTA CADA 4 SEGUNDOS

const header = document.getElementsByTagName("header");
const mensaje = document.createElement("p");
mensaje.setAttribute("class", "titulo");
let textoMensaje = document.createTextNode(`Debajo se van mostrando frases de chiquito de la calzada cada 6 segundos`);
mensaje.appendChild(textoMensaje);
header[0].appendChild(mensaje);
let parrafoAnterior = null;
setInterval(() => {
  fetch('https://chiquitadas.es/api/quotes/avoleorrr')
  .then(response => response.json())
  .then(data => {
    const nuevaFrase = document.createElement("p");
    nuevaFrase.setAttribute("class", "frase");
    const frase = data.quote; 
    let textoFrase = document.createTextNode(frase);
    nuevaFrase.appendChild(textoFrase);
    header[0].appendChild(nuevaFrase);
    if (parrafoAnterior) {
      header[0].removeChild(parrafoAnterior);
    }
    parrafoAnterior = nuevaFrase;
  })
  .catch(error => {
    console.error("Error al cargar la frase:", error);
  });
}, 6000);

//

const footer = document.getElementsByTagName("footer");
const mensajeFooter = document.createElement("p");
let textoMensajeFooter = document.createTextNode(`Created by Tomás Cabello Fernández`);
mensajeFooter.appendChild(textoMensajeFooter);
footer[0].appendChild(mensajeFooter);