import React, { Component } from 'react';
import './Tarjetas.css';
import Pelicula from '../../Pelicula/Pelicula';

class Tarjetas extends Component {
    constructor(props){
        super(props);
        this.state = {
            peliculas: [],
            imagen: [],
            titulo: [],
            description: [],
            datos: ""
        }
    }

    componentDidMount() {
        const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=c3dcc0e9ef8f3864ee4f5ed844d151f8&language=es-US`
        fetch(url)
        .then(response => response.json())
        .then( (data) => {
            console.log(data);
            this.setState({ peliculas: data.results })
        })
        .catch(error => console.log(error))
    }


    eliminarTarjeta(evt){
        alert("Clickeaste en" + evt.target.textContent)
    }

    render(){
        console.log("renderizado");
        console.log(this.state.peliculas)
        return (
            <> 
             { this.state.peliculas.map( (pelicula) => (
                <Pelicula key={pelicula.id} datosPelicula={pelicula} />
             ))}
            </>
        );
    }
    
}

export default Tarjetas;