const traerDeLocalStorage = (key) => {
    let carrito = []
    if (localStorage.getItem(key)) {
        carrito = JSON.parse(localStorage.getItem(key))
        
    }
    return carrito;
}

const guardarEnLocalStorage = (key,value) => {
    localStorage.setItem(key, JSON.stringify(value))
}


const mostrarCarrito = () => {
    const carrito = traerDeLocalStorage("carrito")

    if (carrito.length == 0){
        contenidoCarrito.innerHTML = `
                <div class="carrito-vacio">
                    <p>Tu carrito está vacío</p>
                    <i class="bi bi-emoji-frown-fill"></i>
                </div>
        `
    }
    else {
        const ul = document.createElement("ul")
        contenidoCarrito.innerHTML = ""
        carrito.forEach (producto => {
            
            ul.innerHTML += `
                    <div class="card" style="width: 12rem;">
                        <img src="${producto.imagen}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${producto.nombre}</h5>
                            <p class="card-text">$US ${producto.precio}</p>
                            <button id="${producto.id}" class="eliminar btn btn-primary">ELIMINAR</button>
                        </div>
                    </div>
            `
        })
        contenidoCarrito.appendChild(ul)
    }
}

contenidoCarrito.addEventListener("click", e => {
    
    if (e.target.classList.contains("eliminar")){
        
        const id = e.target.id

        let carrito = traerDeLocalStorage("carrito")

        carrito = carrito.filter(producto => producto.id != id)

        guardarEnLocalStorage("carrito",carrito)

        mostrarCarrito()
    }
})
