
let tienda = () => {
    contenidoInicio.remove()
    
    const titulo = document.createElement("div")
    titulo.innerHTML = `<h2 class="titulo-tienda">T I E N D A</h2>`
    tituloTienda.appendChild(titulo)
    
    fetch("/data.json")
        .then((res) => res.json())
        .then((data) => {

            data.forEach((producto) => {
                const card = document.createElement("div")
                card.innerHTML += `
                                    <div class="card" style="width: 12rem;">
                                        <img src="${producto.imagen}" class="card-img-top" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">${producto.nombre}</h5>
                                            <p class="card-text">$US ${producto.precio}</p>
                                            <button id="${producto.id}" class="comprar btn btn-primary">COMPRAR</button>
                                        </div>
                                    </div>
                `
                contenidoTienda.appendChild(card)
            })


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
        
            const obtenerProducto = (id) => {
                return data.find(producto => producto.id == id)
            }    
            
            contenidoTienda.addEventListener("click", e => {
                if (e.target.classList.contains("comprar")) {
                    const carrito = traerDeLocalStorage("carrito")
                    const producto = obtenerProducto(e.target.id)
                    carrito.push(producto)
                    guardarEnLocalStorage("carrito", carrito) 
                    Swal.fire(
                        'Producto agregado al carrito!',
                        'Gracias por su compra.',
                        'success'
                      )
                }
                
            })
        })
}