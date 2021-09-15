import React, { Component } from 'react';
import './Tarjetas.css';
import Pelicula from '../../Pelicula/Pelicula';
import FilterField from '../../FilterField/FilterField';

class Tarjetas extends Component {
    constructor(props){
        super(props);
        this.state = {
            peliculasOriginales: [],
            imagen: [],
            titulo: [],
            description: [],
            loader: false,
            verMas: false,
            peliculas: [],
           
            
        }
    }

    componentDidMount() {
        const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=c3dcc0e9ef8f3864ee4f5ed844d151f8&language=es-US`
        fetch(url)
        .then(response => response.json())
        .then( (data) => {
            console.log(data);
            this.setState({
                loader: true,
                peliculasOriginales: data.results,
                
                
            })
        })
        .catch(error => console.log(error))
    }


    eliminarTarjeta(id){
        console.log(id);
        const restoPeliculas = this.state.peliculasOriginales.filter( pelicula => pelicula.id != id)
        this.setState({
            peliculasOriginales : restoPeliculas
        })
    }

    filtrarPeliculas(textoFiltrar){
        let peliculasFiltradas = this.state.peliculasOriginales.filter( pelicula => 
            pelicula.title.toLowerCase().includes(textoFiltrar.toLowerCase())
        );
        this.setState({ 
            peliculasOriginales: peliculasFiltradas
        })

    }

    verMas(e){
        e.preventDefault()
        if (this.state.verMas){
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

    cargarMas(){
        const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=c3dcc0e9ef8f3864ee4f5ed844d151f8&language=es-US`
        fetch(url)
            .then( response => response.json())
            .then( data  => {
                this.setState({
                    peliculas: this.state.peliculasOriginales.concat(data.results),
                    
                })
            })
            .catch( err => console.log(err));
    }

    render(){
        console.log("renderizado");
        console.log(this.state.peliculasOriginales)
        return (
            
            <> 
                <header className="header">
                    <section className="seccionHeader">
                        <li className="logotipo">
                            <img className="logo" src="./assets/img/image-default.png" alt="" />
                        </li>
                        <li className="titulosHeader">
                            <a className="textoHeader">Inicio</a>
                        </li>
                        <li className="titulosHeader">
                            <a className="textoHeader">Películas</a>
                        </li>
                        <li className="titulosHeader">
                            <a className="textoHeader">Series</a>
                        </li>
                        <li className="titulosHeader">
                            <FilterField buscarPelicula={(param) => this.filtrarPeliculas(param)} />
                        </li>
                    </section>
                </header>

            {     
                this.state.loader === false ?
                    <p>Cargando...</p> : 
                
                 this.state.peliculasOriginales.map( (pelicula) => (
                <Pelicula 
                    key={pelicula.id} 
                    datosPelicula={pelicula} 
                    eliminar={(peliculaEliminar) => this.eliminarTarjeta(peliculaEliminar)}
                    viewMore={this.state.verMas}
                    verMas={(e) => this.verMas(e)}

                    /> 
                ))
            }
            
            
            <button onClick={()=>this.cargarMas()}>Ver más películas</button>
            <button onClick={()=>this.cargarMas()}>Reset</button>
            
            </>
        );
    }
    
}

export default Tarjetas;