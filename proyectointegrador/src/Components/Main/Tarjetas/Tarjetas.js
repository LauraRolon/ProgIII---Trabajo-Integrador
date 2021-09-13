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
            loader: false
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

    render(){
        console.log("renderizado");
        console.log(this.state.peliculasOriginales)
        return (
            <> 

            {
                this.state.loader === false ?
                    <p>Cargando...</p> : 
                
                    this.state.peliculasOriginales.map( (pelicula) => (
                <Pelicula 
                    key={pelicula.id} 
                    datosPelicula={pelicula} 
                    eliminar={(peliculaEliminar) => this.eliminarTarjeta(peliculaEliminar)}/> 
                ))
            }
            
            
            <button>Agregar más tarjetas</button>
            <button>Reset</button>
            
            </>
        );
    }
    
}

export default Tarjetas;