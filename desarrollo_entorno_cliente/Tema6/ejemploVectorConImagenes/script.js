// miTemporizador = setInterval(() => {
//     let hora = new Date();
//     document.body.innerHTML = "";
//     document.body.innerHTML = " Hora actual:" + hora;
// }, 1000);

// vectorImagenes = [
//   "gambling.jpg",
//   "images.jpg",
//   "juan.webp",
//   "alicuecano.jpeg",
//   "papigavi.jpg",
// ];
// contador = 0;
// temporizador2 = setInterval(() => {
//   contador++;
//   document.body.innerHTML = "";
//   document.body.innerHTML = `<img src="${vectorImagenes[contador]}" alt="image">`;
//   if (contador === 4) {
//     contador = 0;
//   }
// }, 1000);

miTemporizador = setInterval(() => {
     let hora = new Date();
     document.body.innerHTML = "";
     document.body.innerHTML = "Hora actual: " + hora.getHours() + ":" + hora.getMinutes() + ":" + hora.getSeconds();
 }, 1000);