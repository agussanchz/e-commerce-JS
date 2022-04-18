window.addEventListener("hashchange", () => {
    //console.log(window.location.hash)
    router(window.location.hash);
});

/*----------------------------------
    VARIABLES
-----------------------------------*/
let contenidoInicio = document.querySelector(".contenido-inicio");
let contenidoTienda = document.querySelector("#tienda");
let tituloTienda = document.querySelector("#titulo-tienda");
let contenidoNosotros = document.querySelector("#nosotros");
let contenidoCarrito = document.querySelector("#carrito");

/*----------------------------------
    Funcion controladora del menu
-----------------------------------*/
const router = (hash) => {
    contenidoTienda.innerHTML = "";
    tituloTienda.innerHTML = "";
    contenidoNosotros.innerHTML = "";
    contenidoCarrito.innerHTML = "";

    switch (hash) {
        case "#/tienda": {
            tienda();
            return console.log("tienda");
        }

        case "#/nosotros": {
            contenidoNosotros.appendChild(nosotros());
            return console.log("nosotros");
        }

        case "#/carrito": {
            mostrarCarrito();
            return console.log("carrito");
        }
    }
};

/*----------------------------------
    Evento seccion tienda
-----------------------------------*/
contenidoTienda.addEventListener("click", async (e) => {
    if (e.target.classList.contains("comprar")) {
        const carrito = traerDeLocalStorage("carrito");
        const producto = await obtenerProducto(e.target.id);
        carrito.push(producto);
        guardarEnLocalStorage("carrito", carrito);
        Swal.fire(
            "Producto agregado al carrito!",
            "Gracias por su compra.",
            "success"
        );
    } 
});

/*----------------------------------
    Evento seccion carrito
-----------------------------------*/
contenidoCarrito.addEventListener("click", (e) => {
    if (e.target.classList.contains("eliminar")) {
        const id = e.target.id;

        let carrito = traerDeLocalStorage("carrito");

        carrito = carrito.filter((producto) => producto.id != id);

        guardarEnLocalStorage("carrito", carrito);

        mostrarCarrito();
    }
});
