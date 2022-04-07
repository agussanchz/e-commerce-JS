
let nosotros = () => {
    contenidoInicio.remove()
    let contenidoNosotros= document.createElement("div")
    contenidoNosotros.innerHTML = `
                            <div class="container">
                                <div class="row">
                                    <div class="titulo-nosotros">
                                        <h2>Sobre Nosotros<h2>
                                    </div>
                            
                                    <div class="parrafo-nosotros">
                                        <p>AsPhone es una tienda digital dedicada a los usuarios fanaticos de Apple. Intentamos que usted tenga una experiencia única al navegar por nuestro sitio y en el cual disfrute de ver el contenido que desee. Por el momento estamos en una version Beta de la página, donde estamos probando diferentes diseños para atraer al ojo humano! Esperemos que disfruten. ¡Saludos!</p>
                                    </div>
                                </div>
                            </div>

                            <div class="container">
                                <div class="row">
                                    <div class="col-md-12">
                                        <form class="formulario">
                                            <h2>Contacto</h2>
                                            <input type="text" name="nombre" placeholder="Nombre">
                                            <input type="text" name="correo" placeholder="Correo">
                                            <input type="text" name="telefono" placeholder="Teléfono">
                                            <textarea name="mensaje" placeholder="Escriba aquí su mensaje"></textarea>
                                            <input type="button" value="ENVIAR" id="boton">
                                        </form>		
                                    </div>
                                </div>
                            </div>

    `   
    return contenidoNosotros
}