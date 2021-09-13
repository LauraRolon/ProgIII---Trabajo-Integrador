import React from "react";

function Pelicula (props){
    const {title, overview, release_date, original_title, popularity} = props.datosPelicula
    return(
        <>
            <main className="tarjeta">
                <section class="navigation">
                    <div>
                        <i class="fas fa-chevron-left"></i>
                        <i class="fas fa-chevron-right"></i>
                    </div>
                    <i class="far fa-window-close"></i>
                </section>
                <img className="imagen" src="https://image.tmdb.org/t/p/w342/pUc51UUQb1lMLVVkDCaZVsCo37U.jpg" alt="" />
                <h3 className="titulo">{title}</h3>
                <p className="description">{overview}</p>
                <section className="aditional-info">
                    <p className="tarjeta-info">Fecha de lanzamiento: {release_date}</p>
                    <p className="tarjeta-info">Título original: {original_title}</p>
                    <p className="tarjeta-info">Popularidad: {popularity}</p>
                </section>
                <section className="botones">
                    <a className="boton" href="">Ver más</a>
                    <a className="boton" href="" onClick={(evt) => this.eliminarTarjeta(evt)}> Eliminar </a>
                </section>

            </main>
        </>
    )
}

export default Pelicula