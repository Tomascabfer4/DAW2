// Un texto, una imagen, un párrafo, cada dos segundos
// Hacer que primero aparezca un texto, luego una imagen y luego un parrafo, cada segundo

let div = document.createElement("div");
document.body.appendChild(div);
let contador = 0;
temporizador = setInterval(() => {
  contador++;
    if (contador == 1){
        div.innerHTML = '';
        let h1 = document.createElement('h1');
        let textoh1 = document.createTextNode('Hola Mundo');
        h1.appendChild(textoh1);
        div.appendChild(h1)
    }else if (contador == 2){
        div.innerHTML = '';
        let img = document.createElement('img');
        let atributoImagen = document.createAttribute('src');
        atributoImagen.value = 'juan.webp';
        img.setAttributeNode(atributoImagen);
        div.appendChild(img);
    }else if (contador == 3){
        div.innerHTML = '';
        let p = document.createElement('p');
        let textop = document.createTextNode('Hola mundo pero en parrafo');
        p.appendChild(textop);
        div.appendChild(p);
        contador = 0;
    }
}, 2000);
