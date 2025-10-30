//Obtener la URL completa
var urlCompleta = window.location.href;
console.log("URL completa: " + urlCompleta);

// Obtener el protocolo (http: o https:)
var protocolo = window.location.protocol;
console.log("Protocolo: " + protocolo);

// Obtener el nombre de host (ej. www.ejemplo.com)
var host = window.location.host;
console.log("Host: " + host);

// Obtener la ruta (ej. /pagina/ejemplo)
var ruta = window.location.pathname;
console.log("Ruta: " + ruta);

// Obtener los parámetros de consulta (ej. ?id=1&nombre=ejemplo)
var parametros = window.location.search;
console.log("Parámetros de consulta: " + parametros);

//Ir a una nueva página
var localizacion=window.location;
localizacion.assign("https://www.iesfranciscodelosrios.es/");

//recargar la página
//localizacion.reload();
