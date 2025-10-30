// Función lambda que copia un texto en el portapapeles
var escribirPortaPapeles = function(){
        
        //comprobamos si el navegador soporta clipboard
        if(navigator.clipboard){
                navigator.clipboard.writeText("Hola mundo")
                .then(() => {
                        console.log('Texto copiado al portapapeles')
                })
                .catch(err => {
                        console.error('Error al copiar al portapapeles:', err)
                })
        }
        else
        {
                console.log("Este navegador no soporta clipboard");
        }
};

//Función para leer un texto del portapapeles, varía la forma con respecto a la anterior
var leerPortaPapeles =function(){
        if(navigator.clipboard)
        {
                navigator.clipboard.readText()
                .then(function(texto){
                        console.log('Texto del portapapeles:', texto)
                })
                .catch(err => {
                        console.error('Error al leer del portapapeles:', err)
                })
        }
        else
        {
                console.log("Este navegador no soporta clipboard");
        }

};

//función para conocer si las cookies están habilitadas
var cookiesHabilitadas =function()
{
        alert(navigator.cookieEnabled);
};

//función con la información de geolocalización del usuario
var informacionGeolocalizacion=function(){
        // Verificar si el navegador admite la geolocalización
        if ("geolocation" in navigator) 
        {
                // Obtener la ubicación del usuario
                navigator.geolocation.getCurrentPosition(function(position) 
                {
                        var latitude = position.coords.latitude; // Obtener la latitud
                        var longitude = position.coords.longitude; // Obtener la longitud
                        // Hacer algo con la ubicación, por ejemplo, mostrarla en la consola
                        console.log("Latitud: " + latitude + ", Longitud: " + longitude);
                }, 
                function(error) {
                        // Manejar errores, por ejemplo, si el usuario deniega el acceso a su ubicación
                        console.error("Error al obtener la ubicación: " + error.message);
                });
        } 
        else 
        {
                // Mostrar un mensaje de error si la geolocalización no está disponible en el navegador
                console.error("La geolocalización no está disponible en este navegador.");
        }
};

//funcion que devuelve el idioma del navegador
var devolverIdioma=function()
{
        alert("El idioma es "+navigator.language);
        //probar con navigator.languages  en plural
};

//funcion que nos devuelve información sobre los plugins instalados
var agenteUsuario=function(){
        console.log(navigator.userAgent);
};

