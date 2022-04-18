/*----------------------------------
    FUNCIONES GENERALES
-----------------------------------*/

const traerDeLocalStorage = (key) => {
    let carrito = [];
    if (localStorage.getItem(key)) {
        carrito = JSON.parse(localStorage.getItem(key));
    }
    return carrito;
};

const guardarEnLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

const obtenerProducto = async (id) => {
    const data = await fetch("/data.json")
        .then((res) => res.json())
        .then((data) => data);
    return data.find((producto) => producto.id == id);
};
