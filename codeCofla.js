const container = document.querySelector(".flex-container");

function crearLlave (nombre, modelo, precio) {
    img = `<img src="llave.png"`;
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h3>${modelo}</h3>`;
    precio = `<p>${precio}</p>`;
    return [img, nombre, modelo, precio];
}

let div = document.createElement("div");
div.classList.add("flex-item");

for (var i = 0; i < 20; i++) {
    let modeloRandoom = Math.random()*10000;
    let precionRandom = Math.random()*10+30;
    let llave = crearLlave(`Llave: ${i}`, `modelo: #${modeloRandoom}`, `Precio: $${precionRandom}`);
    let div = document.createElement("div");
    div.classList.add(`item-${i}`, `flex-item$`);
    div.innerHTML = llave;
    container.innerHTML += llave;
}

