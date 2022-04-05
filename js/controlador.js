window.addEventListener("hashchange", () => {
    //console.log(window.location.hash)
    router(window.location.hash)
})

let contenidoInicio = document.querySelector(".contenido-inicio")
let contenidoTienda = document.querySelector("#tienda")
let tituloTienda = document.querySelector("#titulo-tienda")
let contenidoNosotros = document.querySelector("#nosotros")
let contenidoCarrito = document.querySelector("#carrito")

const router = (hash) => {
    contenidoTienda.innerHTML = ""
    tituloTienda.innerHTML = ""
    contenidoNosotros.innerHTML = ""
    contenidoCarrito.innerHTML = ""
    
    switch(hash){
        case "#/tienda":{
            tienda()
            return console.log("tienda")
        }

        case "#/nosotros":{
            contenidoNosotros.appendChild(nosotros())
            return console.log("nosotros")
        }

        case "#/carrito": {
            mostrarCarrito()
            return console.log("carrito")
        }

    }
}