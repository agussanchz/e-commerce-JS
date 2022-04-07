let tienda = async () => {
    contenidoInicio.remove();

    const titulo = document.createElement("div");
    titulo.innerHTML = `<h2 class="titulo-tienda">T I E N D A</h2>`;
    tituloTienda.appendChild(titulo);
    const data = await fetch("/data.json")
        .then((res) => res.json())
        .then((data) => data);

    data.forEach((producto) => {
        const card = document.createElement("div");
        card.innerHTML += `
                                <div class="card" style="width: 12rem;">
                                    <img src="${producto.imagen}" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">${producto.nombre}</h5>
                                        <p class="card-text">$US ${producto.precio}</p>
                                        <button id="${producto.id}" class="comprar btn btn-primary">COMPRAR</button>
                                    </div>
                                </div>
            `;
        contenidoTienda.appendChild(card);
    });
};
