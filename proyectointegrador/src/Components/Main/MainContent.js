import React, { Component } from 'react';
import './MainContent.css';
import Pelicula from '../Pelicula/Pelicula';
import Header from '../Header/Header';

let tiempo;
class MainContent extends Component {
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
            page: 1
           
            
        }
    }

    componentDidMount() {
        const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=c3dcc0e9ef8f3864ee4f5ed844d151f8&language=es-US&page=${this.state.page}`
        fetch(url)
        .then(response => response.json())
        .then( (data) => {
            console.log(data);
            this.setState({
                peliculas: data.results,
                page: this.state.page + 1
            },
            )})
       
        .catch(error => console.log(error))
    }


    eliminarTarjeta(id){
        console.log(id);
        const restoPeliculas = this.state.peliculas.filter( pelicula => pelicula.id != id)
        this.setState({
            peliculas : restoPeliculas
        }, )
        
    }

    filtrarPeliculas(textoFiltrar){
        let peliculasFiltradas = this.state.peliculas.filter( pelicula => 
            pelicula.title.toLowerCase().includes(textoFiltrar.toLowerCase())
        );
        this.setState({ 
            peliculas: peliculasFiltradas
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
        const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=c3dcc0e9ef8f3864ee4f5ed844d151f8&language=es-US&page=${this.state.page}`
        console.log('urlConsulta',url)
        fetch(url)
            .then( response => response.json())
            .then( data  => {
                //console.log(data)
                this.setState({
                    peliculas: this.state.peliculas.concat(data.results),
                    page: this.state.page + 1
                },)})
                
            .catch( err => console.log(err));
    }

    tiempo = setTimeout( () => this.setState({ loader: true }), 2000)

    render(){
        console.log(this.state.peliculas);
        return (
            
            <> 
            <main className="containerMain">
                    <Header buscarPelicula={(param) => this.filtrarPeliculas(param)}/>

                {     
                    this.state.loader === false ?
                        <p>Cargando...</p> : 
                    
                    this.state.peliculas.map( (pelicula) => (
                    <>
                        <Pelicula 
                            key={pelicula.id} 
                            datosPelicula={pelicula} 
                            eliminar={(peliculaEliminar) => this.eliminarTarjeta(peliculaEliminar)}
                            viewMore={this.state.verMas}
                            verMas={(e) => this.verMas(e)}

                        />
                        
                    </>
                    ))
                }
                
                <section className="sectionBotones">
                    <button className="botonesAdicionales" onClick={()=>this.cargarMas()}>Ver más películas</button>
                    <button className="botonesAdicionales" onClick={()=>this.cargarMas()}>Reset</button>
                </section>
            </main>
            
            
            </>
        );
    }
    
}

export default MainContent;