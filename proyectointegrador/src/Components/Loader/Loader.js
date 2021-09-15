import React, { Component } from 'react'
import Tarjetas from '../Main/Tarjetas/Tarjetas';

let tiempo;

class Loader extends Component{
    constructor(props) {
        super(props);
        this.state = {
            cargando: false,
        }
    }
    
    tiempo = setTimeout( () => this.setState({ cargando: true }), 2000);

    render(){
        if (!this.state.cargando) {
            return(
                <p>Cargando...</p>
            );
        } else {
            return (
                <Tarjetas />
            );
        }
    }
}

export default Loader