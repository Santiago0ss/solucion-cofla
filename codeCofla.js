const container = document.querySelector(".flex-container");

function crearLlave (nombre, modelo, precio) {
    img = `<img src="llave.png"`;
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h3>${modelo}</h3>`;
    precio = `<p>${precio}</p>`;
    return [img, nombre, modelo, precio];
}

let documentFragment = document.createDocumentFragment();

for (var i = 1; i <= 20; i++) {
    let modeloRandoom = Math.round(Math.random()*10000);
    let precionRandom = Math.round(Math.random()*10+30);
    let llave = crearLlave(`Llave: ${i}`, `modelo: #${modeloRandoom}`, `Precio: $${precionRandom}`);
    let div = document.createElement("div");
    div.classList.add(`item-${i}`, `flex-item$`);
    div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
    container.innerHTML += llave;
    documentFragment.appendChild(div);
}

container.appendChild(documentFragment)

