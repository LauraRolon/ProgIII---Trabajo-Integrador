import React, { Component } from "react";

 class Pelicula extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            verMas: false
        }
    }

    verMas(e) {
        e.preventDefault()
        if (this.state.verMas) {
            this.setState({
                verMas: false
            })
        }
        else {
            this.setState({
                verMas: true
            })
        }
    }   

    render(){
        const {backdrop_path, title, overview, release_date, original_title, popularity, id} = this.props.datosPelicula
        const {grilla} = this.props
        return(
            <>
            <main className={grilla?'tarjeta':'lista'}>
                <section class="navigation">
                    <div>
                        <i class="fas fa-chevron-left"></i>
                        <i class="fas fa-chevron-right"></i>
                    </div>
                    <i class="far fa-window-close"></i>
                </section>
                <img className={grilla?'imagen':'imagenLista'} src={`https://image.tmdb.org/t/p/w342/${backdrop_path}`} alt="" />
                <div className={grilla?'title':'titleLista'}>
                    <h3 className="titulo">{title}</h3>
                </div>
                
                <div className={grilla?'overview':'overviewLista'}>
                    <p className={grilla?'description':'descriptionLista'}>{overview}</p>
                </div>
                
                <section className={this.state.verMas?'vermas':'aditional-info'}>
                    <p className="tarjeta-info">Fecha de lanzamiento: {release_date}</p>
                    <p className="tarjeta-info">Título original: {original_title}</p>
                    <p className="tarjeta-info">Popularidad: {popularity}</p>
                </section>
                <section className="botones">
                    <a className="boton" onClick={(e)=> this.verMas(e)} href="">Ver más</a>
                    <a className="boton" onClick={(e) => this.props.eliminar(e,id)} href=""> Eliminar </a>
                </section>

            </main>
        </>
        );

    };
} 

export default Pelicula

