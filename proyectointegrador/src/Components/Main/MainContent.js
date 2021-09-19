import React, { Component } from 'react';
import './MainContent.css';
import Pelicula from '../Pelicula/Pelicula';
import Header from '../Header/Header';

let tiempo;
class MainContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculasOriginales: [],
            imagen: [],
            titulo: [],
            description: [],
            loader: false,
            verMas: false,
            peliculas: [],
            page: 1,
            grilla: true


        }
        this.eliminarTarjeta = this.eliminarTarjeta.bind(this)
    }

    componentDidMount() {
        const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=c3dcc0e9ef8f3864ee4f5ed844d151f8&language=es-US&page=${this.state.page}`
        fetch(url)
            .then(response => response.json())
            .then((data) => {
                console.log(data);
                this.setState({
                    peliculas: data.results,
                    page: this.state.page + 1
                },
                )
            })

            .catch(error => console.log(error))
    }


    eliminarTarjeta(e,id) {
        e.preventDefault()
        const restoPeliculas = this.state.peliculas.filter(pelicula => pelicula.id != id)
        this.setState({
            peliculas: restoPeliculas
        })

    }

    filtrarPeliculas(textoFiltrar) {
        let peliculasFiltradas = this.state.peliculas.filter(pelicula =>
            pelicula.title.toLowerCase().includes(textoFiltrar.toLowerCase())
        );
        this.setState({
            peliculas: peliculasFiltradas
        })

    }


    vistaGrilla() {
         this.setState({grilla: !this.state.grilla}) //el estado que era antes se actualiza. pido que se setee a un objeto que era grilla aalgo que no sea grilla, lo niego
        console.log(this.state.grilla) 
    }
 
    cargarMas() {
        const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=c3dcc0e9ef8f3864ee4f5ed844d151f8&language=es-US&page=${this.state.page}`
        console.log('urlConsulta', url)
        fetch(url)
            .then(response => response.json())
            .then(data => {
                //console.log(data)
                this.setState({
                    peliculas: this.state.peliculas.concat(data.results),
                    page: this.state.page + 1
                })
            })

            .catch(err => console.log(err));
    }

    tiempo = setTimeout(() => this.setState({ loader: true }), 2000)

    render() {
        console.log(this.state.peliculas);
        return (

            <>
                <main className={this.state.grilla? 'containerMain':'containerMainLista'}>
                    <Header 
                        buscarPelicula={(param) => this.filtrarPeliculas(param)} 
                        vistaGrilla= {() => this.vistaGrilla()}
                    />

                    {
                        this.state.loader === false ?
                            <p>Cargando...</p> :

                            this.state.peliculas.map((pelicula) => (
                                <>
                                    
                                        <Pelicula
                                            key={pelicula.id}
                                            datosPelicula={pelicula}
                                            eliminar={this.eliminarTarjeta} 
                                            viewMore={this.state.verMas}
                                            verMas={(e) => this.verMas(e)}
                                            grilla={this.state.grilla}

                                        />
                                    
                    
 
                                </>
                            ))
                    }

                    <section className="sectionBotones">
                        <button className="botonesAdicionales" onClick={() => this.cargarMas()}>Ver más películas</button>
                        <button className="botonesAdicionales" onClick={() => this.cargarMas()}>Reset</button>
                    </section>
                </main>


            </>
        );
    }

}

export default MainContent;