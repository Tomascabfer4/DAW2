// Definir una función lambda para obtener el tamaño de la ventana del navegador
const obtenerTamanioVentana = ()=>{
    // Obtén el ancho y el alto de la ventana del navegador
    const anchoVentana = window.innerWidth;
    const altoVentana = window.innerHeight;

    // Devuelve un objeto con el ancho y el alto de la ventana del navegador
    return {
        ancho: anchoVentana,
        alto: altoVentana
    };
};