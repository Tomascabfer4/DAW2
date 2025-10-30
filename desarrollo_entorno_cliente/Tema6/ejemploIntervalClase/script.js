miTemporizador = setInterval(() => {
    let hora = new Date();
    document.body.innerHTML = "";
    document.body.innerHTML = " Hora actual:" + hora;
}, 1000);