import React from "react";

function Pelicula (props){
    const {backdrop_path, title, overview, release_date, original_title, popularity, id} = props.datosPelicula
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
                <img className="imagen" src={`https://image.tmdb.org/t/p/w342/${backdrop_path}`} alt="" />
                <div className="title">
                    <h3 className="titulo">{title}</h3>
                </div>
                
                <div className="overview">
                    <p className="description">{overview}</p>
                </div>
                
                <section className={props.viewMore?'':'aditional-info'}>
                    <p className="tarjeta-info">Fecha de lanzamiento: {release_date}</p>
                    <p className="tarjeta-info">Título original: {original_title}</p>
                    <p className="tarjeta-info">Popularidad: {popularity}</p>
                </section>
                <section className="botones">
                    <a className="boton" onClick={(e)=> props.verMas(e)} href="">Ver más</a>
                    <a className="boton" onClick={() => props.eliminar(id)} href=""> Eliminar </a>
                </section>

            </main>
        </>
    )
}

export default Pelicula