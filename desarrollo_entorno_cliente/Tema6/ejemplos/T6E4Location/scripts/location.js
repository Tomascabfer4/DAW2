
var caracteristicasURL = function(){
        console.log("Dirección completa: "+location.href);
        console.log("Protocolo: "+location.protocol);
        console.log("Host y puerto: "+location.host);
        console.log("Nombre del host: "+location.hostname);
        console.log("Puerto: "+location.port);
        console.log("Cadena de búsqueda: "+location.search);
        console.log(location.origin);
       
};

var irOtraWeb = function()
{
        
       //reemplaza la página actual
       // location.replace("http://www.google.es");
       //abre nueva ventana
       window.open("http://www.google.es");
        
};